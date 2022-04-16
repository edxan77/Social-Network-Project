import { Link, useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';

import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect, useContext } from 'react';
import styles from  './Login.module.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import {RedirectContext} from '../../RedirectProvider/RedirectProvider';


function Login() {
  const { setLoading } = useContext(AuthContext);
  const [fireNotFoundError, setFireNotFoundError] = useState('');
  const [firePasswordError, setFirePasswordError] = useState('');
  // const {setIsAllow} = useContext(RedirectContext);

  const navigate = useNavigate();

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'required';
    } 

    if (!values.password) {
      errors.password = 'required';
    } 

    return errors;
  }

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: ()=>{
      login();
    }
  })


  const email = formik.values.email;
  const password = formik.values.password;

  function login(){

    setLoading(true)

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

    // eslint-disable-next-line no-unused-vars
    const user = userCredential.user;
    // setIsAllow(true);
    navigate('/home');
 
    })
    .catch((error) => {
      const errorCode = error.code;
      switch(errorCode){
        case 'auth/user-not-found':
          return setFireNotFoundError('User not found');
        case 'auth/wrong-password':
          return setFirePasswordError('Wrong password');
      }
     
   
    }) .finally(() => setLoading(false));
 
  }

  useEffect(()=>{
    if(email.length >0 || password.length >0 ){
      setFirePasswordError('');
      setFireNotFoundError('');
    }
  },[email, password])



    return (
      <div className={styles.boxWrapper}>
        <h1>Lightbook</h1>
        <div className={styles.box}>
          <form onSubmit={formik.handleSubmit}>
            <input type='email' className={fireNotFoundError || formik.touched.email && formik.errors.email ? styles.inputError : styles.input} 
              placeholder='Email' id="email"  name="email"
              onChange={formik.handleChange}  
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <div className={styles.err}>{formik.touched.email && formik.errors.email ?  
              <div className={styles.error}>{formik.errors.email}</div> : null 
            }
            </div>
           
            <input type="password"  className={fireNotFoundError || firePasswordError || formik.touched.password &&  formik.errors.password ? 
              styles.inputError : styles.input} 
              placeholder='Password' id="password" name="password"
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div className={styles.err}>{formik.touched.password  && formik.errors.password ? 
              <div className={styles.error}>{formik.errors.password}</div> : 
              <div className={styles.error}>{firePasswordError}</div> }
            </div>

            <div className={styles.boxNotFound}>{fireNotFoundError && 
              <div className={styles.notFound}>{fireNotFoundError}</div> }
            </div>

             <button type='submit' className={styles.btn1} >Login</button>
          </form>
          <a href='#' className={styles.link}>Forgot password?</a>
          <div className={styles.line}></div>
          <Link to='/register'><button type='submit' className={styles.btn2} >Create new Account</button></Link>

        </div> 
      </div>
    )
  }
  
  export default Login;