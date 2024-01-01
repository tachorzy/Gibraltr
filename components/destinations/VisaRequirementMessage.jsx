import { isoCodesList, schengenCountries } from '../../utils/countrydata.js'
import { passportDemonyms } from '../../utils/demonymdata.js'

const VisaRequirementMessage = ({passport, destination, requirement}) => {
    const passportISO = isoCodesList[passport.toLowerCase()].toLowerCase()
    const passportDemonym = passportDemonyms.get(passportISO)

    if (requirement !== "visa required" && requirement !== "e-visa" && requirement !== "visa on arrival" && requirement !== "no admission") {
       return( 
            <h3 className={"max-md:w-full w-[85%] text-stone-700 mt-3 md:mt-8 text-sm md:text-3xl justify-between leading-10"}>
                You don't need a visa for {destination} if you have {(/^[aeiou]$/i).test(passportDemonym[0]) ? "an" : "a"} <b>{passportDemonym}
            </b> passport</h3>
       )
    }
    else if (requirement === "visa required" || requirement === "e-visa" || requirement === "visa on arrival" || requirement === "no admission") {
        return (
            <h3 className={"max-md:w-full w-[85%] text-stone-700 mt-3 md:mt-8 text-sm md:text-3xl justify-between leading-10"}>
                You need a visa for {destination} if you have {(/^[aeiou]$/i).test(passportDemonym[0]) ? "an" : "a"} <b>{passportDemonym}
            </b> passport</h3>
        )
    }
}

export default VisaRequirementMessage;



