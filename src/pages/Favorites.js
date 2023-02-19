import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import axios from "axios";

const Favorites = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        const fetchData = async () => {
            const response = await axios.get(`${URL}/favs`);
            /* console.log(response.data); */
            setData(response.data);  
        };
        fetchData();
      }, [URL]);
    return isLoading ? (
        <Loader/>
        ) : ( 
        <div className="backcharact">
            <h1> Page Favorites in build </h1>
        </div>
        
    );
};

export default Favorites;