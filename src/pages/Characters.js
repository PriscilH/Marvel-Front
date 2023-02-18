import { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
    const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sizePicture = "/portrait_fantastic.";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--backend-marvel--r85cyr9v9nmw.code.run/characters");
        /* console.log(response.data); */
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="Contain-characters">
      {data.results.map((characters, index) => {
        return (
            <div className="Characters-list"> 
              <div><img
              src={
                characters.thumbnail.path +
                sizePicture +
                characters.thumbnail.extension
              }
              alt="characters"
            /></div>
            <div><p>{characters.name}</p></div> 
            </div>
        );
      })}
    </div>
  );
};
export default Characters;