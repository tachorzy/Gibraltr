package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"sync"
)

const csvUrl = "https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy-iso2.csv"

var visaRequirements = make(map[string]string)
var mu sync.Mutex

func fetchCSVData(url string) ([]byte, error) {

	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %v", err)
	}

	return body, nil
}

func parseCSVData(data []byte) error {
	r := csv.NewReader(strings.NewReader(string(data)))
	records, err := r.ReadAll()
	if err != nil {
		return fmt.Errorf("failed to read csv data: %v", err)
	}

	for _, record := range records {
		if len(record) < 3 {
			continue
		}
		passportISO := record[0]
		destinationISO := record[1]
		requirement := record[2]
		keyNationPair := fmt.Sprintf("%s-%s", passportISO, destinationISO)
		visaRequirements[keyNationPair] = requirement
	}

	return nil
}

func fetchAndParseCSV() error {
	data, err := fetchCSVData(csvUrl)
	if err != nil {
		return fmt.Errorf("failed to fetch csv data: %v", err)
	}

	err = parseCSVData(data)
	if err != nil {
		return fmt.Errorf("failed to parse csv data: %v", err)
	}

	return nil
}

func webhookHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	if err := fetchAndParseCSV(); err != nil {
		http.Error(w, fmt.Sprintf("Failed to fetch and parse CSV: %v", err), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("CSV data successfully fetched and parsed"))
}

func visaRequirementsHandler(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(visaRequirements); err != nil {
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
		log.Printf("Error encoding response: %v", err)
	}
}

func main() {
	if err := fetchAndParseCSV(); err != nil {
		log.Fatalf("Error loading visa requirements: %v", err)
	}

	http.HandleFunc("/webhook", webhookHandler)
	http.HandleFunc("/visa-requirements", visaRequirementsHandler)

	log.Println("Server is running on port 8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
