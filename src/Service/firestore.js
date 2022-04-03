/* eslint-disable no-unused-vars */
import { collection, addDoc, getDocs, query, setDoc, doc, where, serverTimestamp, orderBy } from 'firebase/firestore';
import { firebase } from '../lib/firebase';

export const addPost = async (post) => {
  await addDoc(collection(firebase, 'posts'), post);
};

export const addUser = async (post) => {
  await addDoc(collection(firebase, 'users'), {
   post
  });
};

export const setPost = async (post) => {
    const docsRef = doc(firebase, 'posts', 'user1');
setDoc(docsRef, {post}, { merge: true });
}

export const getAllPostsById = async () => {
  const postsRef = query(
    collection(firebase, 'posts'),
    orderBy('createdAt', 'desc')
  );

  const querySnapshot = await getDocs(postsRef);

  const data = [];

  querySnapshot.forEach((doc) => {
    const post = { ...doc.data(), id: doc.id };

    data.push(post);
    // console.log(data)
  });

  return data;
};

export const getAllUsersById = async () => {
  const postsRef = query(
    collection(firebase, 'users'),
    where('id', '==', '53y9FvYZuTSQjnAb6t4BS7hwh4K3')
  );

  const querySnapshot = await getDocs(postsRef);

  const data = [];

  querySnapshot.forEach((doc) => {
    const post = { ...doc.data(), id: doc.id };

    data.push(post);
    // console.log(data)
  });

  return data;
};
