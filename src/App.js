import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des composants
import Header from "./components/Header";
import Footer from "./components/Footer"

// Import de pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/comics" element={ <Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/favs" element={<Favorites />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
