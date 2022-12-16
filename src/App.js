import theme from './theme';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/pageNotFound';
import ComponentNavBar from './components/navbar';
import PageHome from './pages/home';
import PageCharactersList from './pages/characters/list';
import PageCharactersDetails from './pages/characters/details';


export default function App() {
  return (<>

    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <ComponentNavBar />
        <Routes>

          <Route path='/' element={<PageHome />} />
          <Route path='/characters' element={<PageCharactersList />} />
          <Route path='/characters/:id' element={<PageCharactersDetails />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </ThemeProvider>

  </>

  );
}

