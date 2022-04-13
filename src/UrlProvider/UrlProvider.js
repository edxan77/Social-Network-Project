import {  createContext, useContext,  useState, useEffect} from "react";
import { firebase, storage } from '../lib/firebase';
import {ref,  uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {AuthContext} from '../AuthProvider/AuthProvider';
import { updateDoc, doc, collection, getDocs} from "firebase/firestore";


export  const UrlContext = createContext();
const usersRef = collection(firebase, 'users');


function UrlProvider ({ children }) {
    
    const [image, setImage] = useState();
    const [url, setUrl] = useState();
    const [key, setKey] = useState();
    const {currentUser} = useContext(AuthContext);


    async function updateUser(id, imageUrl){
      const userDoc = doc(firebase, 'users', id);
      const imageField = {backgroundImg: imageUrl};
      await updateDoc(userDoc, imageField);
  }
  

    useEffect(()=>{
        const getUsers = async () => {
            let data = await getDocs(usersRef);
            if(currentUser){
                data.docs.map((user)=>{
                  if(user.data().id === currentUser.uid){
                      setKey(user.id);
                  }

              }) 
            }     
          };
          getUsers();
    },[currentUser]);


 function handleImageChange(e){
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }
  }
  function handleSubmit(){
        console.log(currentUser);
        // console.log(image.name);
        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytesResumable(imageRef,image,image).then(
          () =>{
            getDownloadURL(imageRef).then(function(url){
              updateUser(key, url);
              setUrl(url);
          }
        )
        }).catch((error)=>{
            console.log(error.message);
          })
      
    
  }

 

  return (
    <UrlContext.Provider value={{url,  handleImageChange, handleSubmit }}>
      {children}
    </UrlContext.Provider>
  )

}

export default UrlProvider;