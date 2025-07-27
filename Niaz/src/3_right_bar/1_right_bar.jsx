import { useState, useEffect, useRef, useMemo } from 'react';
import'./rightBar.css'


export function RightBarConfig() {
  const bar = document.getElementById('rightBar');
  const mainImage = document.getElementById('gradient-border');
  const products_container = document.getElementById('products_cointainer');

  const isOpen = bar?.classList.contains('open');

  if (!isOpen) {
    bar?.classList.add('open');
    mainImage?.classList.add('open');
    products_container?.classList.add('open');
    localStorage.setItem('rightBarOpen', 'true');
  } else {
    bar?.classList.remove('open');
    mainImage?.classList.remove('open');
    products_container?.classList.remove('open');
    localStorage.setItem('rightBarOpen', 'false');
  }
}

function Right_bar(){

    const isRightBarOpen = localStorage.getItem('rightBarOpen') === 'true';
    return(
        <div id='rightBar' className={`right_bar ${isRightBarOpen ? 'open' : ''}`}>

        </div>
    )

}

export default Right_bar