import fetch from 'isomorphic-unfetch'
import { countries, isoCodes, countryCodeList } from '../../scripts/countrydata.js'
import { getVisaRequirements } from '../../scripts/visadata.js'

export async function getServerSideProps({ query }){
    // const { destination } = params
    // const res = await fetch('http://localhost:3000/api/visa')
    //     .then(res => res.json())
    //     .catch(error => console.log(error));
    // const visaRequirements = await res.join()
    const { passport, destination } = query;

    const passportKey = passport.toLowerCase()
    const destinationKey = destination.toLowerCase()

    const passportISO = isoCodes[passportKey]
    const destinationISO = isoCodes[destinationKey]
    
    const visaRequirements = await getVisaRequirements();
    const key = JSON.stringify({ passportISO, destinationISO });

    const requirement = visaRequirements.get(key);
    return {props: {requirement, passport, destination}}
}

export default function Destination({requirement, passport, destination}){
    return(
        <div>
            <h1>Passport: {passport}</h1>
            <h1>Destination: {destination}</h1>
            <h1>Requirements: {requirement}</h1>

        </div>
    );

}   