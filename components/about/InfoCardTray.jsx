import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../../fonts/Supreme-Medium.otf',
    weight: '200'
})

const aboutUsInfoCards = new Map([
    ['197+\ncountries', { info: 'Representing every destination.' }],
    ['197+\npassports', { info: 'Available for every nationality.' }],
    ['Over 3000\nembassies', { info: 'Accesible to all travelers.' }],
    ['Endless\nresults', { info: 'Remaining reliable and up to date.' }]
])


const InfoCardTray = () => {
    return(
        <div className={supremeMedium.className + " flex flex-row h-[21rem] w-screen bg-stone-200 py-16 pl-24 gap-x-16 content-center"}>
            {Array.from(aboutUsInfoCards.entries()).map(([title, infoCardDetails], index) => (
                <InfoCard header={title} description={infoCardDetails}/>
            ))}
        </div>
    );
}

export default InfoCardTray;