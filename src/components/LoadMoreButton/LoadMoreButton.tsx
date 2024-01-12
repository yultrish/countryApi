import { Dispatch, SetStateAction } from 'react';
import './LoadMoreButton.css';

interface LoadMoreProps {
    cardsCount: number;
    onClick: Dispatch<SetStateAction<number>>
    countryLength: number;
}

const LoadMore = ({cardsCount, onClick, countryLength}: LoadMoreProps) => {


    return countryLength > cardsCount ? (
        <footer className="LoadMoreButton" onClick={() => onClick( cardsCount + 8 )}>
            <span>Show More...</span>
        </footer>
    ) : null}

export default LoadMore
