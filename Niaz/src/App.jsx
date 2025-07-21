import { useState, useEffect } from "react";
import './App.css'
import Top_bar_left from './1_topbar/1_top_bar_left'
import Top_bar_middle from './1_topbar/2_top_bar_middle'
import Top_bar_right from './1_topbar/3_top_bar_right'
import SlideModeChanger from './1_topbar/2.5_slideModeChanger'

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
      const resize = () => {
      setWidth(window.innerWidth);
      };

      window.addEventListener("resize", resize);
      return () => {
      window.removeEventListener("resize", resize);
      };
  }, []);

  return (
    <>
    <div className='tobbar_countainer'   style={{
      gridTemplateColumns: `340px 1fr ${width * 0.3 + 42}px 100px 1fr 150px`
    }}>
        <Top_bar_left></Top_bar_left><div></div><Top_bar_middle></Top_bar_middle><SlideModeChanger></SlideModeChanger><div></div><Top_bar_right></Top_bar_right>
        </div>

      <div></div>
      
      <div></div>
    </>
  )
}

export default App
