import React, { useState,createContext,useContext } from 'react'
import Endscreen from './Components/Endscreen';
import Mainmenu from './Components/Mainmenu';
import Quiz from './Components/Quiz';
import './index.css';
const GameStateContext=createContext();

const App = () => {
  const [game, setgame] = useState("menu");
  const [score, setscore] = useState(0);
  const [myname, setmyname] = useState("");

  return (
    <div className="App">
      <h1>My Quiz App</h1>
      <GameStateContext.Provider value={{ game, setgame,score,setscore,myname,setmyname }}>
        {game === "menu" && <Mainmenu />}
        {game === "quiz" && <Quiz />}
        {game === "endscreen" && <Endscreen />}
      </GameStateContext.Provider>
    </div>
  )
}

export default App;
export {GameStateContext};