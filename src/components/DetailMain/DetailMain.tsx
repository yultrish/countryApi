import './DetailMain.css';

interface DetailMainProps {
    flagSrc: string;
    flagAlt: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    sub_region: string;
    capital: string[];
    tld: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string
        }
    };
    languages: {
        [key: string]: string
    };
    borders: string[]
}

const DetailMain = ({flagSrc, flagAlt, name, nativeName, population, region, sub_region, capital, tld, currencies, languages, borders}: DetailMainProps) => {


    const getCurrencies = (): string => {
        let output: string[] = []
        for(const key in currencies) {
            output.push(currencies[key].name)
        }
        return output.join(', ')
    }

    const getLanguages = (): string => {
        let output: string[] = []
        for(const key in languages) {
            output.push(languages[key])
        }
        return output.join(', ')
    }

    return (
        <div className="DetailMain">
            <div className="imgContainer">
                <img src={flagSrc} alt={flagAlt} />
            </div>
            <div className="detailContainer">
                <h2>{name}</h2>
                <div className="liContainer">
                        <ul>
                            <li><strong>Native Name:</strong> {nativeName}</li>
                            <li><strong>Population:</strong> {population?.toLocaleString()}</li>
                            <li><strong>Region:</strong> {region}</li>
                            <li><strong>Sub Region:</strong> {sub_region}</li>
                            <li><strong>Capital:</strong> {capital}</li>
                        </ul>
                        <ul>
                            <li><strong>Top Level Domain:</strong> {tld.join(', ')}</li>
                            <li><strong>currencies:</strong> {getCurrencies()}</li>
                            <li><strong>Languages:</strong> {getLanguages()}</li>
                        </ul>
                </div>
                <div className="borderCountriesContainer">
                    <strong>Border Countries:</strong>
                    <div>
                        {   borders.length 
                            ? borders.map(border => {
                                return (
                                    <div className="borderCountrySpan" key={border}>
                                    <span>
                                        {border}
                                    </span>
                                    </div>
                
                                )
                            })
                            : <span>None</span>
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMain;