import React ,{useContext}from 'react';
import { GameStateContext } from '../App';


const Mainmenu = () => {
  const {game,setgame,myname,setmyname}=useContext(GameStateContext);
  return (
    <>
    <div className="Menu">
      <input type="text" placeholder='Enter your Name' onChange={(e)=>{
        setmyname(e.target.value)
      }} />
      <button onClick={()=>{
        setgame("quiz");
      }}>Start Quiz</button>
    </div>
    </>
  )
}

export default Mainmenu;