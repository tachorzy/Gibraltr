import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import Passport from '../public/passport.svg'
import Pin from '../public/pin.svg'
import { useEffect, useState } from 'react';
import { getCodeList, overwrite } from 'country-list'

const SearchBar = () => {
    const nonCountries = ['aq', 'as', 'ai', 'aw', 'ax', 'bm', 'bl', 'bq', 'bv', 'io', 'ky', 'cx', 'cc', 'ck', 'fk', 'fo', 'gf', 
    'pf', 'tf', 'gi', 'gl', 'gp', 'gu', 'hm', 'mq', 'yt', 'ms', 'an', 'nc', 'nu', 'nf', 'mp', 'pn', 'pr', 're',
     'sh', 'pm', 'sj', 'tk', 'tc', 'um', 'vg', 'wf', 'eh'];
        
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
            name: 'Democratic Rep. of the Congo'
        }
    ])
    const countries = getCodeList()
    const countryCodeObject = Object.keys(countries)
    const countryCodeList = Object.keys(countries).filter(code => 
        !nonCountries.includes(code)
        )
    // console.log(countries)
    return(
        <div className={SBStyle.SearchBarContainer}>
            <div>
                <div className={SBStyle.InputAndResults}>
                    <div className={SBStyle.CustomSearchBar}>
                        <div className={SBStyle.PassportImg}>
                            <Image src="passport.svg" width={28} height={28}></Image>
                        </div>
                        {/* <input className={SBStyle.Input} placeholder= "United States" type={'text'}/> */}
                        <select className={SBStyle.Input} name= "passport" type={'text'}>
                            {countryCodeList.map((code) => (
                                <option  className={SBStyle.CountryName} value={code}>{countries[code]}</option>
                            ))}
                        </select>

                    </div>
                    
                    <div className={SBStyle.CustomSearchBar}>
                        <div className={SBStyle.PassportImg}>
                            <Image src="pin.svg" width={28} height={28}></Image>
                        </div>
                        {/* <input className={SBStyle.Input} placeholder="Morocco" type={'text'}/> */}
                        <select className={SBStyle.Input} name= "country" type={'text'}>
                            <option>Morocco </option>
                        </select>
                    </div>
                    <div className={SBStyle.Button}>
                        Do you need a visa?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;