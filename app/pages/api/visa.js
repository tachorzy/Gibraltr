import fetch from 'node-fetch';

export default async function handler(req, res) {
    const searchPassport = 'GB';
    const searchCountry = 'AL';

    try {
        const response = await fetch('https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy-iso2.csv');
        const text = await response.text();

        // split the csv text into an array of lines
        const lines = text.split('\n');

        // split the first line (header) into an array of column names
        const headers = lines[0].split(',');

        let searchResult;
        // iterate through the rest of the lines (data)
        for (let i = 1; i < lines.length; i++) {
            // split the current line into an array of values
            const values = lines[i].split(',');

            // create an object with keys from the headers array and values from the values array
            const row = {};
            for (let j = 0; j < headers.length; j++) {
                row[headers[j]] = values[j];
            }
            
            console.log(`visa_requiremnt ${row.Requirement}`)
            // check if the current row matches the passport and country we're searching for
            if (row.Passport === searchPassport && row.Destination === searchCountry) {
                console.log(`VISA REQUIREMENTS FOUND`)
                searchResult = row.Requirement;
                break;
            }
        }

        if (searchResult) {
            res.json({ Requirement: searchResult });
        } else {
            console.log('${searchResult} end')
            res.status(404).json({ message: `No match found for ${searchPassport} ${searchCountry}` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
}