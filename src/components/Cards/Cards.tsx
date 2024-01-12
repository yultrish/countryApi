import{ Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Cards.css';
import { HomeData } from '../../api/Home';
import Card from '../Card/Card';
// import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import LoadMore from '../LoadMoreButton/LoadMoreButton';

interface CardsProps {
  filterValue?: string;
  searchValue?: string;
  isLoading?: boolean;
  isError?: boolean;
  onClick: Dispatch<SetStateAction<string>>;
  data?: HomeData[];
  setCardPage: Dispatch<SetStateAction<string>>;
}

const Cards = ({
  filterValue = '',
  searchValue = '',
  isLoading = false,
  isError = false,
  onClick,
  data = [],
  setCardPage,
}: CardsProps) => {
  const [cardsCount, setCardsCount] = useState(12);
  const [filteredData, setFilteredData] = useState<HomeData[]>([]);

  useEffect(() => {
    const selectedData = filterValue ? data?.filter((country) => country.region === filterValue) : data;
    const searchedData = searchValue
      ? selectedData?.filter((country) => country.name.common.toLowerCase().startsWith(searchValue.toLowerCase().trim()))
      : selectedData;

    setFilteredData(searchedData || []);
    setCardsCount(12);
  }, [data, filterValue, searchValue]);

  return (
    <div className="Cards">
      {isError ? (
        <h2 className="errorTitle">An error 502 occurred... Please reload</h2>
      ) : isLoading ? (
        <h2 className="loadingTitle">Loading data...</h2>
      ) : !filteredData.length ? (
        <h2 className="errorTitle">We could not find a country with this name...</h2>
      ) : (
        filteredData.slice(0, cardsCount).map((country) => (
          <Card
            key={country.name.official}
            name={country.name.common}
            capital={country.capital[0]}
            population={country.population.toLocaleString(undefined, {})}
            flagSrc={country.flags.svg}
            flagAlt={country.flags.alt}
            region={country.region}
            setCardPage={setCardPage}
          />
        ))
      )}
      <LoadMore cardsCount={cardsCount} onClick={setCardsCount} countryLength={filteredData.length} />
    </div>
  );
};

export default Cards;
