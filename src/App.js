import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes'

import "./App.css";
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Showcase from './components/sections/Showcase';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
      <Navigation />
      <Home/>
      <About/>
      <Showcase/>
      <Faq/>
      <Footer/>
      <ScrollToTop/>
      </ThemeProvider>
     
    </>
  );
}

export default App;
