import { useState } from 'react';
import './top_bar.css';

function CityDropdown() {
    
    const [cityVal, setcityVal] = useState([]);
    const [OpenCity, setOpenCity] = useState();
    const [openCities, setOpenCities] = useState([]);
    const [AllCityes, setAllCityes] = useState([]);
    
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

    const OpenCityFunc = () => {
        setOpenCity(true)

        const Cityes = localStorage.getItem('SelectedCityes');
        if (Cityes) {
            setcityVal(JSON.parse(Cityes));
        }
    }

    const OpenInnerCity = (city) => {
        setOpenCities(prev => 
            prev.includes(city) ? 
            prev.filter(c => c != city) :
            [...prev , city] 
        )
    }
    
    const localHostUpdate = (val, city) => {
        let MiddleUpdate = cityVal
        let AllCityUpdate = AllCityes
        let AllCityInners = []

        if (val.includes('همه ی شهرهای')){
            AllCityUpdate.includes(city) ? 
            AllCityUpdate = AllCityUpdate.filter(c => c != city) :
            AllCityUpdate = [...AllCityUpdate , city]

            MiddleUpdate.includes(val) ?
            MiddleUpdate = cityVal.filter(c => c != val) : 
            MiddleUpdate = [...cityVal, val]
            
            AllCityInners = verifyCitySelection(val , city)
            
            if(AllCityInners){
                MiddleUpdate = MiddleUpdate.filter(val2 => !AllCityInners.includes(val2))
            }
            setAllCityes(AllCityUpdate)
        } else {
            MiddleUpdate.includes(val) ?
            MiddleUpdate = MiddleUpdate.filter(c => c != val) : 
            MiddleUpdate = [...MiddleUpdate, val]
        }

        setcityVal(MiddleUpdate)
    }

    const verifyCitySelection = (CityWithAllBehind, AllCityUpdate) => {
        let locationsVals = []
        let CityWithAllArray = [CityWithAllBehind]
        let AllCityUpdateArray = [AllCityUpdate]
        const hasAllCities = CityWithAllArray.some(item => item.includes("همه ی شهرهای"));
        if(hasAllCities){
            AllCityUpdateArray.forEach(val => {
                locationsVals = [...locationsVals, ...locations[val].slice(1)]
            });

            return locationsVals
        }
    }

    const saveCity = () => {
        let AllCityInners = verifyCitySelection(`همه ی شهرهای ${AllCityes}`, AllCityes);
        if(AllCityInners){
            MiddleUpdate = MiddleUpdate.filter(val2 => !AllCityInners.includes(val2))
        }

        setAllCityes(AllCityUpdate);

        localStorage.setItem('SelectedCityes',JSON.stringify(cityVal));
        setOpenCity(false);
    }

    const cancleButton = () => {
        const Cityes = localStorage.getItem('SelectedCityes');
        if (Cityes) {
            setcityVal(JSON.parse(Cityes));
        }
    }

    return(
        <>
            <h2 id="city_button" className="city_button" onClick={() => OpenCityFunc(true)}>منطقه</h2>
            <div className={`cityDropdown ${OpenCity ? 'open' : ''}`} id='cityDropdown'>
                <div className={`cityDropdownTwo ${OpenCity ? 'open' : ''}`} id='cityDropdownTwo'>
                    {Object.keys(locations).map(city => (
                        <div className='cityOnButtonDiv' key={city}>
                            <button className='cityInnerButton' onClick={() => OpenInnerCity(city)} key={city}>
                                {city}
                            </button>

                            {openCities.includes(city) && (
                                
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

                                    {!AllCityes.includes(`${city}`) && (
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
                                    )}
                                </div>
                            )}    
                        
                        </div>
                    ))}
                </div>

                <button className='city_cancellation' onClick={() => cancleButton()}>لغو</button>
                <button className='city_conform' onClick={() => saveCity()}>تایید</button>
            </div>

        <div id="blur_rightBarOpen-city" className={`blur_rightBarOpen ${OpenCity ? 'open' : ''}`}></div>
        </>
    );
}
  
export default CityDropdown;
