import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
 
   const baseUrl = import.meta.env.VITE_baseURL;


        const {data,isLoading:dataLoading, refetch } = useQuery({
          queryKey:["menu"], 
          queryFn: async () => {
            const response = await fetch(`${baseUrl}/menu`);
            return response.json()
          }
        })

      
    return { data, dataLoading, refetch };
};

export default useMenu;