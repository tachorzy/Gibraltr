import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import Passport from '../public/passport.svg'
import Pin from '../public/pin.svg'
import { useEffect, useState } from 'react';
const countryList = require('country-list');

const SearchBar = () => {
    console.log(countryList.getNames())
    const countryCodeList = countryList.getCodeList();
    
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
                            {Object.keys(countryCodeList).map((code) => (
                                <option  className={SBStyle.CountryName} value={code}>{countryCodeList[code]}</option>
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