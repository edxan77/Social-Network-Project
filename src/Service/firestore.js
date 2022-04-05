/* eslint-disable no-unused-vars */
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { firebase } from '../lib/firebase';

export const addPost = async (post) => {
  await addDoc(collection(firebase, 'posts'), post);
};

export const getAllPostsById = async (uid) => {
  const postsRef = query(
    collection(firebase, 'posts'),
    where('uid', '==', uid),
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
    // console.log(data)
  });

  return data;
};