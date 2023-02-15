import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { countries, isoCodes, countriesArray, countryNameList, countryCodeList } from '../scripts/countrydata.js'
import { useRouter } from 'next/router'
import { Combobox } from '@headlessui/react'

const SearchBar = () => {

    const INITIAL_PASSPORT_STATE = "Select passport..."
    const INITIAL_DESTINATION_STATE = "Choose Destination..."

    const [selectPassport, setSelectedPassport] = useState(INITIAL_PASSPORT_STATE);
    const [selectDestination, setSelectedDestination] = useState(INITIAL_DESTINATION_STATE);
    
    const [query, setPassportQuery] = useState('')
    const [query, setDestinationQuery] = useState('')

    const inputRef = useRef(null)

    const router = useRouter();
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        if(selectPassport === INITIAL_PASSPORT_STATE || selectDestination === INITIAL_DESTINATION_STATE)
            return;
        try{
            router.push({
                
                pathname: `/destinations/[destination]`,
                query: { passport: selectPassport, destination: selectDestination},
            })
        } catch(error){
            console.error(error);
        }
    };

    let searchButton;
    if(selectPassport === INITIAL_PASSPORT_STATE || selectDestination === INITIAL_DESTINATION_STATE)
        searchButton = <button type="submit" className={SBStyle.ButtonInactive}> Do you need a visa?</button>
    else
        searchButton = <button type="submit" className={SBStyle.ButtonActive}> Do you need a visa?</button>

    const filteredPassports =
        query === ''
            ? countriesArray
            : countriesArray.filter((passport) => {
                console.log(`Passport: ${passport}`)
                console.log(`Query: ${query}`)
                console.log(passport.toLowerCase().includes(query.toLowerCase()))
                return passport.toLowerCase().includes(query.toLowerCase())
            })

    const filteredDestinations =
    query === ''
        ? countriesArray
        : countriesArray.filter((destination) => {
            console.log(`Passport: ${passport}`)
            console.log(`Query: ${query}`)
            console.log(destination.toLowerCase().includes(query.toLowerCase()))
            return destination.toLowerCase().includes(query.toLowerCase())
        })

    return(        
        <div>
            <form type="submit" onSubmit={handleFormSubmit}>
                <div className={SBStyle.SearchBarContainer}>
                    <div className={SBStyle.iconTag}>
                        <div className={SBStyle.CustomSearchBar}>
                            <Image src="passport-solid.svg" width={32} height={32} className={SBStyle.PassportImg}></Image>
                            <Combobox value={selectPassport} onChange={(passport) => setSelectedPassport(passport)}>
                                <Combobox.Input className={SBStyle.Input} ref={inputRef} onChange={(event) => setPassportQuery(event.target.value)}/>
                                <div>
                                    <Combobox.Options className={SBStyle.ScrollContentContainer}>
                                        {filteredPassports.map((code) => (
                                        <Combobox.Option key={isoCodes[code.toLowerCase()]} value={code} className={SBStyle.CountryOption}>
                                            {code}
                                        </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                </div>
                            </Combobox>
                        </div>
                    </div>
                
                    <div className={SBStyle.iconTag}>
                        <div className={SBStyle.CustomSearchBar}>      
                            <Image src="pin.svg" width={28} height={28} className={SBStyle.DestinationImg}></Image>   
                            <Combobox value={selectDestination} onChange={(destination) => setSelectedDestination(destination)}>
                                <Combobox.Input className={SBStyle.Input} ref={inputRef} onChange={(event) => setDestinationQuery(event.target.value)}/>
                                <div>
                                    <span className="inline-block w-full">
                                    <Combobox.Options className={SBStyle.ScrollContentContainer}>
                                        {filteredDestinations.map((code) => (
                                        <Combobox.Option key={isoCodes[code.toLowerCase()]} value={code} className={SBStyle.CountryOption}>
                                            {code}
                                        </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                    </span>
                                </div>
                            </Combobox>         
                        </div>
                    </div>
                    {searchButton}
                </div>
            </form>
        </div>
    );
};

export default SearchBar;