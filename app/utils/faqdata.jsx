import Link from 'next/link';
import FAQStyles from '../styles/FAQStyle.module.css'

export const visaFAQContent = new Map();

visaFAQContent.set("What is a travel visa?", <p>A travel visa is a document that grants you the ability to enter a country via an authorized port of entry and to stay in that country for a specific length of time. There are different types of visas that serve different purposes. Some are for students, residents, spouses, and tourists. Our search engine connects you with the latest information for <b>tourist visas</b>.</p>)
visaFAQContent.set("Why do you need a visa?", "A visa is what allows you entry into another country. Without one, you may be denied entry into your destination. That's why it is crucial to understand the visa requirements of your destination before you book that next trip.")
visaFAQContent.set("What are the different types of visa requirements?", <p>Different countries will demand different requirements based on an traveler's nationality. Some countries may not require you to get a visa at all, in this case they are <b>visa free</b>. Some may require an electronic visa commonly referred to as an <b>e-Visa</b>. Depending on the country, these may also be referred to as electronic travel authorizations. There are also countries that provide a <b>visa on arrival</b> to certain nationalities. In this case, a traveler arrives to their destination's port of entry and purchases a visa. For most of the world however, none of these options are available. No matter your passport, you'll most likely notice some countries that require you to get an <b>embassy visa</b>. In these cases, travelers must visit an embassy or consulate in order to apply for a visa in person.</p>)
visaFAQContent.set("How do you apply for an e-Visa?", "An electronic visa, or e-Visa, is an digital alternative to a traditional visa. These are filled out online and ahead of arrival. Generally, travelers apply for their e-Visa through an official website for their destination or through a third party travel agency. These applications involve providing a passport photo, personal information and basic details about your planned visit to the country.")
visaFAQContent.set("What is a Schegen visa?", "The growing cooperation of European nations has resulted in the success of the Schengen Area — an area encompassing 27 European countries that share open borders. Upon entry into the Schengen Area, your visa to a Schengen member country will also count as a Schengen visa. With this visa, travelers are granted a stay of up to 90 days in a 180-day period, and may freely move within the Schengen area.")

export const generalFAQContent = new Map();

generalFAQContent.set("How many countries are available on Gibraltr?", <p>Gibraltr provides the latest information on visa requirements for <b>199</b> nationalities and destinations.</p>)
generalFAQContent.set("Do you plan on supporting more nationalities?", "It's our mission to represent and include as many nations as we can through available data. However, it's not an easy task to present every nation in the world. Some countries simply slip through the cracks and end up being left out, one such country is the partially recognized nation of Kosovo. Nevertheless, we do plan to add every nation with a well-founded diplomacy, visa policy and passport.")
generalFAQContent.set("Where are you sourcing your data?", "We receive our information on visa requirements through a regularly updated open-source data set built off of the Passport Index API.")
generalFAQContent.set("Are your results a reliable source?", "Our results should always reflect the latest data in the Passport Index. Gibraltr is a gateway to the latest visa information accessible to us. The rest of the work lies in your hands as a responsible visa applicant and traveler. Along the way in your research you'll form a sound and sensible itinerary.")

export const devFAQContent = new Map();

devFAQContent.set("Is Gibraltr open source?","Yes, Gibraltr is an open source platform that's built from a community of those interested in travel.")
devFAQContent.set("What is open source?", "Open source means that anyone can contribute to Gibraltr. However, contributions must be approved by the Gibraltr developer team.")
devFAQContent.set("What language is Gibraltr developed in?","Gibraltr is developed using Next.js, JavaScript, and TailwindCSS.")
devFAQContent.set("Where can I contribute?", <p></p>)
devFAQContent.set("","")
devFAQContent.set("","")
