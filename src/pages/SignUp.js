import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Followfav from "../img/follow-favorites.jpg"

const SignUp = ({ setUser, URL }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${URL}/user/signup`,
        {
          email: email,
          password: password,
          username: username,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        setUsername("");
        setEmail("");
        setPassword("");
        setErrorMessage("");
        alert("Thanks for signing up! You can now add favorites characters");
        navigate("/");
      } else {
        alert("An error occurred, please try again");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("This email is already linked to an account");
      }
      if (error.response.status === 400) {
        setErrorMessage("Thanks for filling in each field before signing up");
      }
      console.log(error.message);
    }
  };

  return (
    <div>
<div className="container-sign">
      <form onSubmit={handleSubmit} className="sign-form">
        <div className="username">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            placeholder="Your email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            placeholder="Choose your password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button className="Logbutton" type="submit">Sign up</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
    <img className="banner"  alt="banner" src={Followfav}/>
    </div>

    
    
  );
};

export default SignUp;