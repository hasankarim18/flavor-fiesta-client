import { useEffect, useState } from "react";



const useMenu = () => {
   const [data, setData] = useState([])
   const [dataLoading, setDataLoading] = useState(true)
   const [loadingError, setLoadingError] = useState(false)


   const baseUrl = import.meta.env.VITE_baseURL;
 //   const baseUrl = import.meta.env.baseUrl

        useEffect(() => {
           
          fetch(`http://localhost:5000/menu`)
            .then((res) => res.json())
            .then((data) => {
              setData(data.data);
              setDataLoading(false);
            })
            .catch((error) => {
              setDataLoading(false);
              setLoadingError({ error, message: "Menu Loading error" });
            });
        }, [baseUrl]);

 
    return { data, dataLoading, loadingError };
};

export default useMenu;