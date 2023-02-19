import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Character = ({URL}) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const { id } = location.state;
//   const sizePicture = "/portrait_fantastic.";


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const fetchData = async () => {
        const response = await axios.get(`${URL}/comics/${id}`,
        { id: id, });
        /* console.log(response.data); */
        setData(response.data);  
    };
    fetchData();
  }, [URL, id]);

  return isLoading ? (
    <Loader/>
  ) : (  
          <div className="character-id">
          <div className="portrait">
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt=""
            />
          </div>
          <div className="header-scroll-text">
          <p>Comics with {data.name}</p>
        </div>

        <div className="master-scrolling">
          <div className="scrolling-comics">
            {data.comics.map((elem, index) => {
              if (
                elem.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ) {
                return null;
              } else {
                return (
                  <div key={index} className="header-character">
                    <div className="comics-fit-scroll">
                      <img
                        src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                        alt="comics-list"
                        width="120px"
                      />
                    </div>
                    <div>
                      <div className="title-comics-scroll">{elem.title}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
            <Link to="/characters">
            <button className="button-back">RETOUR</button>
          </Link>
        </div>
       
  );
};
export default Character;