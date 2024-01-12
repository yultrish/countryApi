import { Dispatch, SetStateAction } from 'react';
import './Card.css';

interface CardProps {
    name: string;
    capital: string;
    population: string;
    flagSrc: string;
    flagAlt: string;
    region: string;
    setCardPage: Dispatch<SetStateAction<string>>;
}

const Card = ({name, capital, population, flagAlt, flagSrc, region, setCardPage} :CardProps) => {
    return (
        <div className="Card" onClick={() => {setCardPage(name)}}>
            <div className="flagContainer" style={{backgroundImage:`url(${flagSrc})`}} aria-details={flagAlt}>
            </div>
            <div className="infoContainer">
                <h2 className="title">{name}</h2>
                <div className="smallerInfo">
                    <h3>Population: <span>{population}</span></h3>
                    <h3>Region: <span>{region}</span></h3>
                    <h3>Capital: <span>{capital}</span></h3>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;