import React, { useState ,useContext} from 'react';
import { Questions } from './Questions';
import { GameStateContext } from '../App';

const Endscreen = () => {
  const { score, setscore, setgame } = useContext(
    GameStateContext
  );

  const requiz=()=>{
    setscore(0);
    setgame("menu")
  }

  return (
    <>
    <div className="EndScreen">
      <h1>
        Quiz Finished
      </h1>
      <h2>{score}/{Questions.length}</h2>
      <button onClick={requiz}
      >Restart Quiz</button>
    </div>
    </>
  )
}

export default Endscreen