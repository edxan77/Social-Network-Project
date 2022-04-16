import './Square.css'

function Square({ value, handleSquareClick}){
    return(
        <>
            <div className='square'onClick={handleSquareClick} ><h3 className='player'>{value}</h3></div>
           
        </>
    )
}



export default Square;