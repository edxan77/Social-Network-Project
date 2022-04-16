import { Link, } from "react-router-dom";

import './Game.css'

function Game(){
    return(
      <div className="Container-Game">
      <div>
         <h3 >Memory</h3>
         <Link to="/Memory"><img src="/imgs/game-preview.png" className="Logo"/></Link>
      </div>
      <div>
          <h3>Tic tac toy</h3>
         <Link to="/TicTacToe"><img src="/imgs/tic-tac-toe.png" className="Logo"/></Link>
      </div>
      <div>
          <h3>Rock Peper Scissors</h3>
         <Link to="/Rock_Peper_Scissors"><img src="/imgs/rockpaperscissors.jpg" className="Logo"/></Link>
      </div>
  </div>
    )
}

export default Game;