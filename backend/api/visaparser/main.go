package main

import (
    "encoding/csv"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "strings"
    "sync"
)

const csvUrl = "https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy-iso2.csv"

var visaRequirements = make(map[string]string)
var mu sync.Mutex

func getVisaRequirements() error { 
	resp, err := http.Get(csvUrl)
	if err != nil {
		return fmt.Errorf("Error fetching CSV: %v", err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("Error reading CSV: %v", err)
	}

	r := csv.NewReader(strings.NewReader(string(body)))
	records, err := r.ReadAll()
	if err != nil {
		return fmt.Errorf("Error parsing CSV: %v", err)
	}

	mu.Lock()
	defer mu.Unlock()
	visaRequirements = make(map[string]string)
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

func webhookHandler(w http.ResponseWriter, r *http.Request) {
    event := r.Header.Get("X-GitHub-Event")
    if event == "push" {
        err := getVisaRequirements()
        if err != nil {
            log.Printf("Error updating visa requirements: %v", err)
            http.Error(w, "Failed to update visa requirements", http.StatusInternalServerError)
            return
        }
        log.Println("Visa requirements updated.")
    }
    w.WriteHeader(http.StatusOK)
}

func visaRequirementsHandler(w http.ResponseWriter, r *http.Request) {
	mu.Lock()
	defer mu.Unlock()
	w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(visaRequirements)
}

func main() {
    http.HandleFunc("/webhook", webhookHandler)
    http.HandleFunc("/visa-requirements", visaRequirementsHandler)

    log.Println("Server is running on port 3000")
    log.Fatal(http.ListenAndServe(":3000", nil))
}