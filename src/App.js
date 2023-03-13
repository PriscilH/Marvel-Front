import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import des composants
import Header from "./components/Header";
import Footer from "./components/Footer"

// Import de pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character"; 
import Comics from "./pages/Comics";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Favorites from "./pages/Favorites";

function App() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);

  //Je crée une fonction pour créer et stocker un token afin d'identifier mon user
  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  // const URL = "http://localhost:3001";
  const URL = "https://site--backend-marvel--r85cyr9v9nmw.code.run";

  return (
    <Router>
      <Header
      setUser={setUser}
      token={token}
      setToken={setToken}/> 
      <Routes>
        <Route path="/" element={<Home token={token}/>} />
        <Route path="/comics" element={ <Comics URL={URL} title={title}
        setTitle={setTitle}/>} />
        <Route path="/characters" element={<Characters URL={URL} name={name}
        setName={setName}/>} />
        <Route path="/character" element={<Character URL={URL} token={token} />} />
        <Route
          path="/user/signup"
          element={
            <SignUp
              URL={URL}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/user/login"
          element={
            <LogIn
            URL={URL}
            setUser={setUser}
            />
          }
        />
        <Route path="/favs" element={<Favorites  />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
