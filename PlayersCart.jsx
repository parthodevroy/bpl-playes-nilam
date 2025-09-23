import { use } from "react";
import Player from "./src/Component/Players/Player";


const PlayersCart = ({playersdata,setAvailablebalance,availablebalance,setSelectedplayers,selectedplayers}) => {


    const players=use(playersdata)
    
    return (


        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] m-auto p-4 gap-2"> 
            {
            players.map((player=>
                <Player selectedplayers={selectedplayers}setSelectedplayers={setSelectedplayers} availablebalance={availablebalance} setAvailablebalance={setAvailablebalance} player={player}></Player>))
        
            }






        
        </div>
    );
};

export default PlayersCart;