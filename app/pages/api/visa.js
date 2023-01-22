import fetch from 'node-fetch';
import { getVisaRequirements } from '../../scripts/visadata.js'

export default async function handler(req, res) {

    try {
        
        const searchPassport = req.query.passport;
        const searchDestination = req.query.destination;

        const visaRequirements = await getVisaRequirements();
        const key = JSON.stringify({ searchPassport, searchDestination })
        const requirement = visaRequirements.get(key);

        if (requirement) {
            res.json({ Requirement: requirement });
        } else {
            res.status(404).json({ message: `No match found for ${searchPassport} ${searchDestination}` });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
}