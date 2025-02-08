import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/jsx/Header";
import LandingPage from "./components/jsx/LandingPage";
import Footer from "./components/jsx/Footer";
import About from "./components/jsx/About";

const App = () => {
  return (
     <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/About" element={<About/>}/>
          </Routes>
          <Footer/>
        </Router>
  );
};

export default App;
