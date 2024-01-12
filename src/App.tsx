import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CountryDetails from './components/CountryDetails/CountryDetails';

const queryClient = new QueryClient();

function App() {
  const persistentTheme = localStorage.getItem('PERSISTENT_THEME') as string;
  const [currentTheme, setCurrentTheme] = useState(persistentTheme);
  const [cardPage, setCardPage] = useState<string>('');

  useEffect(() => {
    localStorage.setItem("PERSISTENT_THEME", currentTheme);
  }, [currentTheme])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" data-theme={currentTheme}>
        <Header onClick={setCurrentTheme} currentTheme={currentTheme}/>
        {
          !cardPage
            ? <Main currentTheme={currentTheme} setCardPage={setCardPage}/> 
            : <CountryDetails currentTheme={currentTheme} setCardPage={setCardPage} cardPage={cardPage}/>
        }
      </div>
    </QueryClientProvider>
  );
}

export default App;
