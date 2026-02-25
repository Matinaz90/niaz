import { useState } from 'react'
import  '../main_rightBar/global_rightBar.css'
import { useNavigate } from 'react-router-dom';


function RightBar(){
    const navigate = useNavigate();

    const [OpenRightVal, setOpenRightVal] = useState(true)

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'open' : ''}`}>
                <div className='exitButtonDiv'><p className='exitButtontext'>×</p></div>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`}>
                    <div className='buttons' onClick={() => navigate('/home')}><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                    <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                    <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                    <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                    <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                </div>
            </div>  
        </>
    )

}

export default RightBar