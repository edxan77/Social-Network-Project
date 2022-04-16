function Card({item, id, handleClick}){
   const itemClass = item.stat ? " active " + item.state : "" ;

   return (
      <div className={"card" + itemClass} onClick={() => handleClick(id)}>
         <img src={item.img} alt="" />
      </div>
   )
}

export default Card