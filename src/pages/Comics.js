import { useState, useEffect } from "react";
import axios from "axios";

const Comics = ({URL, title, setTitle}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [search, setSearch] = useState("")
  const sizePicture = "/portrait_uncanny.";
  useEffect(() => {
    const fetchData = async () => {
        let filters = "";
      if (title) {
        filters = filters + "?title=" + title;
      }
        const response = await axios.get(`${URL}/comics${filters}`);
        /* console.log(response.data); */
        setData(response.data);
        setIsLoading(false);
      
    };
    fetchData();
  }, [URL, title]);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="Contain-comics">
      <input
            className="Searchcomics"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            id="title"
            value={title}
            type="text"
            placeholder="Rechercher un comics"
          />
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