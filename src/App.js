import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/jsx/Header";
import LandingPage from "./components/jsx/LandingPage";

const App = () => {
  return (
     <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
          </Routes>
        </Router>
  );
};

export default App;
