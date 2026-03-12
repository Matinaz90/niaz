import { useState, useEffect } from "react";
import './App.css'
import Top_bar_left from './topbar/1_top_bar_left.jsx'
import Filter_chip_bar from "./topbar/1.5_filter-chip-bar.jsx";
import Top_bar_middle from './topbar/2_top_bar_middle.jsx'
import Top_bar_right from './topbar/3_top_bar_right.jsx'
import SlideModeChanger from './topbar/2.5_slideModeChanger.jsx'
import Right_bar from './right_bar/main_rightBar/rightBar.jsx'
import Product from "./product/product.jsx";

function Main_page() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setWidth(window.innerWidth), 100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <form autoComplete="off">
        <div className='tobbar_countainer'>
        <Top_bar_left></Top_bar_left><div></div><Top_bar_middle></Top_bar_middle><SlideModeChanger></SlideModeChanger><div></div><Top_bar_right></Top_bar_right>
        </div>

        <Right_bar></Right_bar>

        <Filter_chip_bar></Filter_chip_bar>

        <div className='gradient-border' id="gradient-border">
        </div>

          <div className="content-box">
              <img src="/Untitled-1.png" className="image_mainPage"></img>
          </div>
        <div id="products_cointainer" className={`products_cointainer`}>
        <Product></Product>
        </div>
        
        <div></div>
      </form>
    </>
  ) 
}

export default Main_page
