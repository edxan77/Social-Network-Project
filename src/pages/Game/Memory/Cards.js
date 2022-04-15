import { useState } from 'react';
import Card from './Card';
import './Car.css';

function Cards(){
const [items, setItems] = useState([
   { id:1, img: '/imgs/html.png', stat: "" },
   { id:1, img: '/imgs/html.png', stat: "" },
   { id:2, img: '/imgs/css.png', stat: "" },
   { id:2, img: '/imgs/css.png', stat: "" },
   { id:3, img: '/imgs/js.png', stat: "" },
   { id:3, img: '/imgs/js.png', stat: "" },
   { id:4, img: '/imgs/scss.png', stat: "" },
   { id:4, img: '/imgs/scss.png', stat: "" },
   { id:5, img: '/imgs/react.png', stat: "" },
   { id:5, img: '/imgs/react.png', stat: "" },
   { id:6, img: '/imgs/vue.png', stat: "" },
   { id:6, img: '/imgs/vue.png', stat: "" },
   { id:7, img: '/imgs/angular.png', stat: "" },
   { id:7, img: '/imgs/angular.png', stat: "" },
   { id:8, img: '/imgs/nodejs.png', stat: "" },
   { id:8, img: '/imgs/nodejs.png', stat: "" },
].sort(() => Math.random() -0.5 ))

   const [prev, setPrev] = useState(-1)

   function check(current){
      if(items[current].id === items[prev].id){
         items[current].stat = "correct"
         items[prev].stat = "correct"
         setItems([...items])
         setPrev(-1)
      }else{
         items[current].stat = "wrong"
         items[prev].stat = "wrong"
         setItems([...items])
         setTimeout(() =>{
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
         }, 1000)
      }
   }

   function handleClick(id){
      if(prev === -1){
         items[id].stat = "active"
         setItems([...items])
         setPrev(id)
      }else{
         check(id)
      }
   }

   return (
      <>
       <h1 className="Memory">Memory</h1>
      <div className='conta'>
        
      <div className="container">
         
         { items.map((item, index) => (
            <Card key={index} item={item} id={index} handleClick={handleClick} />
         )) }
      </div> 
      </div>
      </>
   )
}

export default Cards