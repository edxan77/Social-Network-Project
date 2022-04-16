import {  createContext, useContext,  useState, useEffect} from "react";
import { firebase, storage } from '../lib/firebase';
import {ref,  uploadBytesResumable, getDownloadURL, deleteObject} from 'firebase/storage';
import {AuthContext} from '../AuthProvider/AuthProvider';
import { updateDoc, doc, collection, getDocs, deleteField} from "firebase/firestore";


export  const UrlContext = createContext();
const usersRef = collection(firebase, 'users');


function UrlProvider ({ children }) {
    
    const [image, setImage] = useState();
    const [url, setUrl] = useState();
    const [key, setKey] = useState();
    const [loading, setLoading] = useState(false);
    const {currentUser} = useContext(AuthContext);


    async function updateUser(id, imageUrl){
      const userDoc = doc(firebase, 'users', id);
      const imageField = {backgroundImg: imageUrl};
      await updateDoc(userDoc, imageField);
   }

   async  function deleteImg(id){

      if(currentUser){
        const uid = currentUser.uid
        // console.log(currentUser.uid)
        const imageRef = ref(storage, `images/${uid}`);
        deleteObject(imageRef).then(() => {
          // File deleted successfully
          console.log('File deleted successfully');
        }).catch((error) => {
          // Uh-oh, an error occurred!
          console.log(error)
        });
  
        const usersRef = doc(firebase, 'users', id);
       await  updateDoc(usersRef, {
          backgroundImg: deleteField()
      })
      }
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
        // console.log(currentUser);
        // console.log(image.name);
        if(currentUser){
          setLoading(true)
          const imageRef = ref(storage, `images/${currentUser.uid}`);
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
       
  }

 

  return (
    <UrlContext.Provider value={{url,  handleImageChange, handleSubmit, loading, setLoading, deleteImg, key }}>
      {children}
    </UrlContext.Provider>
  )

}

export default UrlProvider;