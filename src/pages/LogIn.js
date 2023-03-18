import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setUser, URL }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  // const location = useLocation();
  // const fromFavorites = location.state?.fromFavorites ? true : null;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${URL}/user/login`,
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        alert("Welcome again!");
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrorMessage("Your email or password are invalid");
      }
    }
  };

  return (
    <div className="bgr">
 <div className="container-log">
      <form className="login-form" onSubmit={handleSubmit}>
      <h4>CONNECTION</h4>
        <div className="email">
          {/* {" "} */}
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }} 
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }} 
          />
        </div>

        <button className="Logbutton" type="submit">Sign In</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
    <div className="hide"></div>
    </div>
   
  );
};

export default LogIn;