import localFont from '@next/font/local'
import InfoCard from './InfoCard'
import CountUp from "react-countup";

const supremeMedium = localFont({
    src: '../../fonts/Supreme-Medium.otf',
    weight: '200'
})

const aboutUsInfoCards = new Map([
    ['197+ countries', { title: <span><CountUp duration={2} end={197}></CountUp>{'+\ncountries'}</span>, info: 'Representing every destination.' }],
    ['197+ passports', { title: <span><CountUp duration={2} end={197}></CountUp>{'+\npassports'}</span>, info: 'Available for every nationality.' }],
    ['Endless results', { title: 'Endless\nresults', info: 'Remaining reliable and up to date.' }]
])

const InfoCardTray = () => {
    return(
        <div className={supremeMedium.className + " flex flex-col md:flex-row h-full w-screen bg-stone-200 py-16 md:pl-40 pl-10 gap-y-10 gap-x-16 content-center"}>
            {Array.from(aboutUsInfoCards.entries()).map(([key, infoCardDetails], index) => (
                <InfoCard header={infoCardDetails.title} description={infoCardDetails.info} key={index}/>
            ))}
        </div>
    );
}

export default InfoCardTray;