import fetch from 'node-fetch';
import { visaRequirements } from '../../scripts/visadata.js'

export default function handler(req, res) {

    try {
        const searchPassport = req.query.passport;
        const searchDestination = req.query.destination;

        const key = JSON.stringify({searchPassport, searchDestination})
        const requirement = visaRequirement.get(key)        

        //if we have found a search result, we 
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