import { useState, useEffect, useRef, useMemo } from 'react';
import './top_bar.css';

function CityDropdown() {
    const [locationDropdown, setlocationDropdown] = useState(false);
    const [prelocationDropdown, setprelocation2Dropdown] = useState([]);
    const [localHistoryCity, setlocalHistoryCity] = useState([])
    const [searchCity, setSearchCity] = useState('');
    const divXRef = useRef(null);
    const divYRef = useRef(null);


    const closeCity = () => {
        const mainBlock = document.getElementById('maincityBlock');
        
        setlocationDropdown(false);
        
        if (mainBlock) {
            mainBlock.classList.remove("open");
        }

        prelocationDropdown.forEach(cityName => {
            document.querySelectorAll(`.city-${cityName}`).forEach(el => {
                el.style.display = "none";
            });
        });

        setSearchCity('')

        setprelocation2Dropdown([]);
        
        document.removeEventListener('click', handleClick);
    };
    
    const [city2local, setcity2local] = useState(() => {
        const stored = localStorage.getItem("city2local");
        return stored ? JSON.parse(stored) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("city2local", JSON.stringify(city2local));
    }, [localHistoryCity]);
    
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
        "نوشهر": ["همه ی شهرهای نوشهر", "رامسر", "تنکابن", "چالوس", "قائمشهر", "مرزن آباد", "نمک آبرود", "محمودآباد", "بابلسر", "کلاردشت", "نور", "ساری", "سوادکوه", "کتالم", "بابل", "آمل", "سلمان شهر", "عباس آباد", "بهشهر", "لاریجان", "کتالم", "فریدون کنار", "بلده", "کتالم", "گلوگاه", "الاشت", "شیرگاه", "بلده", "سیاه بیشه", "ایزدشهر", "پل سفید", "جنت رودبار", "رستمکلا"],
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

    const saveCityLocalHost = () => {
        setlocalHistoryCity(city2local)
        closeCity()
    }

    const cancleCitLocalhost = () => {
        setcity2local(localHistoryCity)
        closeCity()
    }

    const clearAllCityLocalHost = () => {
        setprelocation2Dropdown([])
        setlocalHistoryCity([])
        setcity2local([])
        closeCity()
    }


    useEffect(() => {
    const loadCity = () => {
        const allCityLabels = city2local.filter(c => c.startsWith('همه ی شهرهای'));
        
        allCityLabels.forEach((label) => {
            const region = label.replace(/^همه ی شهرهای\s*/, '');
            const subCities = locations[region] || [];

            subCities
                .filter(c => !c.includes('همه ی شهرهای'))
                .forEach((city) => {
                    const elements = document.getElementsByClassName(`city-${region}`);
                    for (let el of elements) {
                        if (el.textContent.includes(city)) {
                            el.style.display = 'none';
                        }
                    }
                });
        });
    };

    loadCity();
    }, [city2local, locations]);

    const city2 = (cityname) => {
        if (prelocationDropdown.includes(cityname)) {
            document.querySelectorAll(`.city-${cityname}`).forEach(el => el.style.display = "none");
            setprelocation2Dropdown(prelocationDropdown.filter(item => item !== cityname));
        } else {
            document.querySelectorAll(`.city-${cityname}`).forEach(el => el.style.display = "grid");
            setprelocation2Dropdown([...prelocationDropdown, cityname]);
        }
    };


    const openCity = () => {
        const mainBlock = document.getElementById('maincityBlock');
        if (locationDropdown) {
            setlocationDropdown(false);
            closeCity()
        } else {
            setlocationDropdown(true);
            mainBlock.classList.add("open");
            document.addEventListener('click', handleClick);
        }
    };

    useEffect(() => {
    let rafId;
    let tester = "bye";

    const handleClick = (event) => {

        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
        const inside =
            divXRef.current?.contains(event.target) ||
            divYRef.current?.contains(event.target);

        if (!inside) {
            if (tester === "hi") {
            tester = "bye";
            closeCity();
            }
        } else {
            tester = "hi";
        }
        });
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
        cancelAnimationFrame(rafId);
        document.removeEventListener("mousedown", handleClick);
    };
    }, []);

    const addLocalHistory = (cityname) => {
        if (cityname.includes('همه ی شهرهای')) {
            const region = cityname.replace(/^همه ی شهرهای\s*/, '');
            const subCities = locations[region] || [];
            const invisCity = (displayValue) => {
                subCities
                    .filter(c => !c.includes("همه ی شهرهای"))
                    .forEach((c) => {
                        const elements = document.getElementsByName(c);
                        for (let el of elements) {
                            const label = el.closest('.city-label');
                            if (label) label.style.display = displayValue;
                        }
                    });
            };

            
            if (city2local.includes(cityname)) {
                setcity2local(city2local.filter(c => c !== cityname));
                invisCity("grid")
            } else {
                const filtered = city2local.filter(c => !subCities.includes(c));
                invisCity("none")
                setcity2local([...filtered, cityname]);
            }
        } else {
            const parentRegion = Object.keys(locations).find(r => locations[r].includes(cityname));
            let updated = city2local;
            if (parentRegion) {
                const allLabel = `همه ی شهرهای ${parentRegion}`;
                if (city2local.includes(allLabel)) {
                    updated = city2local.filter(c => c !== allLabel);
                }
            }
            if (updated.includes(cityname)) {
                setcity2local(updated.filter(c => c !== cityname));
            } else {
                setcity2local([...updated, cityname]);
            }
        }
    };

    const list = () => (
        Object.keys(locations).map((cityName, index) => (
            <div key={index} className="citylocotionchild">
                <button onClick={() => city2(cityName)} value={cityName}>{cityName}</button>
                {locations[cityName].map((city, i) => (
                    <label key={i} className={`city-label city-${cityName}`}>
                        <input
                            type="checkbox"
                            checked={city.includes('همه ی شهرهای')
                                ? city2local.includes(city)
                                : city2local.includes(city)
                            }
                            name={city}
                            onChange={() => addLocalHistory(city)}
                        />
                        {city}
                    </label>
                ))}
            </div>
        ))
    );

    const filterdLocations = useMemo(() => {
    let result = {}
    
    for (const province in locations){
        const cities = locations[province];
        const matchContain = [];


        cities.forEach(city => {
            const lowwerCity = city.trim();

            if (lowwerCity.includes(searchCity)) {
                matchContain.push(lowwerCity);
            }
        });

        const combined = [...matchContain];
        if (combined.length > 0) {
            result[province] = combined;
        }
    }


    return result;

    }, [searchCity])

    return (
        <>
            <button ref={divXRef} className='city_but' id='openCityButton' onClick={openCity}>استان</button>
            <div ref={divYRef} className="cityselected" id="maincityBlock">
            <div className="city-scroll-content">
                <button className='clearAllCityBut' onClick={clearAllCityLocalHost}>پاک کردن همه</button>
                    <input type="text" value={searchCity} onChange={(e) => {setSearchCity(e.target.value); }} placeholder='جستجو در شهر ها' className='serchInCitys' />
                        
                    <div className='citylocotionchild'>
                        {searchCity && Object.entries(filterdLocations).map(([province, cities]) => (
                            <div key={province} >
                            {cities.map((city, i) => (
                                
                            <label className='city-label-serch' key={i}>
                                <input
                                type="checkbox"
                                checked={city.includes('همه ی شهرهای')
                                    ? city2local.includes(city)
                                    : city2local.includes(city)
                                }
                                name={city}
                                onChange={() => addLocalHistory(city)}
                                />
                                {city}
                            </label>
                            
                            ))}
                        </div>
                    ))}
                </div>
                
                {list()}
            </div>
            <div className="fixed-bottom-button"><button className='conformCity' onClick={saveCityLocalHost}>تایید</button><button onClick={cancleCitLocalhost} className='deconformCity'>لغو</button></div>
            </div>
        </>
    );
}

export default CityDropdown;
