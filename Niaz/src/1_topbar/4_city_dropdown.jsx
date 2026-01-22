import { useState, useEffect, useRef, useMemo } from 'react';
import './top_bar.css';
import { useGlobal } from "../GlobalContext";

function CityDropdown() {
    
    const [cityVal, setcityVal] = useState([]);
    const [ButtonCityVal, setButtonCityVal] = useState([]);
    const { OpenCity, setOpenCity } = useGlobal();
    const isMounted = useRef(false);
    
    const locations = {
        "همدان": ["همه ی شهرهای همدان", "ملایر", "نهاوند", "لالجین", "تویسرکان", "سرکان", "اسد آباد", "کبودرآهنگ", "فرسفج", "سامن"],
        "قزوین": ["همه ی شهرهای قزوین", "ابگرم قزوین", "تاکستان", "بوئین زهرا"],
        "گرگان": ["همه ی شهرهای گرگان", "بندرترکمن", "کلاله", "علی آباد کتول", "گنبد کاووس", "رامیان", "مینودشت", "گالیکش", "آزادشهر", "مرواه تپه", "کردکوی"],
        "شیراز": ["همه ی شهرهای شیراز", "جهرم", "سپیدان", "لار", "فسا", "ارسنجان", "مرودشت", "سروستان", "اقلید", "داراب", "قیر", "کازرون", "استهبان", "آباده", "فیروزکوه", "نی ریز", "خنج", "گراش", "کوار", "مهر", "سوریان", "اواز", "جویم"],
        "اهواز": ["همه ی شهرهای اهواز", "شوشتر", "آبادان", "ایذه", "دزفول", "مسجد سلیمان", "بندر ماهشهر", "بهبهان", "خرمشهر", "اندیمشک", "رامهرمز", "بنر امام خمینی", "قیدار", "قلعه تل", "هنیجان", "شادگان", "دهدز", "شوش", "جزیره بونه", "جزیره دارا", "لالی", "هویزه", "امیدیه", "بیشه بزان", "بندراروند کنار", "پادگان دوکوهه"],
        "مشهد": ["همه ی شهرهای مشهد", "سبزوار", "نیشابور", "اخلمد", "اسفدن", "کنگ", "قوچان", "چناران", "شیروان", "شاندیز", "تربت حیدریه", "تربت جام", "قدمگاه", "توس", "رشتخوار", "سرخس", "گناباد", "کاشمر", "بجستان", "خواف", "قاین", "کلات نادری", "فریمان", "طرقبه", "مشهد ریزه", "نشتیفان", "بردستان", "باخرز", "درگز", "بردسکن", "خرگرد", "تایباد"],
        "شهرکرد": ["همه ی شهرهای شهرکرد", "بن", "اردل", "لردگان", "بروجن", "کوهرنگ", "فارسان", "هفشجان", "سامان"],
        "یزد": ["همه ی شهرهای یزد", "بافق", "اردکان", "میبد", "تفت", "مهریز", "ابرکوه", "رضوانشهر", "خرانق", "ندوشن", "اشکذر"],
        "سمنان": ["همه ی شهرهای سمنان", "دامغان", "میامی", "شاهرود", "سرخه", "گرمسار", "مهدی شهر", "شهمیرزاد", "بسطام", "قلعه نوخرقان"],
        "بجنورد": ["همه ی شهرهای بجنورد", "جاجرم", "گرمه", "اسفراین", "فاروج", "اسپاخو", "صفی آباد", "آشخانه", "شوقان"],
        "زنجان": ["همه ی شهرهای زنجان", "طارم", "خرم دره", "سلطانیه", "اب بر", "خدابنده", "ماهنشان", "زرین رود", "زرین آباد", "ابهر"],
        "زاهدان": ["همه ی شهرهای زاهدان", "چابهار", "خاش", "ایرانشهر", "زابل", "کنارک", "زهک", "میرجاوه", "سراوان", "نیک شهر", "بمپور", "بزمان", "سرباز"],
        "کرمان": ["همه ی شهرهای کرمان", "بم", "راین", "رفسنجان", "میمند", "سیرجان", "ماهان", "فهرج", "کوهبنان", "کهنوج", "جوپار", "منوجان", "راور", "انار", "بردسیر", "شهر بابک", "جیرفت"],
        "یاسوج": ["همه ی شهرهای یاسوج", "چرام", "سی سخت", "باشت", "گچساران", "لیکک", "دیشموک", "دهدشت", "پاتاوه"],
        "بوشهر": ["همه ی شهرهای بوشهر", "برازجان", "عسلویه", "خارک", "بندر سیراف", "سعدآباد", "گناوه", "سجادیه", "جزیره عباسک", "خورموج", "جزیره چراغی", "دلوار", "جزیره تهمادو", "اهرم"],
        "تهران": ["همه ی شهرهای تهران", "ورامین", "لواسان", "دماوند", "فیروزکوه", "اسلامشهر", "سولقان", "دربندسر", "رباط کریم", "رودبار قصران"],
        "کرج": ["همه ی شهرهای کرج", "طالقان", "هشتگرد", "کردان", "نظرآباد", "شهرستانک"],
        "سرعین": ["همه ی شهرهای سرعین", "اردبیل", "مشگین شهر", "خلخال", "نیر", "پارس آباد", "گرمی", "عنبران", "رضی", "نمین", "بیله سوار"],
        "اصفهان": ["همه ی شهرهای اصفهان", "کاشان", "گلپایگان", "نائین", "خوانسار", "ابیانه", "شهرضا", "خور و بیابانک", "مبارکه", "سمیرم", "خمینی شهر", "خور", "شاهین شهر", "آران و بیدگل", "فریدون شهر", "اردستان", "نطنز", "زواره", "بیاضه", "نجف آباد", "میمه", "ورزنه", "زرین شهر"],
        "بندرانزلی": ["همه ی شهرهای بندرانزلی", "رشت", "منجیل", "لاهیجان", "تالش", "رودبار", "لنگرود", "املش", "آستارا", "اسالم", "رودسر", "ماسال", "چابکسر", "فومن", "آستانه اشرفیه", "ماسوله", "لوندویل", "بره سر", "صومعه سرا", "کیاشهر", "شفت", "لوشان", "سیاهکل", "دیلمان", "داماش", "پره سر"],
        "نوشهر": ["همه ی شهرهای نوشهر", "رامسر", "تنکابن", "چالوس", "قائمشهر", "مرزن آباد", "نمک آبرود", "محمودآباد", "بابلسر", "کلاردشت", "نور", "ساری", "سوادکوه", "کتالم", "بابل", "آمل", "سلمان شهر", "عباس آباد", "بهشهر", "لاریجان", "فریدون کنار", "بلده", "گلوگاه", "الاشت", "شیرگاه", "سیاه بیشه", "ایزدشهر", "پل سفید", "جنت رودبار", "رستمکلا"],
        "ایلام": ["همه ی شهرهای ایلام", "چرداول", "دهلران", "سراب کلان", "سیروان", "دره شهر", "مهران", "آبدانان", "ایوان"],
        "ارومیه": ["همه ی شهرهای ارومیه", "خوی", "پیرانشهر", "مهاباد", "سلماس", "تکاب", "بوکان", "ماکو", "میاندوآب", "سیه چشمه", "سردشت"],
        "بیرجند": ["همه ی شهرهای بیرجند", "فردوس", "طبس", "نهبندان", "درمیان", "اسدیه", "سربیشه", "بشرویه", "سرایان", "خوسف", "چنسف", "خضری دشت بیاض"],
        "اراک": ["همه ی شهرهای اراک", "محلات", "ساوه", "دلیجان", "تفرش", "خمین", "شازند", "نراق", "گورچان"],
        "بانه": ["همه ی شهرهای بانه", "دیواندره", "مریوان", "کامیاران", "سقز", "اورامان", "سنندج", "قروه", "بیجار"],
        "کیش": ["همه ی شهرهای کیش", "قشم", "میناب", "جزیره هرمز", "بندرعباس", "بندر لنگه", "جزیره هنگام", "جزیره ابوموسی", "جزیره شیدور", "بستک", "بندر دیلم", "بندر کنگ", "حاجی آباد"],
        "کرمانشاه": ["همه ی شهرهای کرمانشاه", "بیستون", "پاوه", "سرپل ذهاب", "کنگاور", "جوانرود", "سنقر", "قصر شیرین", "گیلانغرب", "کرند غرب", "کل کل", "صحنه", "اسلام آباد غرب", "کوزران", "دالاهو", "هرسین", "روانسر"],
        "خرم آباد": ["همه ی شهرهای خرم آباد", "پل دختر", "الیگودرز", "ازنا", "بروجرد", "درود", "کوهدشت"],
        "تبریز": ["همه ی شهرهای تبریز", "جلفا", "مرند", "لیقوان", "لیلان", "کلیبر", "بناب", "مراغه", "سراب", "عجب شیر", "اسکو", "شبستر", "کندوان", "سردرود", "میانه", "ورزقان", "هشترود", "اهر", "نقده", "بستان آباد"],
        "قم": ["همه ی شهرهای قم", "سلفچگان", "کهک"]
    };

    useEffect(() => {

        if(!OpenCity){

            localStorage.setItem("cityval", JSON.stringify(cityVal))

            document.getElementById('cityDropdown').style.display = "none"
        } else if (OpenCity) {

            const storedCity = localStorage.getItem("cityval")
            
            setcityVal(storedCity ? JSON.parse(storedCity) : []);

            document.querySelectorAll(`.cityOuterCityDiv`).forEach(el => {
                el.style.display = "none";
            });
            setButtonCityVal([])

            document.querySelectorAll(`.cityInnerCityDiv`).forEach(el => {
                el.style.display = "grid";
            });

            const ALLCityVals = cityVal.filter(item => item.includes("همه ی شهرهای"));

            ALLCityVals.forEach(item => {
                const cityKey = item.replace('همه ی شهرهای ', '');
                document.querySelectorAll(`.${cityKey}`).forEach(el => {
                    el.style.display = "none";
                })
            })

            document.getElementById('cityDropdown').style.display = "grid"
        }

    }, [OpenCity])

    const OpenInnerCity = (city) => {
        if(ButtonCityVal.includes(city)){
            document.querySelectorAll(`.${city}2`).forEach(el => {
                el.style.display = "none";
            });
            const updated = ButtonCityVal.filter(item => item !== city) 
            setButtonCityVal(updated);
            return
        }

        document.querySelectorAll(`.${city}2`).forEach(el => {
            el.style.display = "flex";
        });

        const updated = [...ButtonCityVal, city];
        setButtonCityVal(updated);
    }
    
    const localHostUpdate = (val, city) => {
        const InnerCityDev = document.getElementById('InnerCity');
        if(val.includes('همه ی شهرهای')){
            if(cityVal.includes(val)){
                const updated = cityVal.filter(item => item != val);

                InnerCityDev.style.display = 'grid'
                setcityVal(updated);
                return
            }
   
            const updated = cityVal.filter(item => !locations[city].includes(item)); 
            const updated2 = [...updated,  val];

            InnerCityDev.style.display = 'none'
            
            setcityVal(updated2);
            return
        }

        if(cityVal.includes(val)){
            const updated = cityVal.filter(item => item !== val);
            setcityVal(updated);
            return
        }

        const updated = [...cityVal, val];

        setcityVal(updated);
    }

    const saveCity = () => {
        let allInvalidItems = [];
        const hasAllCities = cityVal.some(item => item.includes("همه ی شهرهای"));
        if(hasAllCities){
            const ALLCityVals = cityVal.filter(item => item.includes("همه ی شهرهای"));
            ALLCityVals.forEach(item => {
                const cityKey = item.replace('همه ی شهرهای ', '');
                const invalidVal = locations[cityKey].slice(1);
                allInvalidItems = [...allInvalidItems , ...invalidVal]
            })

            const updated = cityVal.filter(item => !allInvalidItems.includes(item));

            setcityVal(updated)
        }

        setOpenCity(false)
    }

    const cancleButton = () => {
        setOpenCity(false)
    }

    return(
        <>
            <h2 id="city_button" className="city_button" onClick={() =>{setOpenCity(true)}}>منطقه</h2>
            <div className='cityDropdown' id='cityDropdown'>
                <div className='cityDropdownTwo' id='cityDropdownTwo'>
                    {Object.keys(locations).map(city => (
                        <div className='cityOnButtonDiv' key={city}>
                            <button className='cityInnerButton' onClick={() => OpenInnerCity(city)} key={city}>
                                {city}
                            </button>

                            <div className={`cityOuterCityDiv ${city}2`}>
                                

                                <div className={`cityUpperCityDiv`}>
                                    <div
                                        className={`cityInnerCityDiv AllCity${city}`}
                                        onClick={() => localHostUpdate(`همه ی شهرهای ${city}`, city)}
                                    >
                                        <div >
                                            {`همه ی شهرهای ${city}`}
                                            <input key={`همه ی شهرهای ${city}`} id={`همه ی شهرهای ${city}`} checked={cityVal.includes(`همه ی شهرهای ${city}`)} readOnly  className='cheackBoxCity' type='checkbox'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className={`cityUpperCityDiv`} id='InnerCity'>
                                    {locations[city].slice(1).map(innerCity => (
                                        <div
                                        className={`cityInnerCityDiv ${city}`}
                                        key={innerCity}
                                        onClick={() => localHostUpdate(innerCity, city)}
                                        >
                                            <div >
                                                {innerCity}
                                                <input key={innerCity} id={innerCity} checked={cityVal.includes(innerCity)} readOnly  className='cheackBoxCity' type='checkbox'></input>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        
                    </div>
                    ))}
                </div>
                    <button className='city_cancellation' onClick={() => cancleButton()}>لغو</button>
                    <button className='city_conform' onClick={() => saveCity()}>تایید</button>
            </div>

        <div id="blur_rightBarOpen-city" className='blur_rightBarOpen'></div>
        </>
    );
}
  
export default CityDropdown;
