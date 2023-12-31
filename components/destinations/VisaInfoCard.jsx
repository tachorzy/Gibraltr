import { supremeMedium } from '../../utils/localNextFonts.js'

const VisaInfoCard = ({requirement}) => {

    const visaOptions = new Map([
        ['visa required', { title: 'Visa Required', description: "You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy."}],
        ['e-visa', { title: 'e-Visa', description: "Electronic visas are filled out online on an official government website or through a travel agency."}],
        ['visa on arrival', { title: 'Visa-on-arrival', description: "Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport."}],
        ['', { title: 'Visa Free', description: "You are able to enter visa free. However, make note of how long you can stay in the country. As well, as additional entry requirements."}],
    ])
    
    let title = "Visa Free";
    let description = "You are able to enter visa free. However, make note of how long you can stay in the country. As well, as additional entry requirements.";
    
    if (visaOptions.has(requirement)) {
        title = visaOptions.get(requirement).title
        description = visaOptions.get(requirement).description
    }

    return(
        <div className={supremeMedium.className + " w-72 md:w-96 h-40  text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>{title}</p>
            <p className={"max-md:text-sm leading-relaxed"}>{description}</p>
        </div>
    );
}

export default VisaInfoCard;