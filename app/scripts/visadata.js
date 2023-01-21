import fetch from 'node-fetch';

const csvURL = 'https://raw.githubusercontent.com/ilyankou/passport-index-dataset/master/passport-index-tidy.csv'
const response = await fetch(csvURL);

const text = await response.text();

const rows = text.split('\n');
const headers = rows[0].split(',');

export const visaRequirements = new Map();
rows.forEach(row => {
    const [passport, destination, requirement] = row.split(',')
    visaRequirements.set({passport, destination}, requirement)
})