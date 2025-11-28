import './top_bar.css'
import CityDropdown from './4_city_dropdown'
import { useGlobal } from "../GlobalContext";


function Top_bar_right(){
    const { openRightBar, setopenRightBar } = useGlobal();

    return(
        <div className='top_rightbar_countaner'>

        <CityDropdown></CityDropdown>

        <img
        id="hamburgurMenu"
        className="hamburgurImage"
        src="/hamburger-menu-light.png"
        onClick={() => setopenRightBar(true)}
        />
        </div>
    )
}

export default Top_bar_right