import { doc, updateDoc } from 'firebase/firestore';
import { firebase } from '../../../lib/firebase';

export const handleEdit = async (id) => {
  const postsRef = doc(firebase, 'posts', id);

  await updateDoc(postsRef, {
    isEdit: true,
    about: 'Write your bio',
  });
};

export const handleUserEdit = async (id) => {
  const postsRef = doc(firebase, 'users', id);

  await updateDoc(postsRef, {
    isEdit: true,
    about: 'Write your bio',
  });
};