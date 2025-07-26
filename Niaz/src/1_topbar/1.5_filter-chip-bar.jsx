import { useState, useEffect, useRef, useMemo } from 'react';
import'./top_bar.css'

function Filter_chip_bar(){

const categories = [
    "گیمینگ",
    "مد مودینگ ماینکرفت",
    "اخبار",
    "توضیحات صوتی",
    "زنده",
    "برنامه‌نویسی کامپیوتر",
    "رایانه‌ها",
    "پی‌وی‌پی",
    "بازی‌های مستقل",
    "آپلودهای اخیر",
    "مشاهده‌شده‌ها",
    "جدید برای شما"
];



    return(

    <div className="category-bar">
        <button className="category selected">نیاز</button>
        {categories.map((label, index) => (
            <button key={index} className="category">{label}</button>
        ))}
    </div>

  );

}

export default Filter_chip_bar