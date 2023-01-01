import SBStyle from '../styles/SearchBarStyle.module.css'
import Image from 'next/image'
import Passport from '../public/passport.svg'
import Pin from '../public/pin.svg'
const SearchBar = () => {
    return(
        <div className={SBStyle.SearchBarContainer}>
            <div>
                <div className={SBStyle.InputAndResults}>
                    <div className={SBStyle.CustomSearchBar}>
                        <div className={SBStyle.PassportImg}>
                            <Image src="passport.svg" width={28} height={28}></Image>
                        </div>
                        <input className={SBStyle.Input} placeholder= "United States" type={'text'}/>
                    </div>

                    <div className={SBStyle.CustomSearchBar}>
                        <div className={SBStyle.PassportImg}>
                            <Image src="pin.svg" width={28} height={28}></Image>
                        </div>
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