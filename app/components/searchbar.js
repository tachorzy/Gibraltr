import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getCodeList, overwrite } from 'country-list'
import { Combobox } from '@headlessui/react'

const SearchBar = () => {
    //removing all non-countries from the listing, e.g. Antarctica and British/French/Dutch overseas territories 
    const nonCountries = ['aq', 'as', 'ai', 'aw', 'ax', 'bm', 'bl', 'bq', 'bv', 'cw', 'io', 'ky', 'cx', 'cc', 'ck', 'fk', 'fo', 'gf', 
    'pf', 'tf', 'gg' , 'gi', 'gl', 'gp', 'gs', 'gu', 'hm', 'im', 'je', 'mf', 'mq', 'yt', 'ms', 'an', 'nc', 'nu', 'nf', 'mp', 'pn', 'pr', 're',
     'sh', 'pm', 'sj', 'sx', 'tk', 'tc', 'um', 'vg', 'vi', 'wf', 'eh'];
    
    //overwriting all official names to their more commonly known names, as well as changing some endonyms to their English exonyms
    overwrite([
        {
            code: 'GB',
            name: 'United Kingdom'
        },
        {
            code: 'PS',
            name: "Palestine"
        },
        {
            code: 'FM',
            name: 'Micronesia'
        },
        {
            code: 'BN',
            name: 'Brunei'
        },
        {
            code: 'BO',
            name: 'Bolivia'
        },
        {
            code: 'CD',
            name: 'DR Congo'
        },
        {
            code: 'IR',
            name: 'Iran'
        },
        {
            code: 'MO',
            name: 'Macau'
        },
        {
            code: 'VN',
            name: 'Vietnam'
        },
        {
            code: 'TW',
            name: 'Taiwan'
        },
        {
            code: 'CI',
            name: 'Ivory Coast'
        },
        {
            code: 'KP',
            name: 'North Korea'
        },
        {
            code: 'KR',
            name: 'South Korea'
        },
        {
            code: 'LA',
            name: 'Laos'
        },
        {
            code: 'MD',
            name: 'Moldova'
        },
        {
            code: 'RU',
            name: 'Russia'
        },
        {
            code: 'SY',
            name: 'Syria'
        },
        {
            code: 'TZ',
            name: 'Tanzania'
        },
        {
            code: 'VA',
            name: 'Vatican City'
        },
        {
            code: 'VE',
            name: 'Venezuela'
        }
    ])
    //retrieving the list of the countries, first as an Object with keys and values then we filter that list of the keys of the non-countries
    const countries = getCodeList()
    const countryCodeList = Object.keys(countries).filter(code => 
        !nonCountries.includes(code)
        )

    //states
    const [selectPassport, setSelectedPassport] = useState("Select passport...");
    const [selectDestination, setSelectedDestination] = useState("Choose destination...");

    // const handleSearch = (event) => {
    //     const query = event.target.value;
    //     setSearchQuery(query);
    //     const filteredNationalityList = nationalityList.filter()
    // };

    // const handlePassportSelection = (event) => {
    //     setSelectedPassport(event.target.value)
    // };

    // const handleDestinationSelection = (event) => {
    //     setSelectedDestination(event.target.value)
    // };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('api/visa?passport=${selectedPassport}&destnation=${selectedDestination}');
        const data = await response.json();
        console.log(data);
    }

    return(        
        <div>
            <div className={SBStyle.SearchBarContainer}>
                <div className={SBStyle.iconTag}>
                    <div className={SBStyle.CustomSearchBar}>
                        <form onSubmit={handleFormSubmit}>
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
                        </form>

                    </div>
                </div>
            
                <div className={SBStyle.iconTag}>
                    <div className={SBStyle.CustomSearchBar}>      
                        <form onSubmit={handleFormSubmit}>      
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
                        </form>
                    </div>
                </div>
                                            
                <button type="submit" className={SBStyle.Button}>
                    Do you need a visa?
                </button> 
            </div>
        </div>
    );
};

export default SearchBar;