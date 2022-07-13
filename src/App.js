import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'

import "./App.css";
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navigation />
      <Home/>
      <About/>
      <ScrollToTop/>
      </ThemeProvider>
     
    </>
  );
}

export default App;
