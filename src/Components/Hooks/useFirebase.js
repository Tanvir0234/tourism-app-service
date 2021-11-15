import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut,onAuthStateChanged ,updateProfile} from "firebase/auth";
import { useHistory } from "react-router";
initializeAuthentication()

const useFirebase = () =>{
    const history =useHistory();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const  [isLoading, setIsLoading] = useState(true)
    const [admin,setAdmin] = useState(false)
    const auth = getAuth();
  
    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         setAuthError('')

         //Send Name Firebase After Creation---------------------
         const newUser ={email, displayName: name}
         
          setUser(newUser)

          //information send to db----------
          saveUserToDb(email, name);

          updateProfile(auth.currentUser,{
            displayName :name
          }).then(()=>{

          }).catch((error)=>{

          })
          history.replace('/')

          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setAuthError(error.message);
          
        })
        .finally(() => setIsLoading(false));
    };
    
    const loginUser = (email, password,location ,history) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          setAuthError('')
        //setUser(user);
        const redirect_uri = location.state?.from || '/home';
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      });
    }
  
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
             
          } else {
              setUser({})
          }
          setIsLoading(false);
      });
      return () => unsubscribed;
  }, [])

  useEffect(()=>{
    fetch(`https://mighty-reaches-12627.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))  //admin declare in server 
  },[user.email])
  
    const logOut = () =>{
      signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        })
        .finally(() =>  setIsLoading(false));
        
  
    }

    const saveUserToDb =(email , displayName)=>{

      const user = {email , displayName};
      fetch('https://mighty-reaches-12627.herokuapp.com/users',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()
    }



  
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,
  
    }
  }
  
  export default useFirebase;