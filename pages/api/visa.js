import { getVisaRequirements } from '../../utils/visadata.js'

export default async function handler(searchPassport, searchDestination) {

    try {
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
        // res.status(500).json({ message: 'An error occurred' });
    }
}