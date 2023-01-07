import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import Passport from '../public/passport.svg'
import Pin from '../public/pin.svg'
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
    // console.log(countries)
    //states
    const [selectNationality, setSelectedNationality] = useState("United States");
    const [selectDestination, setSelectedDestination] = useState("Morocco");

    return(        
        <div>
            <div className={SBStyle.SearchBarContainer}>
                <div className={SBStyle.iconTag}>
                    <div className={SBStyle.CustomSearchBar}>
                        <Image src="passport.svg" width={28} height={28} className={SBStyle.PassportImg}></Image>
                        <Combobox value={selectNationality} onChange={setSelectedNationality}>
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

                        {/* <select className={SBStyle.Input} name= "passport" type={'text'}>
                            {countryCodeList.map((code) => (
                                <option className={SBStyle.CountryOption} value={code} style={{ width: '100px' }}>{countries[code]}</option>
                            ))}
                        </select> */}
                    </div>
                </div>
            
                <div className={SBStyle.iconTag}>
                    <div className={SBStyle.CustomSearchBar}>            
                            <Image src="pin.svg" width={28} height={28} className={SBStyle.PassportImg}></Image>   
                            <Combobox value={selectDestination} onChange={setSelectedDestination}>
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
                                            
                <div className={SBStyle.Button}>
                    Do you need a visa?
                </div> 
            </div>
        </div>
    );
};

export default SearchBar;