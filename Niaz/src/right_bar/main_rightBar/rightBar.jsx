import { useEffect, useState } from 'react'
import  '../main_rightBar/global_rightBar.css'
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext';


function RightBar(){
    const navigate = useNavigate();

    const topBarPath = window.location.href

    const { OpenRightVal ,setOpenRightVal } = useGlobal();

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'opne' : ''}`} onClick={() => {setOpenRightVal(false), WhichDivOpen(false), WhichDivOpenInner(false)}}>
                <div className='exitButtonDiv'><p className='exitButtontext'>×</p></div>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`}>
                    <div>
                        <div className='buttons' onClick={() => navigate('/home')}><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                        <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                        <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                        <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                        <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                    </div>
                    <div>
                        <button className='applyButton backing' onClick={() => navigate('/')}>بازگشت</button>
                    </div>
                </div>
            </div>  
        </>
    )

}

export default RightBar