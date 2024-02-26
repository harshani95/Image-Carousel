import {useEffect, useState} from "react";
import './App.css'
import { data } from './data'

function App() {

  const [activeImage,setActiveImage] = useState(0);

  const handlePrev = () => {
    if(activeImage <= 0){
      setActiveImage(data.length -1)
    }else{
      setActiveImage(activeImage -1)
    }
  }


  useEffect(()=> {
    let timer = setTimeout(() => {
      handleNext();
    },3000);

    return () => {
      clearTimeout(timer);
    }
  },[activeImage])


  const handleNext = () => {
    setActiveImage ((activeImage + 1) %  data.length)
  }


  return (
    <>
      <div className="carousel">
        <button className="btnprev" onClick={handlePrev}>Previous</button>
        {
          data.map((item, i) => {
            return(
              <img className={activeImage === i ? "img" : "hide"} src={item.url} alt={item.alt} key={item.id}/>
            )
          })
        }
        <button className="btnnext" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default App
