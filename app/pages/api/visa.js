import fetch from 'node-fetch';

export default async function handler(req, res) {

    try {
        const searchPassport = req.query.passport;
        const searchCountry = req.query.destination;

        const response = await fetch('https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy-iso2.csv');
        const text = await response.text();
        
        // split the file into lines and then, the first line into an array of column names
        const lines = text.split('\n');
        const headers = lines[0].split(',');

        let searchResult;
        // iterate through the rest of the lines (data)
        for (let i = 1; i < lines.length; i++) {
            // split the current line into an array of values
            const values = lines[i].split(',');

            // create a hashmap with keys from the headers array and values from the values array
            const row = {};
            for (let j = 0; j < headers.length; j++) {
                row[headers[j]] = values[j];
            }
            
            // check if the current row matches the passport and country we're searching for
            if (row.Passport === searchPassport && row.Destination === searchCountry) {
                searchResult = row.Requirement;
                break;
            }
        }
        //if we have found a search result, we 
        if (searchResult) {
            res.json({ Requirement: searchResult });
        } else {
            res.status(404).json({ message: `No match found for ${searchPassport} ${searchCountry}` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
}