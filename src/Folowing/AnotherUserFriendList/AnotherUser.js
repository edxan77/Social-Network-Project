
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
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FollowContext } from '../followprovider/followProvider';
import { Link, useParams} from 'react-router-dom';
import PersonlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './AnotherUser.css';




function AnotherUser() {
  
  const ref = useRef();
  const {currentUser} = useContext(AuthContext)
  const userRef = collection(firebase, "users")
  const {userInfo,setUserInfo} = useContext(FollowContext)
  const [usersInfo, setUsersInfo] = useState([])
  const [followers,setFollowers] = useState([])
  const [followerss,setFollowerss] = useState([])
  const [follows,setFollows] = useState([])
  const [switchBtn, setSwitchBtn] = useState(false)
  const {get,setget} = useContext(FollowContext)
  const [mainuser,setmainuser] = useState([])
  const param = useParams()
 


  const clicking = function () {
  
    ref.current.scrollTop = 0;
    setget(get+1)
  };

  useEffect(()=>{

    const getUsers = async ()=>{
    
      const data = await getDocs(userRef)
      setUsersInfo (data.docs.map(function (item){
        if(item.data().id == param.id){
          setUserInfo({...item.data(),adress:item._key.path.segments[6]},)
        }
        if(item.data().id==currentUser.uid){
          setmainuser({...item.data(),adress:item._key.path.segments[6]})
        }
          return {...item.data(), adress:item._key.path.segments[6]}
     
      }))
      
      
    
      
    }
    
    getUsers()
  },[get])

  useEffect( function(){
    const info = async ()=>{ 
      
      const data = await getDocs(userRef)
      setFollowers(data.docs.map(function(item){
        if(userInfo.followers.includes(item.data().id)){
          console.log("yes")
          setFollowerss(function(prev){return [...prev,{data:item.data(),adress:item._key.path.segments[6]}]})
        }

       
       
        return {...item.data(), adress:item._key.path.segments[6]}
     
      }))

     

    }
   
info()
  },[userInfo])

 useEffect(function(){
    setFollows(followers.map(function(item){
      if(userInfo.follows.includes(item.adress)){
        return {...item}
      }
      setFollowerss(followerss.slice(followerss.length/2,followerss.length))
    }))
    
    },  [followers])

    const folowsload =  function(){
   
      setFollows(follows.filter(function(item){
        return item != undefined
      }))
      setSwitchBtn(!switchBtn)
     
    }

  

    const unfollowing=  function(id,data){
      
      return async function k (){
        

       
        
       
       
        console.log(id)
         const userdoc =doc(firebase,"users",id)
         const currentuserdoc = doc(firebase,"users",mainuser.adress)
         
          await updateDoc(userdoc,{followers:[...data,mainuser.id]})
          await updateDoc(currentuserdoc, {follows:[...mainuser.follows,id]})
          setget(get+1)
          
      }
    }

   
const getinc = function (){
  setget(get+1)
}
   
console.log(usersInfo)
console.log("guest")
console.log(userInfo)
console.log("mainuser")
 console.log(mainuser)
console.log(followerss)
console.log("follows")
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
          <span className='userlist' role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0} >{switchBtn===false?<span className='text'>Followers</span>:<span className='text'>Follows</span>}</span>
        </Typography>
        <span ><PeopleOutlineIcon sx={{ marginLeft: '120px', marginTop: '0px', color: 'white' }} /></span>
        <Divider sx={{ marginLeft: '-20px' }} variant="inset" component="li" />
       
            {switchBtn === false? followerss.map(function(item,index){
              
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
                  <span className="button" onClick={item?unfollowing(item.adress, item.data.followers):null}>
                  {mainuser.follows.includes(item.adress) ? (
                      <PersonlineIcon className="followed" />
                    ) : (
                      <PersonAddIcon className="following"/>
                    )}
                  </span>
                </ListItem>

              )
                    
            }):follows.map(function(item,index){
              
             if(item != undefined){
              return(
                <ListItem alignItems="flex-start" className="people" key={index}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Link to={`../user-profile/${item.id}`} onClick={getinc} className="link">
                      <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                      {item?item.firstName:""}
                      </Typography>
                      </Link>
                    )}
                    secondary={(
                      <Link to={`../user-profile/${item.id}`} onClick={getinc} className="link">
                      <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                        {item?item.lastName:"e"}
                      </Typography>
                      </Link>
                    )}
                  />
                  <span className="button" onClick={item?unfollowing(item.adress, item.followers):null}>
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
           
          
          
   
        

       
        
        <span className="closing" role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0}><Button variant="contained" color="error" size="small">X</Button></span>
        <Switch onClick={folowsload}/>
      </List>

    </div>
  );
}
export{ AnotherUser};
