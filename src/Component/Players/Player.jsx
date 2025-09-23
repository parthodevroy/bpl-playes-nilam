import { useState } from "react";

const Player = ({player,setAvailablebalance,availablebalance,setSelectedplayers,selectedplayers}) => {

   
    

    const [isselected,setIsselected]=useState(false)

    const balancehandel=()=>{

        if(availablebalance<player.price){
            alert("insuficient balance")
            return
        }
        setIsselected(true)
     parseInt(setAvailablebalance(availablebalance-player.price))

    setSelectedplayers([...selectedplayers, player])
    }

   
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={player.img}
      alt="Shoes" className="h-[200px] w-[400px] object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title flex">
        
        <span>{player.name}</span>

    </h2>
    <div className="flex justify-between">
        <h3>{player.country}</h3>
        <h3>all rounder</h3>
    </div>
    <div className="flex justify-between">
        <h2>Rating</h2>
        <h2>{player.rating}</h2>
    </div>
    <div className="flex justify-between">
        <h2>{player.battingStyle}</h2>
        <h2>{player.bowlingStyle}</h2>
    </div>
    <div className="card-actions flex justify-between">
        <h2>${player.price}</h2>
      <button disabled={isselected} onClick={balancehandel}
       className="btn ">
        {isselected===true?"selected":"choose player"} </button>
        </div>
  </div>
</div>
        
        </div>
    );
};

export default Player;