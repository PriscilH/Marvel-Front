import { useState, useEffect } from "react";
import axios from "axios";
import Comiclist from "../components/Comiclist";

const Comics = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(
                `https://site--backend-marvel--r85cyr9v9nmw.code.run/comics?limit=100`
            );
 console.log(response.data);
 setData(response.data);
 setIsLoading(false);
};
fetchData();
    }, []);

    return isLoading ? (
        <span>Loading ...</span>
    ) : (
         data.results.map((comic, index) => {
            return <Comiclist  key={index} data={comic} />;
          })
          
        
    );
};

export default Comics;