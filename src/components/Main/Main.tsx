import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useQuery } from "react-query";
import { homeCountriesData } from '../../api/Home';
import './Main.css';
import Search from '../Search/Search';
import Cards from '../Cards/Cards'

interface MainProps {
    currentTheme: string;
    setCardPage: Dispatch<SetStateAction<string>>;
}
const Main = ({currentTheme, setCardPage}: MainProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [regionsList, setRegions] = useState([""]);

    const {isError, isSuccess,isLoading, data} = useQuery(
        ["homeCountries"],
        homeCountriesData,
        {
            staleTime: 60000
        }
    )

    useEffect(() => {
        if (isSuccess) {
            const regionsData: string[] = []
                data.forEach((country) => {
                    if (!regionsData.includes(country.region)) {
                        regionsData.push(country.region)
                    }
                })    
            setRegions(regionsData);
        }
    }, [data, isSuccess])



    return (
        <div className="Main">
                <Search 
                    currentTheme={currentTheme}
                    placeHolder='Search for a country...' 
                    searchValue={searchValue} 
                    searchOnChange={setSearchValue}
                    filterValue={filterValue}
                    filterOnChange={setFilterValue}
                    regionsList={regionsList}
                />

                <Cards 
                    filterValue={filterValue}
                    searchValue={searchValue}
                    isLoading={isLoading}
                    isError={isError}
                    onClick={setCardPage}
                    data={data}
                    setCardPage={setCardPage}
                /> 
        </div>
    )
}

export default Main