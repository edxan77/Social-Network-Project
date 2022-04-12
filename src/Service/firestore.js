import { updateProfile } from 'firebase/auth';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { firebase } from '../lib/firebase';

export const addPost = async (post) => {
  await addDoc(collection(firebase, 'posts'), post);
};

export const addUser = async (meta) => {
  await addDoc(collection(firebase, 'users'), meta);
};

export const getAllUsersById = async (id) => {
  const usersRef = query(collection(firebase, 'users'), where('id', '==', id));

  const querySnapshot = await getDocs(usersRef);

  const data = [];

  querySnapshot.forEach((doc) => {
    const firebaseUser = { ...doc.data(), id: doc.id };

    data.push(firebaseUser);
  });

  return data;
};

const storage = getStorage();

// Storage photo
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);

  await uploadBytes(fileRef, file);
  const photoUrl = await getDownloadURL(fileRef);

  await updateProfile(currentUser, {
    photoURL: photoUrl,
  })
    .then(() => {
      console.log('Photo updated!');
    })
    .catch((error) => {
      console.log(error);
    });

  setLoading(false);
}
