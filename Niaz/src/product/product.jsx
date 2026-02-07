import './product.css'
import { useState, useEffect, useRef, useMemo } from 'react';

function Product(){

    return (
    <>
        <div id='product-card' className="product-card ">
        <img src="/product/asus.png" alt="عکس نیاز" className="product-image" />
        <h3 className="product-title">نیاز به لپتاب ایسوس</h3>
        <div className="product-info">
            <span className="product-price">225 میلیون تومان</span>
            <span className="product-date"><p>روز پیش</p> 3 </span>
        </div>
        </div>
        <div id='product-card' className="product-card ">
        <img src="/product/soren.png" alt="عکس نیاز" className="product-image" />
        <h3 className="product-title">نیاز به سمند سورن</h3>
        <div className="product-info">
            <span className="product-price">1.5 میلیون تومان</span>
            <span className="product-date"><p>روز پیش</p> 1 </span>
        </div>
        </div>
        <div id='product-card' className="product-card ">
        <img src="/Untitled-1.png" alt="عکس نیاز" className="product-image" />
        <h3 className="product-title">cb1300 نیاز به </h3>
        <div className="product-info">
            <span className="product-price">1 ملیارد تومان</span>
            <span className="product-date"><p>روز پیش</p> 1 </span>
        </div>
        </div>
        <div id='product-card' className="product-card ">
        <img src="/product/5090.png" alt="عکس نیاز" className="product-image" />
        <h3 className="product-title">rtx 5090 نیاز به</h3>
        <div className="product-info">
            <span className="product-price">750 میلیون تومان</span>
            <span className="product-date"><p>روز پیش</p> ۶ </span>
        </div>
        </div>
        <div id='product-card' className="product-card ">
        <img src="/product/mouse.png" alt="عکس نیاز" className="product-image" />
        <h3 className="product-title">Basilisk V3 Pro نیاز به</h3>
        <div className="product-info">
            <span className="product-price">۸ میلیون تومان</span>
            <span className="product-date"><p>روز پیش</p> ۲ </span>
        </div>
        </div>
        <div id='product-card' className="product-card ">
        <img src="/product/porshe.png" alt="عکس نیاز" className="product-image" />
        <h3 className="product-title">porshe 911 gt3 نیاز به </h3>
        <div className="product-info">
            <span className="product-price">30 ملیارد تومان</span>
            <span className="product-date"><p>روز پیش</p> ۴ </span>
        </div>
        </div>
    </>
    )
}

export default Product