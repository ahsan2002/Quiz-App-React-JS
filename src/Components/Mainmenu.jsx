import React, { useContext } from 'react';
import { GameStateContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Mainmenu = () => {
  const { game, setgame, myname, setmyname } = useContext(GameStateContext);

  const stquiz = () => {
    toast.success('Quiz Started!', {
      icon: "⌚",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  }

  return (
    <>
      <div className="Menu">
        <input type="text" placeholder='Enter your Name' onChange={(e) => {
          setmyname(e.target.value)
        }} />
        <button onClick={
          () => {
            // setgame("quiz");
            stquiz();
          }

          }>Start Quiz</button>
      </div>
      <ToastContainer />
    </>
  )
}

export default Mainmenu;