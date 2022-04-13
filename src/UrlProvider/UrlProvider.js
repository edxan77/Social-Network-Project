import {  createContext, useContext,  useState, useEffect} from "react";
import { firebase, storage } from '../lib/firebase';
import {ref,  uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {AuthContext} from '../AuthProvider/AuthProvider';
import { updateDoc, doc, collection, getDocs} from "firebase/firestore";


export  const UrlContext = createContext();
const usersRef = collection(firebase, 'users');


function UrlProvider ({ children }) {
    
    const [image, setImage] = useState();
    const [key, setKey] = useState();
    const {currentUser} = useContext(AuthContext);


    async function updateUser(id, imageUrl){
      const userDoc = doc(firebase, 'users', id);
      const newField = {photo: imageUrl};
      await updateDoc(userDoc, newField);
  }
  

    useEffect(()=>{
        const getUsers = async () => {
            let data = await getDocs(usersRef);
            if(currentUser){
                data.docs.map((user)=>{
                  if(user.data().id === currentUser.uid){
                      console.log('user', user)
                      console.log('user uid', currentUser.uid)
                      setKey(user.id);
                      // console.log('users',data.docs);
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
        console.log(image.name);
        const imageRef = ref(storage, `images/${image.name}`);
        // uploadBytes(imageRef, image);
        // getDownloadURL(imageRef).then((url)=>{
        //     updateUser(key, url);
        //     console.log('key',key);
        // }).catch((err)=>{
        //   console.log(err.message);
        //   setImage(null);
        // }).catch((error)=>{
        //   console.log(error.message);
        // })
        uploadBytesResumable(imageRef,image,image).then(
          () =>{
            getDownloadURL(imageRef).then(function(url){
              updateUser(key, url);
          }
        )
        }).catch((error)=>{
            console.log(error.message);
          })
      
    
  }

 

  return (
    <UrlContext.Provider value={{  handleImageChange, handleSubmit }}>
      {children}
    </UrlContext.Provider>
  )

}

export default UrlProvider;