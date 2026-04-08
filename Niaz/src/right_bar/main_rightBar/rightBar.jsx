import { useEffect, useState } from 'react'
import  '../main_rightBar/global_rightBar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext';


function RightBar(){
    const navigate = useNavigate();
    const location = useLocation();

    const PagesV = ['C', 'M', 'I'];
    const PagesC = ['J', 'A', 'V', 'R', 'S', 'Q', 'G', 'Z'];
    const Pages = ['home', 'car'];

    const { OpenRightVal ,setOpenRightVal } = useGlobal();



    useEffect(() => {
        const handleKeyUp = (e) => {
            if (OpenRightVal && e.key === 'Escape') {
                if(location){
                    if(Pages.some(item => location.includes(item))){
                        if(PagesC.some(item => location.includes(item))){

                        } else if(PagesV.some(item => location.includes(item))){

                        }

                    }
                }
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'open' : ''}`} onClick={() => {setOpenRightVal(false), setWhichDivOpen(''), setWhichDivOpenInner('')}}>
                <div className='exitButtonDiv'><p className='exitButtontext'>×</p></div>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`} onClick={(e) => {e.stopPropagation(),setWhichDivOpen('')}}>
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