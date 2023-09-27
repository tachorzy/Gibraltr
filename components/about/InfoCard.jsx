import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../../fonts/Supreme-Medium.otf',
    weight: '200'
})

const InfoCard = ({header, description}) => {
    return(
        <div className={"w-64 h-52 text-stone-700 border-2 border-inherit border-solid rounded-2xl p-4 px-9 pt-9 border-stone-200 bg-stone-100"}>
            <h2 className={"text-4xl text-stone-700"}>{header}</h2>
            <p className={"text-lg text-stone-700 leading-relaxed mb-32 mt-2.5"}>{description}</p>
        </div>
    );
}

export default InfoCard;