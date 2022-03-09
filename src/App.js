import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home/Home';
import Footer from './page/shear/Footer/Footer';
import HeaderNav from './page/shear/HeaderNav/HeaderNav';
import { darkTheme, GlobalStyles, lightTheme } from './theme/theme';
import AOS from 'aos';
import Project from './page/Project/Project';
import Blog from './page/Blog/Blog';
import Contact from './page/Contact/Contact';
import AddProject from './add/AddProject/AddProject';
import AddBlog from './add/AddBlog/AddBlog';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './Login/Login';
AOS.init();

export const ThemeContextProvider = createContext();
export const AdminContext = createContext();
// #0dcaf0 
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [admin, setAdmin] = useState({});
  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
    <ThemeContextProvider.Provider value={[isDarkTheme, setIsDarkTheme]}>
      <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeContextProvider.Provider>
      </AdminContext.Provider>

  );
}

export default App;
