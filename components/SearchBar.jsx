import Image from 'next/image'
import { useState, useRef } from 'react'
import { filteredCountries, isoCodesList } from '../utils/countrydata.js'
import { useRouter } from 'next/router'
import { Combobox } from '@headlessui/react'

function setButtonActivity(selectPassportHook, selectDestinationHook){
    if(selectPassportHook === '' || selectDestinationHook === '')
        return(<button type="submit" className={"border-transparent cursor-pointer md:w-[15rem] lg:w-[75%] xl:w-[71.5%] h-14 w-60 mb-0.5 mt-1 md:ml-2 lg:ml-8 xl:ml-10 max-md:ml-6 pt-[1.15rem] float-right bg-stone-300 rounded-xl flex justify-center font-semibold text-sm leading-tight px-4 text-center text-stone-600"}> Do you need a visa?</button>);
    else
        return(<button type="submit" className={"border-transparent cursor-pointer md:w-[15rem] lg:w-[75%] xl:w-[71.5%] h-14 w-60 mb-0.5 mt-1 md:ml-2 lg:ml-8 xl:ml-10 max-md:ml-6 pt-[1.15rem] float-right bg-stone-300 rounded-xl flex justify-center font-semibold text-sm leading-tight px-4 text-center text-stone-600 hover:bg-stone-400 hover:text-stone-700"}> Do you need a visa?</button>);
}

const SearchBar = () => {

    const INITIAL_PASSPORT_STATE = "Select Passport"
    const INITIAL_DESTINATION_STATE = "Choose Destination"

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
        <form type="submit" onSubmit={handleFormSubmit}>
            <div className={"rounded-2xl bg-stone-700 mb-10 md:mb-4 md:mb-8 md:pb-3 pb-5 md:pt-2 pt-3.5 pl-0.5 md:pl-4 lg:pl-4 md:gap-x-0 xl:gap-x-8 grid sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-3 lg:gap-y-4 w-72 md:w-[34.5rem] lg:w-[75.5%] xl:w-[58.6%] sm:content-center"}>
                <div className={"bg-stone-300 rounded-l-lg mt-1 w-[20%] md:w-[27.25%] lg:w-4/12 md:rounded-r-2xl-0 h-[3.25rem] md:h-14 ml-6 md:mx-2 lg:ml-2"}>
                    <div className={"relative inline-block gap-x-3 justify-start content-center w-60 md:w-[15rem] lg:w-[13.35rem] xl:w-60 -mb-0.5 md:mb-0"}>
                        <Image src="passport.svg" width={32} height={32} className={"select-none absolute mt-2.5 ml-3.5"}></Image>
                        <Combobox value={selectPassport} onChange={(passport) => setSelectedPassport(passport)}>
                            <Combobox.Input ref={inputRef} onChange={(event) => setPassportQuery(event.target.value)} placeholder={INITIAL_PASSPORT_STATE} className={"float-right h-14 w-9/12 p-2 py-4 text-stone-600 dark:text-stone-200 text=[1.025rem] border-transparent rounded-r-xl font-medium"}/>
                            <div className="inline-block w-full">
                                <Combobox.Options className={"z-40 absolute mt-2 ml-14 pb-0.5 max-h-80 shadow-2xl bg-stone-100 overflow-y-auto rounded-xl text-sm text-stone-600 justify-start list-none w-3/4 scrollbar"}>
                                    {filteredPassports.length === 0 && selectPassport !== INITIAL_PASSPORT_STATE ? (
                                        <div className={"py-3 pl-4"}>
                                            {"No passport found."}
                                        </div>
                                    ) : (
                                        filteredPassports.map((code) => (
                                            <Combobox.Option key={isoCodesList[code.toLowerCase()]} value={code} className={"cursor-pointer hover:bg-stone-200 py-3 pl-4"}>
                                                {code}
                                            </Combobox.Option>
                                            ))
                                    )}
                                </Combobox.Options>
                            </div>
                        </Combobox>
                    </div>
                </div>
            
                <div className={"bg-stone-300 rounded-lg mt-1 w-[23%] md:w-[27.25%] lg:w-4/12 h-[3.25rem] md:h-14 ml-6 md:mx-6 md:ml-2 lg:ml-2"}>
                    <div className={"relative inline-block justify-start content-center w-60 lg:w-[15rem] xl:w-60"}>      
                        <Image src="pin.svg" width={29.5} height={29.5} className={"select-none absolute mt-3 ml-4"}></Image>   
                        <Combobox value={selectDestination} onChange={(destination) => setSelectedDestination(destination)}>
                            <Combobox.Input ref={inputRef} onChange={(event) => setDestinationQuery(event.target.value)} placeholder={INITIAL_DESTINATION_STATE} className={"float-right h-14 w-9/12 p-2 py-4 text-stone-600 dark:text-stone-200 text-[1.025rem] border-transparent rounded-r-xl font-medium"} />
                                <div className="inline-block w-full">
                                    <Combobox.Options className={"z-40 absolute mt-2 ml-14 pb-0.5 max-h-80 shadow-2xl bg-stone-100 overflow-y-auto rounded-xl text-sm text-stone-600 justify-start list-none w-3/4 scrollbar"}>
                                        {filteredDestinations.length === 0 && selectDestination !== INITIAL_DESTINATION_STATE ? (
                                            <div className={"py-3 pl-4"}>
                                                {"No destination found."}
                                            </div>
                                        ) : (
                                            filteredDestinations.map((code) => (
                                            <Combobox.Option key={isoCodesList[code.toLowerCase()]} value={code} className={"cursor-pointer hover:bg-stone-200 py-3 pl-4"}>
                                                {code}
                                            </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </div>
                        </Combobox>         
                    </div>
                </div>
                {setButtonActivity(selectPassport, selectDestination)}
            </div>
        </form>
    );
};

export default SearchBar;