// src/components/App.tsx

import React from 'react';

const App: React.FC = () => {
  const toggleTheme = () => {
    // Your theme toggle logic here
  };

  const selectRegions = () => {
    // Your region selection logic here
  };

  const back = () => {
    // Your back button logic here
  };

  return (
    <>
    <div>
      <header className="header">
        <h2>Where in the World?</h2>
        <div className="theme-box" onClick={toggleTheme}>
          {/* <ion-icon name="moon-outline"><ion-icon/> */}
          <p id="dark-mode-text">Dark Mode</p>
        </div>
      </header>

      <main className="main">
        <form className="input-form" id="input-form">
          <input type="text" id="search" name="search" placeholder="Search for a country..." />
          <select name="regions" id="regions" onChange={selectRegions}>
            {/* <option value="placeholder" disabled defaultValue>Filter by Region</option> */}
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>

        <section className="countries-box" id="countries-box">
          {/* Your country items go here */}
        </section>
      </main>

      <section className="details-section">
        <input type="button" value="Back" onClick={back} className="back-btn" />
        <div className="details-grid">
          <div className="details-flag">
            <img src="https://flagcdn.com/de.svg" alt="Flag" />
          </div>
          <div className="text-grid">
            <h3>Belgium</h3>
            <p>Native Name: <span className="native-name">Belgie</span></p>
            <p>Population: <span className="population">Belgie</span></p>
            <p>Region: <span className="region">Belgie</span></p>
            <p>Sub Region: <span className="sub-region">Belgie</span></p>
            <p>Capital: <span className="capital">Belgie</span></p>
            <p>Top Level Domain: <span className="tld">Belgie</span></p>
            <p>Currencies: <span className="currencies">Belgie</span></p>
            <p>Languages: <span className="languages">Belgie</span></p>
            <div className="border-countries-box">
              Border Countries: 
            </div>
            <ul className="neighboring-countries" id="neighboring-countries">
              {/* Your neighboring countries go here */}
            </ul>
          </div>
        </div>  
      </section>
    </div>
    </>
  );
};

export default App;
