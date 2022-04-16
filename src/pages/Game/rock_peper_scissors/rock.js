import { useEffect, useState } from 'react';
import './rock.css';


const rock =  '/imgs/rock.jpg';
const paper = './imgs/paper_.jpg';
const scissors = './imgs/scissors_.jpg';


function Rock() {

    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerUserChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [show, setShow] = useState(true);
    const imgChoices = [rock, paper, scissors];
    
  
    function handleImgClick(imgSrc){
        setUserChoice(imgSrc);
        generateComputerChoices();
        
    }

    function generateComputerChoices(){
        const randomChoice = imgChoices[Math.floor(Math.random()*imgChoices.length)];
        setComputerUserChoice(randomChoice);
       
    }

    useEffect(()=>{
        results();
        setShow(false)
    }, [userChoice, computerChoice])


    function results(){
        const txt = userChoice+computerChoice;
        if(txt  === `${paper+rock}` || txt === `${rock+scissors}`
        || txt === `${scissors+paper}` ){
            return setResult('You Win');
        }
        if(txt === `${rock+paper}` || txt=== `${scissors+rock}` 
        || txt === `${paper+scissors}`){
          return setResult('You Lose');
        }
        if(txt === `${rock+rock}`|| txt === `${scissors+scissors}`
        || txt === `${paper+paper}` ){
          return setResult(`It's draw`);
        }
        console.log(userChoice, computerChoice);
    }

    return (
      <>
        <h1>Rock Paper Scissors</h1>

        <div className="Rock">

            {imgChoices.map((imgSrc, index)=> <img className='img' src={imgSrc} key={index} 
            onClick={()=> handleImgClick(imgSrc)} style={{ marginLeft:'20px'}} /> )}

        </div>

        <div className='box2'>
            <div className='first'>

              <h3>Your choice is  </h3>
              {show ?  <img className='img' /> : <img  src={userChoice} />}

            </div>

            <div className='second'>

              <h3>Computer choice is</h3>
              {show ? <img  className='img' src={computerChoice} /> : <img src={computerChoice} /> }

            </div>

        </div>

        <h2>{result}</h2>
      </>
    );
}

export default Rock;