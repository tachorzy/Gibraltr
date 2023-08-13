import Image from 'next/image'
import { useState, useRef } from 'react'
import { filteredCountries, isoCodesList } from '../utils/countrydata.js'
import { useRouter } from 'next/router'
import { Combobox } from '@headlessui/react'

function setButtonActivity(selectPassportHook, selectDestinationHook){
    if(selectPassportHook === '' || selectDestinationHook === '')
        return(<button type="submit" className={"border-transparent cursor-pointer md:lg:xl:2xl:w-9/12 h-14 w-60 mb-0.5 mt-1 md:lg:xl:2xl:ml-10 ml-2 pt-4 float-right bg-stone-300 rounded-xl flex justify-center font-semibold text-sm leading-tight px-5 py-2.5 text-stone-600"}> Do you need a visa?</button>);
    else
        return(<button type="submit" className={"border-transparent cursor-pointer md:lg:xl:2xl:w-9/12 h-14 w-60 mb-0.5 mt-1 md:lg:xl:2xl:ml-10 ml-2 pt-4 float-right bg-stone-300 rounded-xl flex justify-center font-semibold text-sm leading-tight px-5 py-2.5 text-stone-600 hover:bg-stone-400 hover:text-stone-700"}> Do you need a visa?</button>);
}

const SearchBar = () => {

    const INITIAL_PASSPORT_STATE = "Select Passport..."
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
        <form type="submit" onSubmit={handleFormSubmit}>
            <div className={"rounded-2xl bg-stone-700 md:pb-3 pb-5 md:pt-2 pt-3.5 pl-4 md:gap-x-8 grid md:grid-rows-1 md:grid-cols-3 sm:grid-cols-1 sm:grid-rows-3 gap-y-4 md:w-[50rem] w-72 sm:content-center"}>
                <div className={"bg-stone-300 rounded-lg mt-1 w-4/12 h-14 ml-2"}>
                    <div className={"relative inline-block gap-x-3 justify-start content-center w-60"}>
                        <Image src="passport-solid.svg" width={32} height={32} className={"absolute mt-2.5 ml-3.5"}></Image>
                        <Combobox value={selectPassport} onChange={(passport) => setSelectedPassport(passport)}>
                            <Combobox.Input ref={inputRef} onChange={(event) => setPassportQuery(event.target.value)} placeholder={INITIAL_PASSPORT_STATE} className={"float-right h-14 w-9/12 p-2 py-4 text-stone-600 text=[1.025rem] border-transparent rounded-r-xl font-medium"}/>
                            <div>
                                <Combobox.Options className={"mt-6 ml-14 pb-0.5 max-h-80 shadow-2xl bg-stone-100 overflow-y-auto rounded-xl text-sm text-stone-600 justify-start list-none w-3/4 scrollbar"}>
                                    {filteredPassports.length === 0 && selectPassport !== INITIAL_PASSPORT_STATE ? (
                                        <div className={"py-3 pl-4"}>
                                            {"No passport found."}
                                        </div>
                                    ) : (
                                        filteredPassports.map((code) => (
                                            <Combobox.Option key={isoCodesList[code.toLowerCase()]} value={code} className={"hover:bg-stone-200 py-3 pl-4"}>
                                                {code}
                                            </Combobox.Option>
                                            ))
                                    )}
                                </Combobox.Options>
                            </div>
                        </Combobox>
                    </div>
                </div>
            
                <div className={"bg-stone-300 rounded-lg mt-1 w-4/12 h-14 h-1/12 ml-2"}>
                    <div className={"relative inline-block justify-start content-center w-[15rem]"}>      
                        <Image src="pin.svg" width={29.5} height={29.5} className={"absolute mt-3 ml-4"}></Image>   
                        <Combobox value={selectDestination} onChange={(destination) => setSelectedDestination(destination)}>
                            <Combobox.Input ref={inputRef} onChange={(event) => setDestinationQuery(event.target.value)} placeholder={INITIAL_DESTINATION_STATE} className={"float-right h-14 w-9/12 p-2 py-4 text-stone-600 text-[1.025rem] border-transparent rounded-r-xl font-medium"} />
                            <>
                                <span className="inline-block w-full">
                                    <Combobox.Options className={"mt-6 ml-14 pb-0.5 max-h-80 shadow-2xl bg-stone-100 overflow-y-auto rounded-xl text-sm text-stone-600 justify-start list-none w-3/4 scrollbar"}>
                                        {filteredDestinations.length === 0 && selectDestination !== INITIAL_DESTINATION_STATE ? (
                                            <div className={"py-3 pl-4"}>
                                                {"No destination found."}
                                            </div>
                                        ) : (
                                            filteredDestinations.map((code) => (
                                            <Combobox.Option key={isoCodesList[code.toLowerCase()]} value={code} className={"hover:bg-stone-200 py-3 pl-4"}>
                                                {code}
                                            </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </span>
                            </>
                        </Combobox>         
                    </div>
                </div>
                {setButtonActivity(selectPassport, selectDestination)}
            </div>
        </form>
    );
};

export default SearchBar;