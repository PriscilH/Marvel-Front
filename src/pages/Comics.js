import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sizePicture = "/portrait_uncanny.";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--backend-marvel--r85cyr9v9nmw.code.run/comics");
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
    <div className="Contain-comics">
      {data.results.map((comics, index) => {
        return (
            <div className="Comics-list"> 
              <div className="comic-img"><img
              src={
                comics.thumbnail.path +
                sizePicture +
                comics.thumbnail.extension
              }
              alt="comics"
            /></div>
            <div><p>{comics.title}</p></div>
           <div><p>{comics.description && comics.description}</p></div> 
            </div>
        );
      })}
    </div>
  );
};
  export default Comics;