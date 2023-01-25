import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { countries, isoCodes, countryCodeList } from '../scripts/countrydata.js'
import { useRouter } from 'next/router'

const SearchBar = () => {

    //Hooks and States -- to change the state values. The initial state are the prompts
    const INITIAL_PASSPORT_STATE = "Select passport..."
    const INITIAL_DESTINATION_STATE = "Choose Destination..."

    const [selectPassport, setSelectedPassport] = useState(INITIAL_PASSPORT_STATE);
    const [selectDestination, setSelectedDestination] = useState(INITIAL_DESTINATION_STATE);
    
    const [query, setQuery] = useState('');

    const router = useRouter();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            router.push({
                pathname: `/destinations/[destination]`,
                query: { passport: selectPassport, destination: selectDestination},
            })
        } catch(error){
            console.error(error);
        }
    };

    const passportCombobox = useCombobox({
        items: countryCodeList.map(code => countries[code]),
        onSelectedItemChange: ({ selectedItem }) => setSelectedPassport(selectedItem),
        initialSelectedItem: selectPassport
    })
    
    const destinationCombobox = useCombobox({
        items: countryCodeList.map(code => countries[code]),
        onSelectedItemChange: ({ selectedItem }) => setSelectedDestination(selectedItem),
        initialSelectedItem: selectDestination
    })



    // const handleInput = (event) => {
    //     // setSelectedPassport(event.target.value);
    //     setFilteredCountries(Object.entries(countryCodeList).filter(([isoCode, countryName]) =>
    //         countryName.toLowerCase().includes(event.target.value.toLowerCase())    
    //     ));    }

    return(        
        <div>
            <form type="submit" onSubmit={handleFormSubmit}>
                <div className={SBStyle.SearchBarContainer}>
                    <div className={SBStyle.iconTag}>
                        <div className={SBStyle.CustomSearchBar}>
                            <Image src="passport-solid.svg" width={32} height={32} className={SBStyle.PassportImg}></Image>
                            <Combobox value={selectPassport} onChange={(passport) => setSelectedPassport(passport)}>
                                <Combobox.Input className={SBStyle.Input}/>
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
                                <Combobox.Input className={SBStyle.Input} displayValue={(country) => country}/>
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
                                                
                    <button type="submit" className={SBStyle.Button}>
                        Do you need a visa?
                    </button> 
                </div>
            </form>
        </div>
    );
};

export default SearchBar;