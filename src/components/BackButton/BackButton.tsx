import { Dispatch, SetStateAction } from 'react';
import './BackButton.css';
import { DetailsData } from '../../api/DetailsApi';
interface BackButtonProps {
    backIcon: string
    setCardPage: Dispatch<SetStateAction<string>>
    setCountryData: Dispatch<SetStateAction<DetailsData | undefined>>
}

const BackButton = ({backIcon, setCardPage, setCountryData} : BackButtonProps) => {
    return (
        <div className="BackButton" onClick={() => {
            setCardPage('')
            setCountryData(undefined)
            }}>
            <img src={backIcon} alt="Back Icon" />
            <span>Back</span>
        </div>
    )
}

export default BackButton