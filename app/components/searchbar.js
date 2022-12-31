import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'

const SearchBar = () => {
    return(
        <div className={SBStyle.SearchBarContainer}>
            <div>
                <div className={SBStyle.InputAndResults}>
                    <div className={SBStyle.PassportImg}>
                        <Image src="https://www.svgrepo.com/show/75056/passport.svg" width={28} height={28}></Image>
                    </div>
                    <div className={SBStyle.CustomSearchBar}>
                        <div className={SBStyle.Label}> Your Passport </div>
                        <input className={SBStyle.Input} placeholder= "United States" type={'text'}/>
                    </div>
                    <div className={SBStyle.PassportImg}>
                        <Image src="https://www.svgrepo.com/show/3335/location-pin.svg" width={28} height={28}></Image>
                    </div>
                    <div className={SBStyle.CustomSearchBar}>
                        <div className={SBStyle.Label}> Destination </div>
                        <input className={SBStyle.Input} placeholder="Morocco" type={'text'}/>
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