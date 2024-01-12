import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './CountryDetails.css';
import LightBackArrow from '../../assets/lightBackArrow.svg';
import DarkBackArrow from '../../assets/darkBackArrow.svg'
import BackButton from '../BackButton/BackButton';
import { CountryDetailsData, DetailsData } from '../../api/DetailsApi';
import { useQuery } from 'react-query';
import DetailMain from '../DetailMain/DetailMain';

interface DetailProps {
    currentTheme: string;
    setCardPage: Dispatch<SetStateAction<string>>
    cardPage: string
}

const CountryDetails = ({currentTheme, setCardPage, cardPage}: DetailProps) => {
    const [countryData, setCountryData] = useState<DetailsData | undefined>(undefined);

    const {isError, isSuccess,isLoading, data} = useQuery(
        ["countryDetail", cardPage],
        () => CountryDetailsData(cardPage),
        {
            staleTime: 60000
        }
    )

    useEffect(() => {
        if (isSuccess) {
            setCountryData(data[0])
        }
    }, [data, isSuccess])


    if (isError) return <h2 className="errorTitle">An error 502 occured... Please reload</h2>

    if (isLoading) return <h2 className="loadingTitle">Loading data...</h2>


    return (
        <div className="CountryDetails">
            <BackButton backIcon={currentTheme ? DarkBackArrow: LightBackArrow} setCardPage={setCardPage} setCountryData={setCountryData}/>
             {
                !countryData ? <h2 className="errorTitle">An error 502 occured... Please reload</h2> :
                <DetailMain 
                    flagSrc={countryData.flags.svg}
                    flagAlt={countryData.flags.alt}
                    name={countryData.name.common}
                    nativeName={countryData.name.nativeName[Object.keys(countryData.name.nativeName)[0]].common}
                    population={countryData.population}
                    region={countryData.region}
                    sub_region={countryData.subregion}
                    capital={countryData.capital}
                    tld={countryData.tld}
                    currencies={countryData.currencies}
                    languages={countryData.languages}
                    borders={countryData.borders}
                />
            } 
        
            
        </div>
    )
}

export default CountryDetails;