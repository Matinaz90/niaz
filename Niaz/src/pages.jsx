import Top_bar_left from './topbar/1_top_bar_left.jsx'
import Filter_chip_bar from "./topbar/1.5_filter-chip-bar.jsx";
import Top_bar_middle from './topbar/2_top_bar_middle.jsx'
import Top_bar_right from './topbar/3_top_bar_right.jsx'
import SlideModeChanger from './topbar/2.5_slideModeChanger.jsx'
import Product from "./product/product.jsx";
import HomeRightBar from "./right_bar/home_rightBar/home_right_bar.jsx"
import CarRightBar from "./right_bar/car_rightBar/car_right_bar.jsx"

function Home(props) {
  const checkRightBar = () => {
    if(props.rightBar == 1) {
      return <HomeRightBar></HomeRightBar>
    }
    if(props.rightBar == 2) {
      return <CarRightBar></CarRightBar>
    }
  }

  return (
    <>
      <div className='tobbar_countainer'>
      <Top_bar_left></Top_bar_left><div></div><Top_bar_middle></Top_bar_middle><SlideModeChanger></SlideModeChanger><div></div><Top_bar_right></Top_bar_right>
      </div>

      {checkRightBar()}

      <Filter_chip_bar></Filter_chip_bar>

      <div className='gradient-border' id="gradient-border"></div>

        <div className="content-box">
            <img src="/Untitled-1.png" className="image_mainPage"></img>
        </div>

      <div id="products_cointainer" className="products_cointainer">
      <Product></Product>
      </div>    
    </>
  ) 
}

export default Home
