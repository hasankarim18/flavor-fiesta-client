import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const {user, loading } = useAuth()

    // const token = localStorage.getItem("flavor_fiesta_access_token"); 

    // const url = import.meta.env.VITE_baseURL;

    const axios = useAxiosSecure()

    
      // const  result = useQuery({
      //   queryKey: ["cart", user?.email],
      //   queryFn: async ()=> {
      //       const response = await fetch(`${url}/carts?email=${user?.email}`, {
      //         headers: {
      //           authorization: `bearer ${token}`,
      //         },
      //       });
      //       return response.json()
      //   } 
      // });
      const  result = useQuery({
        queryKey: ["cart", user?.email],
        enabled: !loading,
        queryFn: async ()=> {
            const response = await axios.get(`/carts?email=${user?.email}`);
           
            return response.data          
            
        } 
      });


      return [result]


};

export default useCart;
