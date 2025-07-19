import './top_bar.css'
import CityDropdown from './4_city_dropdown'

function Top_bar_right(){



    return(
        <div className='top_rightbar_countaner'>

        <CityDropdown></CityDropdown>

            <img className='hamburgurImage' src='../../hamburger-menu-light.png' />
        </div>
    )
}

export default Top_bar_right