import { useState, useEffect } from "react";
import '../App.css'
import Top_bar_left from '../1_topbar/1_top_bar_left.jsx'
import Filter_chip_bar from "../1_topbar/1.5_filter-chip-bar.jsx";
import Top_bar_middle from '../1_topbar/2_top_bar_middle.jsx'
import Top_bar_right from '../1_topbar/3_top_bar_right.jsx'
import SlideModeChanger from '../1_topbar/2.5_slideModeChanger.jsx'
import Product from "../2_product/product.jsx";
import Home_RightBar from "../3_right_bar/2_home_rightBar.jsx";

function Home() {
  const [width, setWidth] = useState(window.innerWidth)
  const isRightBarOpen = localStorage.getItem('rightBarOpen') === 'true';

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
        gridTemplateColumns: `250px 1fr ${width * 0.3 + 42}px 100px 1fr 150px`
        }}>
        <Top_bar_left></Top_bar_left><div></div><Top_bar_middle></Top_bar_middle><SlideModeChanger></SlideModeChanger><div></div><Top_bar_right></Top_bar_right>
        </div>

        <Home_RightBar></Home_RightBar>

        <Filter_chip_bar></Filter_chip_bar>

        <div className={`gradient-border ${isRightBarOpen ? 'open' : ''}`} id="gradient-border">
            <div className="content-box">
                <img src="/Untitled-1.png" className="image_mainPage"></img>
            </div>
        </div>

        {/* <div id="products_cointainer" className={`products_cointainer ${isRightBarOpen ? 'open' : ''}`}>
        <Product></Product><Product></Product><Product></Product><Product></Product><Product></Product>
        </div> */}
        
        <div></div>
    </>
  ) 
}

export default Home
