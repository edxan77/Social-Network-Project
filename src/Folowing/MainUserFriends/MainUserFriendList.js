import './mainUserFriendList.css';
import  { useState, useRef,useContext,useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, ListItemText, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SmsIcon from '@mui/icons-material/Sms';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import {firebase} from "../../lib/firebase"
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Followcontext } from '../followprovider/followProvider';
import { Link } from 'react-router-dom';



function MainUserFriendList() {
  const [clicked, setclicked] = useState(false);
  const ref = useRef();
  const {currentUser} = useContext(AuthContext)
  const userRef = collection(firebase, "users")
  const {userInfo,setUserInfo} = useContext(Followcontext)
  const [usersInfo, setUsersInfo] = useState([])
  const [followers,setFollowers] = useState([])
  const [followerss,setFollowerss] = useState([])
  const [follows,setFollows] = useState([])
  const [switchBtn, setSwitchBtn] = useState(false)
  const {get,setget} = useContext(Followcontext)
 


  const clicking = function () {
    setclicked(!clicked);
    ref.current.scrollTop = 0;
  };

  useEffect(()=>{

    const getUsers = async ()=>{
    
      const data = await getDocs(userRef)
      setUsersInfo (data.docs.map(function (item){
        if(item.data().id == currentUser.uid){
          setUserInfo({...item.data(),adress:item._key.path.segments[6]},)
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
          setFollowerss(function(prev){return [...prev,item.data()]})
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
      setget(get+1)
      setFollows(follows.filter(function(item){
        return item != undefined
      }))
      setSwitchBtn(!switchBtn)
    }

  

    const unfollowing=  function(id,data){
      
      return async function k (){
        setUserInfo({...userInfo,follows:userInfo.follows.filter(function(item){return item !=id})})
  
       
        
       let a=  data.filter(function(item){
          return item != currentUser.uid
        })

        let b = userInfo.follows.filter(function(item){
          console.log(item)
          return item!=id
        })
       
        console.log(id)
         const userdoc =doc(firebase,"users",id)
         const currentuserdoc = doc(firebase,"users",userInfo.adress)
         
          await updateDoc(userdoc,{followers:[...a]})
          await updateDoc(currentuserdoc, {follows:[...b]})
      }
    }

   
const getinc = function (){
  setget(get+1)
}
   
console.log(usersInfo)
 

  
  return (
    <div className="blok">
      <List ref={ref}  className={clicked === false ? 'mainlist' : 'mainlist2'} sx={{ marginTop: '10px' }}>
        <Typography
          sx={{
            marginLeft: '80px',
            position: 'absolute',
            color: 'rgb(0, 94, 244);',
          }}
        >
          <span className='list' role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0}> {switchBtn===false?<span className='txt'>My Followers</span>:<span className='txt'>My Follows</span>} </span>
        </Typography>
        <span ><PeopleOutlineIcon sx={{ marginLeft: '30px', marginTop: '0px', color: 'white' }} /></span>
        <Divider sx={{ marginLeft: '-20px' }} variant="inset" component="li" />
       
            {switchBtn === false? followerss.map(function(item,index){
              
              return(
<ListItem alignItems="flex-start" className="people" key={index}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Link to={`user-profile/${item.id}`} onClick={getinc} className="navlink">
                      <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                      {item.firstName}
                      </Typography>
                      </Link>
                    )}
                    secondary={(
                      <Link to={`user-profile/${item.id}`} onClick={getinc} className="navlink">
                      <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                        {item.lastName}
                      </Typography>
                      </Link>
                    )}
                  />
                  <span className="btn" >
                    <SmsIcon />
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
                      <Link to={`user-profile/${item.id}`} onClick={getinc} className="navlink">
                      <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>
                      {item?item.firstName:""}
                      </Typography>
                      </Link>
                    )}
                    secondary={(
                      <Link to={`user-profile/${item.id}`} onClick={getinc} className="navlink">
                      <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
                        {item?item.lastName:"e"}
                      </Typography>
                      </Link>
                    )}
                  />
                  <span className="btn" onClick={item?unfollowing(item.adress, item.followers):null}>
                    <PersonOffIcon className='delete' />
                  </span>
                </ListItem>
              )
                    }
                    
            })}
           
          
          
   
        

       
        
        <span className="close" role="button" onClick={clicking} onKeyDown={clicking} tabIndex={0}><Button variant="contained" color="error" size="small">X</Button></span>
        <Switch onClick={folowsload}/>
      </List>

    </div>
  );
}
export default MainUserFriendList;
