// import React from 'react';
import './Header.css'
import DarkModeButton from '../DarkModeButton/DarkModeButton';

export interface ThemeProps {
    currentTheme: string;
    onClick: (currentTheme: string) => void;
}

const Header = ({onClick, currentTheme}: ThemeProps) => {
    

    return (
        <header className="Header">
            <h1>Where in the world?</h1>

            <DarkModeButton onClick={onClick} currentTheme={currentTheme}/>
        </header>
    )
}

export default Header;