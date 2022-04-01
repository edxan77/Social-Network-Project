import { Link } from 'react-router-dom';
import { auth, db } from '../../lib/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import styles from './Register.module.css';


function Register() {

    const [isSubmited, setIsSubmeted] = useState(false);
  
    const [fireEmailError, setFireEmailError] = useState('');
    const [firePasswordError, setFirePasswordError] = useState('');
  
    
    const validate = values => {
      const errors = {}
      if (!values.firstName) {
        errors.firstName = 'required'
      } else if (['admin', 'null', 'god'].includes(values.firstName)) {
        errors.firstName = 'Nice try';
      }else if(values.firstName.length < 2){
        errors.firstName = 'Too Short!'
      }
  
      if (!values.lastName) {
        errors.lastName = 'required'
      }else if(values.lastName.length < 2){
        errors.lastName = 'Too Short!'
      }
  
      if (!values.email) {
        errors.email = 'required'
      } 
  
      if (!values.password) {
        errors.password = 'required'
      } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more'
      } else if (values.password === '123456') {
        errors.password = 'Weak password!'
      }
  
      return errors
    }
  
    const formik = useFormik({
  
      initialValues: {
        firstName:'',
        lastName:'',
        email: '',
        password: '',
      },
      validate,
  
    })
    
    const firstName = formik.values.firstName;
    const lastName = formik.values.lastName;
    const email = formik.values.email;
    const password = formik.values.password;
  
  
    useEffect(()=>{
      if(email.length > 0 || password.length > 0 ){
        setFireEmailError('');
        setFirePasswordError('');
      }
    },[email, password])
  
  
    function createAccount(){
      
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid),{
          firstName: firstName,
          lastName:lastName,
          email:email,
          password:password
        }).then(()=>{
          setIsSubmeted(true);
          console.log('created')
        
        }).catch((error)=>{
          console.log(error)
        })
        
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
  
        switch(errorCode){
          case 'auth/email-already-in-use':
            return setFireEmailError('email-already-in-use')
          case 'auth/invalid-email':
            return  setFireEmailError('invalid-email');
          case 'auth/weak-password':
            return setFirePasswordError('weak-password');
        }
      });
     
    }
  
    return (
  
      <>
        {isSubmited ?
          <div className={styles.boxWrapper}>
            <h1>Lightbook</h1>
            <div className={styles.box}>
              <div className={styles.textBox}>
                <h2>Create a new account</h2>
                <h4>It is quick and easy</h4>
              </div>
              <p className={styles.text}>Your account is created</p>
              <Link to='/login' className={styles.link} >Already have an account?</Link>  
            </div>
          </div> :
          <div className={styles.boxWrapper}>
            <h1>Lightbook</h1>
            <div className={styles.box}>
              <div className={styles.textBox}>
                <h2>Create a new account</h2>
                <h4>It is quick and easy</h4>
              </div>
              <form onSubmit={(e)=>{
                e.preventDefault();
                createAccount();
              }}>
                <input type="text" className={styles.input}  placeholder='FirstName' id='firstName' name='firstName' 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.firstName} 
                />
                <div className={styles.err}>{formik.touched.firstName && formik.errors.firstName &&  
                  <div className={styles.error}>{formik.errors.firstName}</div> }
                </div>
  
                <input type="text" className={styles.input}  placeholder='LastName' id='lastName' name='lastName' 
                  onChange={formik.handleChange}  
                  onBlur={formik.handleBlur} 
                  value={formik.values.lastName}  
                />
                <div className={styles.err}>{formik.touched.lastName &&  formik.errors.lastName &&
                  <div className={styles.error}>{formik.errors.lastName}</div> }
                </div>
  
                <input type='email' className={styles.input} placeholder='Email' id="email"  name="email"
                  onChange={formik.handleChange}  onBlur={formik.handleBlur}
                  value={formik.values.email}  
                />
                <div className={styles.err}>{formik.touched.email && formik.errors.email ?  <div className={styles.error}>{formik.errors.email}</div> :
                  <div className={styles.error}>{fireEmailError}</div> }
                </div>
             
              <input type="password"  className={styles.input} placeholder='Password' id="password" name="password"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.password} 
              />
              <div className={styles.err}>{formik.touched.password && formik.errors.password ? <div className={styles.error}>{formik.errors.password}</div> : 
                <div className={styles.error}>{firePasswordError}</div> }
              </div>
   
               <div className={styles.line}></div>
               <button className={styles.btn}>Sign up</button>
             </form>
             <Link to='/login' className={styles.link} >Already have an account?</Link>
            </div>
          </div> 
        }
      </>    
      
    )
  }
  
  export default Register;