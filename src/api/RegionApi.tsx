import { homeCountriesData } from "./Home";


export const regionsData = async () => {
    const countriesData = await homeCountriesData();
    
    const regionsData: string[] = [];

    countriesData.forEach((country) => {
        if (!regionsData.includes(country.region)) {
            regionsData.push(country.region)
        }
    })

    return regionsData;
}
