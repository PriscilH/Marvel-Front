import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Import des composants
import Header from "./components/Header";
import Footer from "./components/Footer"

// Import de pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character"; 
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";

function App() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const URL = "http://localhost:3001";
  // const URL = "https://site--backend-marvel--r85cyr9v9nmw.code.run";

  return (
    <Router>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/comics" element={ <Comics URL={URL} title={title}
        setTitle={setTitle}/>} />
        <Route path="/characters" element={<Characters URL={URL} name={name}
        setName={setName}/>} />
        <Route path="/character" element={<Character URL={URL} />} />
        <Route path="/favs" element={<Favorites />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
