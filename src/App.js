import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home/Home';
import Footer from './page/shear/Footer/Footer';
import HeaderNav from './page/shear/HeaderNav/HeaderNav';
import { darkTheme, GlobalStyles, lightTheme } from './theme/theme';
import AOS from 'aos';
import Project from './page/Project/Project';
AOS.init();

export const ThemeContextProvider = createContext()

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  return (
    <ThemeContextProvider.Provider value={[isDarkTheme, setIsDarkTheme]}>
      <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/>
    </ThemeContextProvider.Provider>

  );
}

export default App;
