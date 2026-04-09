import { useEffect, useState } from 'react'
import  '../main_rightBar/global_rightBar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext';


function RightBar(){
    const navigate = useNavigate();

    const { OpenRightVal ,setOpenRightVal, setmodeRightBar } = useGlobal();
    
    const pathUpper = useLocation();
    const path = pathUpper.pathname;


    useEffect(() => {
        let timeoutId = null;

        const handleKeyUp = (e) => {
            if (e.key === 'Escape') {
                setOpenRightVal(false)
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                }, 100);
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'open' : ''}`} onClick={() => {setOpenRightVal(false)}}>
                <div className='exitButtonDiv'><p className='exitButtontext'>×</p></div>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`} onClick={(e) => {e.stopPropagation()}}>
                    <div>
                        <div className='buttons' onClick={() => navigate('/home')}><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                        <div className='buttons' onClick={() => navigate('/car')}><img src='/extend_arrow.png' className='rightArrow'></img> وسایل نقلیه </div>
                    </div>
                </div>
            </div>  
        </>
    )

}

export default RightBar