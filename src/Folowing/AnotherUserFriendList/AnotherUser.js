
import  { useState, useRef,useContext,useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, ListItemText, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import {firebase} from "../../lib/firebase"
import { collection,  updateDoc, doc,onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Followcontext } from '../followprovider/FollowProvider';
import { Link, useParams} from 'react-router-dom';
import PersonlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './AnotherUser.css';




function AnotherUser() {
  
  const ref = useRef();
  const {currentUser} = useContext(AuthContext)
  const userRef = collection(firebase, "users")
  const [userInfo,setUserInfo] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [usersInfo, setUsersInfo] = useState([])
 
  const [followerss,setFollowerss] = useState([])
  const [follows,setFollows] = useState([])
  const [switchBtn, setSwitchBtn] = useState(false)
  const {get,setget} = useContext(Followcontext)
  const [mainuser,setmainuser] = useState([])
  const [val,setval] = useState([])
  const param = useParams()
 
  console.log(val)


  const clicking = function () {
  
    ref.current.scrollTop = 0;
    setget(get+1)
  };

  

  useEffect(() => {
    if(currentUser){
    const unsubscribe = onSnapshot(userRef, (querySnapshot) => {

    setval( querySnapshot.docs.map(function(item) {


      if(item.data().id === param.id){
        setUserInfo({ ...item.data(), adress: item._key.path.segments[6] });
      }


        if (item.data().id == currentUser?.uid) {
          setmainuser({...item.data(),adress:item._key.path.segments[6]})
        } 

       
         return { ...item.data(), adress: item._key.path.segments[6] };
  
      }));

    });
    return () => unsubscribe();
  }
  }, [currentUser]);

  

  useEffect(() => {
    if(currentUser){
    const unsubscribe = onSnapshot(userRef, (querySnapshot) => {

    setFollows( querySnapshot.docs.map(function(item) {
      if(userInfo?.followers?.includes(item.data().id)){
        return {...follows, data:item.data(),adress:item._key.path.segments[6]}
      }

      
      
      }));

    });
    return () => unsubscribe();
  }
  }, [userInfo]);

  useEffect(() => {
    if(currentUser){
    const unsubscribe = onSnapshot(userRef, (querySnapshot) => {

    setFollowerss( querySnapshot.docs.map(function(item) {
      if(userInfo?.follows?.includes(item._key.path.segments[6])){
         return {...followerss, data:item.data(),adress:item._key.path.segments[6]}
      }

      
      
      }));

    });
    return () => unsubscribe();
  }
  }, [userInfo]);
  


//  useEffect(function(){
   
//     setFollows(followers.map(function(item){
//       if(userInfo?.follows.includes(item.adress)){
        
//         return {...item}
//       }
//       setFollowerss(followerss.slice(followerss.length/2,followerss.length))
//     }))
//     if(get<2){
//       setget(get+1)
//     }
//     },  [followers])

    const folowsload =  function(){
   
      setFollows(follows.filter(function(item){
        return item != undefined
      }))
      setSwitchBtn(!switchBtn)
     
    }

  

    const unfollowing=  function(id,data){
      
      return async function k (){
        

       
        
       
       
         const userdoc =doc(firebase,"users",id)
         const currentuserdoc = doc(firebase,"users",mainuser.adress)
         
          await updateDoc(userdoc,{followers:[...data,mainuser.id]})
          await updateDoc(currentuserdoc, {follows:[...mainuser.follows,id]})
          
          
      }
    }

     const following=  function(data1,data2){
      
      return async function u (){
        

       
        
       
       
        
         const userdoc =doc(firebase,"users",userInfo.adress)
         const currentuserdoc = doc(firebase,"users",mainuser.adress)
         
          await updateDoc(userdoc,{followers:[...data1,mainuser.id]})
          await updateDoc(currentuserdoc, {follows:[...data2,userInfo.adress]})
          setget(get+1)
          
      }
    }

   
const getinc = function (){
  setget(get+1)
}
   useEffect(()=>{
      setget(get+1)
   },[])

  console.log(follows)


  return (
    <div className="userblok">
      <List ref={ref}  className= 'listmain' sx={{ marginTop: '10px' }}>
        <Typography
          sx={{
            marginLeft: '80px',
            position: 'absolute',
            color: 'rgb(0, 94, 244);',
          }}
        >
          <span className='userlist' role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0} >{switchBtn===false?<span className='text'>Follows</span>:<span className='text'>Followers</span>}</span>
          
        </Typography>
        <span style={{opacity:'0'}}><Button variant="contained" color="warning" size="small">Follow</Button></span>
        <span style={{position:'absolute',marginLeft:'-90px',marginTop:'7px'}}><PeopleOutlineIcon sx={{ marginLeft: '90px', marginTop: '-180px', color: 'white' }} /></span> 
        <span onClick={following(userInfo.followers,mainuser.follows)} style={{position:'absolute',marginTop:'-5px',marginLeft:'30px'}}>{mainuser.follows?mainuser.follows.includes(userInfo.adress) ?<Button variant="outlined" color="warning" size="small" disabled={true}>Followed</Button>:<Button variant="contained" color="warning" size="small"disabled={false}>Follow</Button>:null}</span>
        
        <Divider sx={{ marginLeft: '-20px' }} variant="inset" component="li" />
        <Button variant="contained" color="warning" size="small"sx={{opacity:'0'}}></Button>
            {switchBtn === false? followerss.map(function(item,index){
              if(item!=undefined){
              return(
                
<ListItem alignItems="flex-start" className="anotherpeople" key={index}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Link to={`../user-profile/${item.data.id}`} onClick={getinc} className="link">
                      <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                      {item.data.firstName}
                      </Typography>
                      </Link>
                    )}
                    secondary={(
                      <Link to={`../user-profile/${item.data.id}`} onClick={getinc} className="link">
                      <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                        {item.data.lastName}
                      </Typography>
                      </Link>
                    )}
                  />
                  <span className="button" onClick={unfollowing(item.adress, item.data.followers)}>
                  {mainuser.follows.includes(item.adress) ? (
                      <PersonlineIcon className="followed" />
                    ) : (
                      <PersonAddIcon className="following"/>
                    )}
                  </span>
                </ListItem>

              )
              }
            }):follows.map(function(item,index){
              
             if(item != undefined){
              return(
                <ListItem alignItems="flex-start" className="people" key={index}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={item.data.profile_picture} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Link to={`../user-profile/${item.id}`} onClick={getinc} className="link">
                      <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                      {item?item.data.firstName:""}
                      </Typography>
                      </Link>
                    )}
                    secondary={(
                      <Link to={`../user-profile/${item.id}`} onClick={getinc} className="link">
                      <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                        {item?item.data.lastName:"e"}
                      </Typography>
                      </Link>
                    )}
                  />
                  <span className="button" onClick={item?unfollowing(item.adress, item.data.followers):null}>
                  {mainuser.follows.includes(item.adress) ? (
                      <PersonlineIcon className="followed" />
                    ) : (
                      <PersonAddIcon className="following" />
                    )}
                  </span>
                </ListItem>
              )
                    }
                    
            })}
           
          
          
   
        
           <span style={{marginLeft:'-5%',marginTop:'30px',fontSize:'22px'}}>{followerss.filter((i)=>{return i!=undefined}).length===0&&switchBtn==false?"No Follows":""}</span>
          <span style={{marginLeft:'0%',marginTop:'30px',fontSize:'22px'}}>{follows.filter((i)=>{return i!=undefined}).length===0&&switchBtn==true?"No Followers":""}</span>
       
        
        <span className={switchBtn==false?"closing":'closing2'} role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0}><Button variant="contained" color="error" size="small">X</Button></span>
        <Switch onClick={folowsload}/>
      </List>

    </div>
  );
}
export{ AnotherUser};
