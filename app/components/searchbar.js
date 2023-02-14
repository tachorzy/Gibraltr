import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { countries, isoCodes, countryCodeList } from '../scripts/countrydata.js'
import { useRouter } from 'next/router'
import { Combobox } from '@headlessui/react'

const SearchBar = () => {

    //Hooks and States -- to change the state values. The initial state are the prompts
    const INITIAL_PASSPORT_STATE = "Select passport..."
    const INITIAL_DESTINATION_STATE = "Choose Destination..."

    const [selectPassport, setSelectedPassport] = useState(INITIAL_PASSPORT_STATE);
    const [selectDestination, setSelectedDestination] = useState(INITIAL_DESTINATION_STATE);
    
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // const [query, setQuery] = useState('');
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
        searchButton = <button type="submit" className={SBStyle.Button}> Do you need a visa?</button>
    return(        
        <div>
            <form type="submit" onSubmit={handleFormSubmit}>
                <div className={SBStyle.SearchBarContainer}>
                    <div className={SBStyle.iconTag}>
                        <div className={SBStyle.CustomSearchBar}>
                            <Image src="passport-solid.svg" width={32} height={32} className={SBStyle.PassportImg}></Image>
                            <Combobox value={selectPassport} onChange={(passport) => setSelectedPassport(passport)}>
                                <Combobox.Input className={SBStyle.Input} ref={inputRef}/>
                                <div>
                                    <Combobox.Options className={SBStyle.ScrollContentContainer}>
                                        {countryCodeList.map((code) => (
                                        <Combobox.Option key={code} value={countries[code]} className={SBStyle.CountryOption}>
                                            {countries[code]}
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
                                <Combobox.Input className={SBStyle.Input} ref={inputRef}/>
                                <div>
                                    <span className="inline-block w-full">
                                    <Combobox.Options className={SBStyle.ScrollContentContainer}>
                                        {countryCodeList.map((isoCode) => (
                                        <Combobox.Option key={isoCode} value={countries[isoCode]} className={SBStyle.CountryOption}>
                                            {countries[isoCode]}
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