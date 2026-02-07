import { useState } from 'react'
import  '../main_rightBar/global_rightBar.css'


function RightBar(){

    const [OpenRightVal, setOpenRightVal] = useState(true)

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'open' : ''}`}>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`}>
                    <div className='buttons'><img src='/right-arrow.svg' className='rightArrow'></img> خانه </div>
                    <div className='buttons'>خانه</div>
                    <div className='buttons'>خانه</div>
                    <div className='buttons'>خانه</div>
                </div>
            </div>  
        </>
    )

}

export default RightBar