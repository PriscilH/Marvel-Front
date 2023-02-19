import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Characters = ({URL, name, setName}) => {
    const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sizePicture = "/portrait_fantastic.";


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const fetchData = async () => {
      let filters = "";
      if (name) {
        filters = filters + "?name=" + name;
      }
        const response = await axios.get(`${URL}/characters${filters}`);
        /* console.log(response.data); */
        setData(response.data);
    };
    fetchData();
  }, [URL, name]);
  return isLoading ? (
    <Loader/>
  ) : (
  <>
  <input
            className="Searchchars"
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="name"
            value={name}
            type="text"
            placeholder="Rechercher un personnage"
          />
    <div className="Contain-characters">
      
      {data.results.map((characters, index) => {
        return (
            <div className="Characters-list"> 
            <Link
                  to="/character"
                  onClick={() => window.scrollTo(0, 0)}
                  state={{ id: characters._id }}
                >
              <div><img
              src={
                characters.thumbnail.path +
                sizePicture +
                characters.thumbnail.extension
              }
              alt="characters"
            /></div>
            <div><p>{characters.name}</p></div> 
            <div><p>{characters.description && characters.description}</p></div> 
            </Link></div>
        );
      })}
    </div></>
  );
};
export default Characters;