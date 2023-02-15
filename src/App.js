import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des composants
import Header from "./components/Header";
import Footer from "./components/Footer"

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
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
