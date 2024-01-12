export interface HomeData {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        [key: string]: string;
      };
    };
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    [key: string]: string;
  };
}


export const homeCountriesData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,region,population,capital,flags");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const countriesData: HomeData[] = await response.json();
      return countriesData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  