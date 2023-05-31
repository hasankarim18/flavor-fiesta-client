import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext()




const AuthProvider = ({children}) => {  
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const baseUrl = import.meta.env.VITE_baseURL;

const auth = getAuth(app);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    
    if (user) {
     
      setLoading(false);
      setUser(user);

      // get and set token 
      if(user){
         axios.post(`${baseUrl}/jwt`, { email: user.email })
         .then((res)=> {
          const token = res.data.token 
          localStorage.setItem('access_token', token)
          console.log(token);
         })
         .catch((error)=> {
          console.log(error);
         })
      }
    
    } else {
      // User is signed out
      // ...
        localStorage.removeItem("access_token");
        setLoading(false);
    }
  });

  return () => {
      return  unsubscribe()
  }
}, [auth, baseUrl])


  const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = ()=> {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photourl)=> {
   return   updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:photourl
      })
        
  }


  //  google provier 


  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = ()=> {
    return signInWithPopup(auth, googleProvider)
  }




   
    const userInfo = {
      auth,
      user,
      loading,
      setLoading,
      createUser,
      loginUser,
      logout,
      setUser,
      updateUserProfile,
      googleSignIn,
    };

    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;