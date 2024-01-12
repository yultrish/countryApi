import { HomeData } from "./Home";
export interface DetailsData extends HomeData {
    languages: {
        [key: string]: string
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string
        }
    };
    subregion: string;
    tld: string[];
    borders: string[];
}

export const CountryDetailsData = async (name: string) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,population,region,languages,currencies,capital,subregion,tld,flags,borders`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const countryDetails: DetailsData[] = await response.json();
      return countryDetails;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  