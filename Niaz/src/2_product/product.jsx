import './product.css'
import { useState, useEffect, useRef, useMemo } from 'react';

function Product(){

    return (
    <div id='product-card' className="product-card ">
    <img src="../../Untitled-1.png" alt="عکس نیاز" className="product-image" />
    <h3 className="product-title">نیاز به سمند سورن</h3>
    <div className="product-info">
        <span className="product-price">750 میلیون تومان</span>
        <span className="product-date"><p>روز پیش</p> 1 </span>
    </div>
    </div>
    )
}

export default Product