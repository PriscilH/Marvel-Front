import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Comics = ({URL, title, setTitle }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const sizePicture = "/portrait_uncanny.";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const fetchData = async () => {
        let filters = "";
        if (pages > 1 && !title) {
          filters = "?skip=" + (pages - 1) * 100; 
        } else {
      if (title) {
        filters = filters + "?title=" + title;
      }}
        const response = await axios.get(`${URL}/comics${filters}`);
        /* console.log(response.data); */
        setData(response.data);
    };
    fetchData();
  }, [URL, title, pages]);

  return isLoading ? (
   <Loader/>
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
  );
};
  export default Comics;