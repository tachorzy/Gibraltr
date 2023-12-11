import Image from 'next/image'
import Link from 'next/link'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

  const supremeRegular = localFont({
    src: '../fonts/Supreme-Regular.otf',
    weight: '200'
})

// I should be using a hook instead!!!!


const promotions = new Map([
    ['AboutUsPromo', { title: 'Seek adventure\nresponsibly', info: 'Learn about our initiative to help make your travel planning stress-free.', image: '/GibraltarBanner1.png', link: '/about' }],
    ['ETIASPromo', { title: 'Europe\'s got new requirements in 2025: EITAS', info: 'Starting 2025, the EU will require a travel authorization for over 60 visa-exempt nationalities.', image: '/AthensBanner.png', link: 'https://travel-europe.europa.eu/etias_en' }]
    // ['FAQPromo', { title: '', info: 'Accesible to all travelers.', image: '/GibraltarBanner2.png', link: '' }]
])

const getRandomItem = iterable => iterable.get([...iterable.keys()][Math.floor(Math.random() * iterable.size)])

const PromoBanner = () => {
    return(
        <div className={"relative w-full overflow-hidden"}>
            <h2 className={supremeMedium.className + " absolute w-full px-7 my-24 z-40 font-extrabold drop-shadow-2xl text-5xl text-neutral-100"}>{getRandomItem(promotions).title}</h2>
            <p className={supremeRegular.className + " absolute w-[32%] mr-72 px-7 mt-48 pt-2.5 z-40 drop-shadow-2xl text-base text-neutral-100"}>{getRandomItem(promotions).info}</p>
            
            <Link href={getRandomItem(promotions).link} className={supremeMedium.className + " group absolute z-40 px-7 mt-64 pt-2 justify-self-end text-neutral-100 font-semibold text-lg pt-2 flex-none"}>
                    Read more
                    <span className="pl-1 group-hover:pl-1.5 duration-500">›</span>
            </Link>

            <Image src={getRandomItem(promotions).image} width={750} height={750} className="z-10 rounded-xl mb-24 backdrop-blur-lg sepia-[20%] inline-block after:shadow-[inset 0 0 100px rgb(0, 0, 0, 0.06)]"/>
        </div>
    );
}

export default PromoBanner;