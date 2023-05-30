import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()




const AuthProvider = ({children}) => {  
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const auth = getAuth(app);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      //  const uid = user.uid;
      setLoading(false);
      setUser(user);

      // ...
    } else {
      // User is signed out
      // ...
        setLoading(false);
    }
  });

  return () => {
      return  unsubscribe()
  }
}, [auth])


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