import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { countries, isoCodes, countryCodeList } from '../scripts/countrydata.js'
import { Combobox } from '@headlessui/react'
import { useRouter } from 'next/router';

const SearchBar = () => {

    //states
    const [selectPassport, setSelectedPassport] = useState("Select passport...");
    const [selectDestination, setSelectedDestination] = useState("Choose destination...");

    const router = useRouter();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            const passportKey = selectPassport.toLowerCase()
            const destinationKey = selectDestination.toLowerCase()

            const response = await fetch(`api/visa?passport=${isoCodes[passportKey]}&destination=${isoCodes[destinationKey]}`);
            const data = await response.json();
            router.push('/result')
        } catch(error){
            console.error(error);
        }
    }

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
                                <Combobox.Input className={SBStyle.Input}/>
                                <div>
                                    <span className="inline-block w-full">
                                    <Combobox.Options className={SBStyle.ScrollContentContainer}>
                                        {countryCodeList.map((code) => (
                                        <Combobox.Option key={code} value={countries[code]} className={SBStyle.CountryOption}>
                                            {countries[code]}
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