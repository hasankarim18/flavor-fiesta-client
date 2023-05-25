import { useEffect, useState } from "react";



const useMenu = () => {
   const [data, setData] = useState([])
   const [dataLoading, setDataLoading] = useState(true)
   const [loadingError, setLoadingError] = useState(false)

        useEffect(() => {
           
          fetch("/data/menu.json")
            .then((res) => res.json())
            .then((data) =>{
              setData(data);
               setDataLoading(false);
            }
            )
            .catch(error => {
                 setDataLoading(false);
                setLoadingError({ error, message: "Menu Loading error" });
            })
        }, []);

 
    return { data, dataLoading, loadingError };
};

export default useMenu;