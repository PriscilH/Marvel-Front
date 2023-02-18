import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = ({URL}) => {
    const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sizePicture = "/portrait_fantastic.";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/characters`);
        /* console.log(response.data); */
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [URL]);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
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
    </div>
  );
};
export default Characters;