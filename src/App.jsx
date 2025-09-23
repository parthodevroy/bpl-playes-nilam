import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Component/Players/Navber'
import PlayersCart from '../PlayersCart'
import Selectedp from './Component/Selectedplayes/Selected/Selectedp'
import Player from './Component/Players/Player'


const playerfetch=async()=>{
  const res= await fetch("/playes.json")
  return res.json()
}

const playersdata=playerfetch()


function App() {
 
  const [toggle, setToggle]=useState(true)

  const [availablebalance,setAvailablebalance]=useState(50000000)
  const [selectedplayers,setSelectedplayers]=useState([])
  const remuve=(p)=>{
   const filterdata=selectedplayers.filter(ply=>ply.name!==p.name)
    console.log(filterdata);
    setSelectedplayers(filterdata)
    
    

  }
  
  

  return (
    <>
      
      <h1 className='text-center'>All Playes</h1>
     <Navber availablebalance={availablebalance}></Navber>

     <div className='max-w-[1200px] m-auto flex justify-between pt-3'>
      <h2>Available Players</h2>

      <div className='flex space-x-3'> 
        <button onClick={()=>setToggle(true)} className={`btn ${toggle===true?"bg-amber-300":""}`}>available</button>
        <button onClick={()=>setToggle(false)} className={`btn ${toggle===false?"bg-amber-300":""}`}>selected{Player.length}</button>
      </div>
     </div>

     {
      toggle===true?<Suspense fallback={'playes loading....'}>
<PlayersCart selectedplayers={selectedplayers} setSelectedplayers={setSelectedplayers} availablebalance={availablebalance} setAvailablebalance={setAvailablebalance} playersdata={playersdata}></PlayersCart>
</Suspense>:<Selectedp remuve={remuve} selectedplayers={selectedplayers}></Selectedp>
     }

     

     
    </>
  )
}

export default App
