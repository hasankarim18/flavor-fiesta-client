import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
    const {user } = useContext(AuthContext)

   

    const url = import.meta.env.VITE_baseURL;

      const  result = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async ()=> {
            const response = await fetch(`${url}/carts?email=${user?.email}`)
            return response.json()
        } 
      });


      return [result]


};

export default useCart;
