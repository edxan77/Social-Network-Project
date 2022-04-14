import Square from "./Square";
import { useRef, useState } from "react";
import './Board.css';


function Board(){

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState(true);
    const playerStatusRef = useRef('');
 

    function handleSquareClick(i){
        if(checkWinner(squares) || squares[i]){
            return;
        }

        squares[i] = player  ? 'X' : 'O' ;
        setSquares(squares);
        setPlayer(!player)

    }
    function handleRestartBtn(){
        if(winner === 'O'){
            setPlayer(!player)
        }else{
            setPlayer(!player)
        }
        if(!winner){

            setPlayer(prev => !prev)
        }
        setSquares(Array(9).fill(''));
    }
    
    const winner = checkWinner(squares);

        if(winner){
            console.log(winner)
            playerStatusRef.current = `Winner is player ${winner}`
        }else{
            playerStatusRef.current=  `Player ${player ? 'X' : 'O'}`
        }

        if(squares.every(el=> el !== '' && !winner) ){
            playerStatusRef.current = `It's draw`;
        }
        
    function checkWinner(squares){
        const winCoditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (let i=0; i< winCoditions.length; i++) {
            let [firstIdx, secondIdx, thirdIdx] = winCoditions[i];
            if (squares[firstIdx] && squares[firstIdx] === squares[secondIdx] && squares[firstIdx] === squares[thirdIdx]) {

                return squares[firstIdx];

            }
        }
    }

    return(
        <>
            <h1>TIC TAC TOE</h1>
            <div className="cont">
                <div className="squares">
                
                    {
                        squares.map((square, i)=>{
    
                            return(        
        
                                <Square key={i}  handleSquareClick={()=>handleSquareClick(i)} value={square}/>
                            
                            )
                        })
                    }
                
                </div>

            </div>
            <h2>{playerStatusRef.current}</h2>
            <button className="restart" onClick={handleRestartBtn}>restart</button>
        </>
    )
}

export default Board;