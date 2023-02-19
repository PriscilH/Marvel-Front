import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Characters = ({URL, name, setName}) => {
    const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const sizePicture = "/portrait_fantastic.";


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const fetchData = async () => {
      let filters = "";
      if (pages > 1 && !name) {
        filters = "?skip=" + (pages - 1) * 100; 
      } else {
      if (name) {
        filters = filters + "?name=" + name;
      }}
        const response = await axios.get(`${URL}/characters${filters}`);
        /* console.log(response.data); */
        setData(response.data);
    };
    fetchData();
  }, [URL, name, pages]);
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
      <div className="pagination">
        <button
          className="page-button"
          onClick={() => setPages(pages - 1)}
          disabled={pages === 1}
        >
          -
        </button>
        <p className="page-number">Page {pages}</p>
        <button
          className="page-button"
          onClick={() => setPages(pages + 1)}
          disabled={data.length < 100}
        >
          +
        </button>
      </div>
    </div>
    
    </>
  );
};
export default Characters;