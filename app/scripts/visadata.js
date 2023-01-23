import fetch from 'node-fetch';

const csvURL = 'https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy-iso2.csv'

export async function getVisaRequirements(){
    const response = await fetch(csvURL)
    const text = await response.text();
    
    const rows = text.split('\n');
    const visaRequirements = new Map();

    rows.forEach(row => {
        const [passportISO, destinationISO, requirement] = row.split(',');
        const keyNationPair = JSON.stringify({passportISO, destinationISO});
        visaRequirements.set(keyNationPair, requirement);
    })
    return visaRequirements;
}
