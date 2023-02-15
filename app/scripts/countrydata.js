import { getNames, getCodeList, getNameList, overwrite } from 'country-list'

//removing all non-countries from the listing, e.g. Antarctica and British/French/Dutch overseas territories 
const nonCountries = ['aq', 'as', 'ai', 'aw', 'ax', 'bm', 'bl', 'bq', 'bv', 'cw', 'io', 'ky', 'cx', 'cc', 'ck', 'fk', 'fo', 'gf', 
'pf', 'tf', 'gg' , 'gi', 'gl', 'gp', 'gs', 'gu', 'hm', 'im', 'je', 'mf', 'mq', 'yt', 'ms', 'an', 'nc', 'nu', 'nf', 'mp', 'pn', 'pr', 're',
 'sh', 'pm', 'sj', 'sx', 'tk', 'tc', 'um', 'vg', 'vi', 'wf', 'eh'];

//overwriting all official names to their more commonly known names, as well as changing some endonyms to their English exonyms
overwrite([
    {
        code: 'US',
        name: 'United States'
    },
    {
        code: 'GB',
        name: 'United Kingdom'
    },
    {
        code: 'PS',
        name: "Palestine"
    },
    {
        code: 'FM',
        name: 'Micronesia'
    },
    {
        code: 'BN',
        name: 'Brunei'
    },
    {
        code: 'BO',
        name: 'Bolivia'
    },
    {
        code: 'CD',
        name: 'DR Congo'
    },
    {
        code: 'IR',
        name: 'Iran'
    },
    {
        code: 'MO',
        name: 'Macau'
    },
    {
        code: 'VN',
        name: 'Vietnam'
    },
    {
        code: 'TW',
        name: 'Taiwan'
    },
    {
        code: 'CI',
        name: 'Ivory Coast'
    },
    {
        code: 'KP',
        name: 'North Korea'
    },
    {
        code: 'KR',
        name: 'South Korea'
    },
    {
        code: 'LA',
        name: 'Laos'
    },
    {
        code: 'MD',
        name: 'Moldova'
    },
    {
        code: 'RU',
        name: 'Russia'
    },
    {
        code: 'SY',
        name: 'Syria'
    },
    {
        code: 'TZ',
        name: 'Tanzania'
    },
    {
        code: 'VA',
        name: 'Vatican City'
    },
    {
        code: 'VE',
        name: 'Venezuela'
    }
])
//retrieving the list of the countries, first as an Object with keys and values then we filter that list of the keys of the non-countries
export const countries = getCodeList()
export const countryCodeList = Object.keys(countries).filter(code => 
    !nonCountries.includes(code)
    )

export const isoCodes = getNameList()
export const countryNameList = Object.keys(isoCodes);

export const countriesArray = getNames()

//Schengen Zone information:
export const schengenCountries = ["at", "be", "cz", "dk", "fi", "fr", "de", "gr", "hr","ie", "it", "lu", "nl", "no", "pt", "es", "se", "ch"];