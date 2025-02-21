import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/jsx/Header";
import LandingPage from "./components/jsx/LandingPage";
import Footer from "./components/jsx/Footer";
import About from "./components/jsx/About";
import Skills from "./components/jsx/Skills";
import Project from "./components/jsx/Project";
import Contact from "./components/jsx/Contact";

const App = () => {
  return (
     <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
        </Router>
  );
};

export default App;
