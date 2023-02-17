import { useState, useEffect } from "react";
import axios from "axios";
// import Comiclist from "../components/Comiclist";

// const Comics = ({ URL, search, pages, addFav}) => {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             let filters = "";
//       if (pages > 1 && !search) {
//         filters = "?skip=" + (pages - 1) * 100;
//       } else {
//         if (search) {
//           filters = "?title=" + search;
//         }
//       }
//             const response = await axios.get(
//                 `${URL}/comics${filters}`
//                 // `https://site--backend-marvel--r85cyr9v9nmw.code.run/comics?title=${props.title}`
//             );
//             setData(response.data.results);
//             setIsLoading(false);
//         };
//         fetchData();
//     }, [URL, search, pages]);

//     return isLoading ? (
//         <span>Loading ...</span>
//     ) : (
//          data.results.map((comics, index) => {
//             return <Comiclist heart addFav={addFav} key={index} data={comics}  />;
//           })
          
        
//     );
// };

// export default Comics;

const Comics = ({URL}) => {
    const [data, setData] = useState({});
    const [title, setTitle] = useState("");
    const [skip, setSkip] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchData = async () => {
      const response = await axios.get(
        `${URL}/comics?title=${title}&skip=${skip}`
      );
      setData(response.data);
      setIsLoading(false);
    };
  
    useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, skip]);
  
    return isLoading ? (
      <body>
        <div className="bodY">
          <div class="loading-effect">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </div>
      </body>
    ) : (
      <body>
        <div className="pagination">
          <div>
            {skip === 0 ? (
              <button className="paging-0">
                <p className="paging-text-0">NONE</p>
              </button>
            ) : (
              <button
                className="paging"
                onClick={() => {
                  setSkip(skip - 100);
                  window.onbeforeunload = function () {
                    window.scrollTo(0, 0);
                  };
                }}
              >
                PREVIOUS
              </button>
            )}
          </div>
          <div className="search-bar">
            <input
              onChange={(elem) => {
                setTitle(elem.target.value);
              }}
              type="text"
              placeholder="SEARCH"
            ></input>
          </div>
          <div>
            {data.count > 100 ? (
              <button
                className="paging"
                onClick={() => {
                  setSkip(skip + 100);
                  window.scroll(0, 0);
                }}
              >
                NEXT
              </button>
            ) : (
              <button className="paging-0">
                <p className="paging-text-0">NONE</p>
              </button>
            )}
          </div>
        </div>
  
        <div className="listing-comics">
          {data.results.map((elem, index) => {
            if (
              elem.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ) {
              return null;
            } else {
              return (
                <div className="card" key={index}>
                  <div className="img-fit">
                    <div className="description">{elem.description}</div>
                    <div class="image">
                      <img
                        className="comics-img"
                        src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                        alt="comics"
                        width="200px"
                      />
                      <div class="image__overlay image__overlay--primary">
                        <p class="image__description">{elem.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="title-card">
                    <div>
                      <p className="title-comics">{elem.title}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="pagination-bottom">
          <div>
            {skip === 0 ? (
              <button className="paging-0">
                <p className="paging-text-0">NONE</p>
              </button>
            ) : (
              <button
                className="paging"
                onClick={() => {
                  setSkip(skip - 100);
                  window.onbeforeunload = function () {
                    window.scrollTo(0, 0);
                  };
                }}
              >
                PREVIOUS
              </button>
            )}{" "}
          </div>
          <div>
            {data.count > 100 ? (
              <button
                className="paging"
                onClick={() => {
                  setSkip(skip + 100);
                  window.scroll(0, 0);
                }}
              >
                NEXT
              </button>
            ) : (
              <button className="paging-0">
                <p className="paging-text-0">NONE</p>
              </button>
            )}
          </div>
        </div>
      </body>
    );
  };
  
  export default Comics;