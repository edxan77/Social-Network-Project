import {  createContext, useContext, useState } from "react";
import { storage } from '../lib/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
// import { getAllUsersById } from '../../Service/firestore';
import {AuthContext} from '../AuthProvider/AuthProvider'
export const UrlContext = createContext()

function UrlProvider ({ children }) {
    
    const [image, setImage] = useState();
    const [url, setUrl] = useState();
    const {currentUser} = useContext(AuthContext)

 function handleImageChange(e){
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }
  }
  function handleSubmit(){
      if(currentUser){
          console.log(currentUser);
        const imageRef = ref(storage, 'image');
        uploadBytes(imageRef, image);
        getDownloadURL(imageRef).then((url)=>{
            currentUser.photoURL = url;
            setUrl(url);
        }).catch((err)=>{
          console.log(err.message);
          setImage(null);
        }).catch((error)=>{
          console.log(error.message);
        })
      }
    
  }

 

  return (
    <UrlContext.Provider value={{ url, handleImageChange, handleSubmit }}>
      {children}
    </UrlContext.Provider>
  )

}

export default UrlProvider;