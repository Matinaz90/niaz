import { useState, useEffect, useRef, useMemo } from 'react';
import'./rightBar.css'

export function rightBarConfig(){
    const bar = document.getElementById('rightBar');
    bar.classList.toggle('open');

    const mainImage = document.getElementById('gradient-border');
    mainImage.classList.toggle('open');

    const products_cointainer = document.getElementById('products_cointainer');
    products_cointainer.classList.toggle('open');
}

function Right_bar(){

    return(
        <div id='rightBar' className='right_bar'>

        </div>
    )

}

export default Right_bar