import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


 const baseurl = import.meta.env.VITE_baseURL;

 const axiosSecure = axios.create({
   baseURL: baseurl,
 });

const useAxiosSecure = () => {
   const { logout } = useContext(AuthContext);
   const navigate = useNavigate()

   // creating axios instances
  

   useEffect(() => {
    // intercept before the request send
     axiosSecure.interceptors.request.use((config)=> {
        const token = localStorage.getItem("flavor_fiesta_access_token");
       

        if(token){
            config.headers.authorization = `bearer ${token}`
        }
        return config 
     })

     /// receiving the response
    axiosSecure.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;  
    
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
     
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          logout();
          navigate("/login");
       //  console.log(error)
        // console.log('error', error.response.status)
        }
        return Promise.reject({error, data:[]});
      }
    );



   }, [ logout, navigate])

   return axiosSecure
   

};

export default useAxiosSecure;