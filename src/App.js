import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/jsx/Header";
import LandingPage from "./components/jsx/LandingPage";
import Footer from "./components/jsx/Footer";

const App = () => {
  return (
     <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
          </Routes>
          <Footer/>
        </Router>
  );
};

export default App;
