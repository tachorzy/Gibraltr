import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supremeRegular, supremeMedium } from '../utils/localNextFonts.js';

//potentially swap out these <p> tahs for text tags or something else   
const promotions = [
  { title: <p>{`Seek adventure`}<br/>{'responsibly'}</p>, info: 'Learn about our initiative to help make your travel planning stress-free.', image: '/GibraltarBanner1.png', link: '/about' },
  { title: <p>{'Off to Europe in 2025?'}<br/>{'Learn about the ETIAS!'}</p>, info: 'Starting 2025, the EU will require a travel authorization for over 60 visa-exempt nationalities.', image: '/AthenaBanner.png', link: 'https://travel-europe.europa.eu/etias_en' }
//   { title: <p>{'Off to Europe in 2025?'}<br/>{'Learn about the ETIAS!'}</p>, info: 'Starting 2025, the EU will require a travel authorization for over 60 visa-exempt nationalities.', image: '/BeirutBannerTest2.png', link: 'https://travel-europe.europa.eu/etias_en' }

  // ['FAQPromo', { title: '', info: 'Accesible to all travelers.', image: '/GibraltarBanner2.png', link: '' }]
];

const PromoBanner = () => {
  const [promo, setPromo] = useState({
    title: '',
    info: '',
    image: '',
    link: '',
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * promotions.length);
    setPromo(promotions[randomIndex]);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={'relative w-full overflow-hidden'}>
      <h2 className={supremeMedium.className + ' absolute w-full px-7 my-14 md:my-24 2xl:my-28 2xl:px-12 z-40 font-extrabold drop-shadow-2xl text-2xl md:text-5xl 2xl:text-7xl text-neutral-100'}>{promo?.title}</h2>
      {/* need to figure out a way to make the small text readable on mobile, especially with the background images */}
      <p className={supremeRegular.className + ' absolute w-[85%] md:w-[35%] 2xl:w-[40%] mr-72 px-7 2xl:px-12 mt-28 md:mt-48 2xl:mt-64 pt-2.5 2xl:pt-4 z-40 font-extrabold md:font-normal drop-shadow-sm md:drop-shadow-2xl text-sm md:text-base 2xl:text-2xl text-neutral-100'}>{promo?.info}</p>

      <Link href={promo?.link} className={supremeMedium.className + ' group absolute z-40 px-7 2xl:px-12 mt-44 md:mt-64 2xl:mt-80 pt-4 md:pt-4 2xl:pt-10 justify-self-end text-neutral-100 font-semibold md:text-lg 2xl:text-2xl pt-2 flex-none'} target={promo?.link.startsWith('/') ? '' : '_blank' }>
        Read more
        <span className='pl-1 group-hover:pl-1.5 duration-500'>›</span>
      </Link>

      <Image src={promo?.image} width={770} height={770} className='select-none z-10 rounded-xl mb-24 backdrop-blur-lg sepia-[20%] inline-block after:shadow-[inset 0 0 100px rgb(0, 0, 0, 0.06)] hidden md:max-2xl:block' />
      <Image src={`/promotions/mobile${promo?.image}`} width={305} height={305} className='select-none z-10 rounded-xl mb-24 backdrop-blur-lg sepia-[20%] inline-block after:shadow-[inset 0 0 100px rgb(0, 0, 0, 0.06)] block md:hidden' />
      <Image src={promo?.image} width={1120} height={1120} className='select-none z-10 rounded-xl mb-24 backdrop-blur-lg sepia-[20%] inline-block after:shadow-[inset 0 0 100px rgb(0, 0, 0, 0.06)] hidden 2xl:block' />

    </div>
  );
};

export default PromoBanner;
