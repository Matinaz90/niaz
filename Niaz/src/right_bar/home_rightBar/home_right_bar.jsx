import { useState } from 'react'
import  './home_rightBar.css'
import  '../main_rightBar/global_rightBar.css'

function HomeRightBar(){

    const [OpenRightVal, setOpenRightVal] = useState(true)

    const metrage = () => {
        return(
            <>
                <dev >
                    <input className='Number_input_rightBar' type='number'></input>
                </dev>
            </>
        )
    }

    return(
        <>
            <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`}>

            </div>
        </>
    )

}

export default HomeRightBar