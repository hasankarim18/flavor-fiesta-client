import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';


const SocialLogin = () => {
const location = useLocation()
const navigate = useNavigate()
     

const {googleSignIn} = useContext(AuthContext)

 let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = ()=> {
        const url = import.meta.env.VITE_baseURL

        googleSignIn()
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
          
            const loggedInUser = result.user;
            const userName = loggedInUser.displayName;
            const userEmail = loggedInUser.email;

            const saveUser = { name: userName, email: userEmail };

            
          
           fetch(`${url}/users`, {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(saveUser),
           })
             .then((res) => res.json())
             .then(() => {
                console.log(result);
                 navigate(from);
            //    if (data.insertedId) {
            //      Swal.fire({
            //        title: "User Profile Successfully Created",
            //      }).then(() => {                    
                   
            //      });
            //    }
             })
             .catch((error) => {
               console.log("Update in my database erro" + error);
             });
          
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
           console.log(errorCode, errorMessage);
            // ...
          });
    }

    return (
        <div className="my-4 text-center">
            <div className="diviver"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;