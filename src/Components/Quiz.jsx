import React, { useState ,useContext} from 'react';
import { Questions } from './Questions';
import { GameStateContext } from '../App';


const Quiz = () => {
  const{setgame,score,setscore,myname}=useContext(GameStateContext);
  const [que, setque] = useState(0);
  const [option, setoption] = useState("");

  const nextque=()=>{
          if(Questions[que].asnwer == option){
            setscore(score+1);
          }
          setque(que+1)
  }

  const finishquiz=()=>{
    if(Questions[que].asnwer == option){
      setscore(score+1);
    }
    setgame("endscreen")
  }

  return (
    <>
      <div className="Quiz">
        <h3>Hi,<span style={{color:"black",fontWeight:"bolder"}}>{myname}</span></h3>
        <h1>{Questions[que].prompt}</h1>
        <div className="options">

          <button className={`opbtn`} onClick={() => {
            setoption("A")
            
          }}
          >{Questions[que].optionA}</button>

          <button className={`opbtn`} onClick={() => {
            setoption("B")
          }}>{Questions[que].optionB}</button>

          <button className={`opbtn`} onClick={() => {
            setoption("C")
          }}>{Questions[que].optionC}</button>

          <button className={`opbtn`} onClick={() => {
            setoption("D")
          }}>{Questions[que].optionD}</button>

        </div>
        {
          que == Questions.length -1 ? <button className='mybtn' onClick={finishquiz}>Finish Quiz</button> :
        <button className='mybtn' onClick={nextque}>Next Question</button>
        }
      </div>
    </>
  )
}

export default Quiz;