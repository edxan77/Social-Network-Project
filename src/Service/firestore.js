/* eslint-disable no-unused-vars */
import { collection, addDoc, getDocs, query, setDoc, doc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';

export const addPost = async (post) => {
  await addDoc(collection(firestore, 'posts'), post);
};

export const setPost = async (post) => {
    const docsRef = doc(firestore, 'posts', 'user1');
setDoc(docsRef, {post}, { merge: true });
}

export const getAllPostsById = async () => {
  const postsRef = query(
    collection(firestore, 'posts')
  );

  const querySnapshot = await getDocs(postsRef);

  const data = [];

  querySnapshot.forEach((doc) => {
    const post = { ...doc.data(), id: doc.id };

    data.push(post);
    console.log(data)
  });

  return data;
};
