import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { filteredCountries, isoCodesList } from '../utils/countrydata.js'
import { useRouter } from 'next/router'
import { Combobox } from '@headlessui/react'

function setButtonActivity(selectPassportHook, selectDestinationHook){
    if(selectPassportHook === '' || selectDestinationHook === '')
        return(<button type="submit" className={SBStyle.ButtonInactive}> Do you need a visa?</button>);
    else
        return(<button type="submit" className={SBStyle.ButtonActive}> Do you need a visa?</button>);
}

const SearchBar = () => {

    const INITIAL_PASSPORT_STATE = "Select passport..."
    const INITIAL_DESTINATION_STATE = "Choose Destination..."

    const [selectPassport, setSelectedPassport] = useState('');
    const [selectDestination, setSelectedDestination] = useState('');
    
    const [passportQuery, setPassportQuery] = useState('')
    const [destinationQuery, setDestinationQuery] = useState('')

    const inputRef = useRef(null)

    const router = useRouter();
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        if(selectPassport === '' || selectDestination === '')
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

    const filteredPassports =
        passportQuery === ''
            ? filteredCountries
            : filteredCountries.filter((passport) => {
                return passport.toLowerCase().startsWith(passportQuery.toLowerCase())
            })

    const filteredDestinations =
        destinationQuery === ''
            ? filteredCountries
            : filteredCountries.filter((destination) => {
                return destination.toLowerCase().startsWith(destinationQuery.toLowerCase())
            })

    return(        
        <div>
            <form type="submit" onSubmit={handleFormSubmit}>
                <div className={SBStyle.SearchBarContainer}>
                    <div className={SBStyle.iconTag}>
                        <div className={SBStyle.CustomSearchBar}>
                            <Image src="passport-solid.svg" width={32} height={32} className={SBStyle.PassportImg}></Image>
                            <Combobox value={selectPassport} onChange={(passport) => setSelectedPassport(passport)}>
                                <Combobox.Input ref={inputRef} onChange={(event) => setPassportQuery(event.target.value)} placeholder={INITIAL_PASSPORT_STATE} className={SBStyle.Input} />
                                <div>
                                    <Combobox.Options className={SBStyle.ScrollContentContainer}>
                                        {filteredPassports.length === 0 && selectPassport !== INITIAL_PASSPORT_STATE ? (
                                            <div className={SBStyle.CountryOptionNotFound}>
                                                {"No passport found."}
                                            </div>
                                        ) : (
                                            filteredPassports.map((code) => (
                                                <Combobox.Option key={isoCodesList[code.toLowerCase()]} value={code} className={SBStyle.CountryOption}>
                                                    {code}
                                                </Combobox.Option>
                                                ))
                                        )}
                                    </Combobox.Options>
                                </div>
                            </Combobox>
                        </div>
                    </div>
                
                    <div className={SBStyle.iconTag}>
                        <div className={SBStyle.CustomSearchBar}>      
                            <Image src="pin.svg" width={29.5} height={29.5} className={SBStyle.DestinationImg}></Image>   
                            <Combobox value={selectDestination} onChange={(destination) => setSelectedDestination(destination)}>
                                <Combobox.Input ref={inputRef} onChange={(event) => setDestinationQuery(event.target.value)} placeholder={INITIAL_DESTINATION_STATE} className={SBStyle.Input} />
                                <div>
                                    <span className="inline-block w-full">
                                    <Combobox.Options className={SBStyle.ScrollContentContainer}>
                                        {filteredDestinations.length === 0 && selectDestination !== INITIAL_DESTINATION_STATE ? (
                                            <div className={SBStyle.CountryOptionNotFound}>
                                                {"No destination found."}
                                            </div>
                                        ) : (
                                            filteredDestinations.map((code) => (
                                            <Combobox.Option key={isoCodesList[code.toLowerCase()]} value={code} className={SBStyle.CountryOption}>
                                                {code}
                                            </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                    </span>
                                </div>
                            </Combobox>         
                        </div>
                    </div>
                    {setButtonActivity(selectPassport, selectDestination)}
                </div>
            </form>
        </div>
    );
};

export default SearchBar;