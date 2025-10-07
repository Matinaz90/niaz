import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useValidatePathHome } from "../validPath.jsx";
import './2.1_home_rightBar.css';

export default function Home_RightBar() {
  useValidatePathHome()
  const [mode, setMode] = useState('default');
  const [page, setpage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const [price, setPrice] = useState('');
  const [PricePersion, setPricePersion] = useState('');
  const [priceRecommended1, setpriceRecommended1]= useState();
  const [priceRecommended2, setpriceRecommended2]= useState();
  const [meterage, setMeterage] = useState('');
  const [roomsInHome, setroomsInHome] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [HomeNumber, sethomeHomeNumber] = useState('');
  const [homeface, sethomeface] = useState('');
  const [allHomes, setallHomes] = useState('');
  const [homeflorRooms, sethomeflorRooms] = useState('');
  const [homeCondition, sethomeCondition] = useState('');
  const [withStuffInhome, setwithStuffInhome] = useState("");
  const [anbary, setanbary] = useState("");
  const [parking, setparking] = useState("");
  const [asansor, setasansor] = useState("");
  const [balkon, setbalkon] = useState("");
  const [homehotTemp, sethomehotTemp] = useState("");
  const [homecoldTemp, sethomecoldTemp] = useState("");
  const [bathroom, setbathroom] = useState("");

  const yearListRef = useRef();
  const [showYearList, setShowYearList] = useState(false);
  const [showHomeNumber, setShowHomeNumber] = useState(false);
  const [showAllHomes, setShowAllHomes] = useState(false);
  const [showHomeFlorRooms, setShowHomeFlorRooms] = useState(false);
  const isRightBarOpen = localStorage.getItem('rightBarOpen') === 'true';
  const divXRef = useRef(null);

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  useEffect(() => {
    const href = location.pathname;
    if (href.includes('/home')) {
      if(href.includes('price:')){
        setMode('default');
      }else if(href.includes('options:')){
        setMode('pricehome');
      }else if (href.includes('condition:')){
        setMode('options')
      } else if (href.includes('floor:')) {
        setMode('homeCondition');
      } else if (href.includes('face:')) {
        setMode('homeNumbresInfloor');
      } else if (href.includes('year:')) {
        setMode('waylookhome');
      } else if (href.includes('rooms:')) {
        setMode('timeCreated');
      } else if (href.includes('meter:')) {
        setMode('roomsInHome');
      } else if (href.includes('Aparteman')) {
        setMode('MeterageId');
      } else {
        setMode('default');
      }
    }

  if(href.includes('Aparteman')){
      setpage('Aparteman')
    } else {
      setpage('');
    };

  }, [location.pathname]);

  useEffect(() => {
    if (showHomeNumber) {
      setShowAllHomes(false);
      setShowHomeFlorRooms(false);
    }
  }, [showHomeNumber]);

  useEffect(() => {
    if (showAllHomes) {
      setShowHomeNumber(false);
      setShowHomeFlorRooms(false);
    }
  }, [showAllHomes]);

  useEffect(() => {
    if (showHomeFlorRooms) {
      setShowHomeNumber(false);
      setShowAllHomes(false);
    }
  }, [showHomeFlorRooms]);

  useEffect(() => {
  let tester = "bye";

  function handleClick(event) {

    if (
      (div1Ref.current && div1Ref.current.contains(event.target)) ||
      (div2Ref.current && div2Ref.current.contains(event.target)) ||
      (div3Ref.current && div3Ref.current.contains(event.target)) ||
      (div4Ref.current && div4Ref.current.contains(event.target))
    ) {
      tester = "hi";
    } else {
      if (tester === "hi") {
        tester = "bye";
        setShowHomeNumber(false);
        setShowAllHomes(false);
        setShowHomeFlorRooms(false);
      }
    }
  }

  document.addEventListener("mousedown", handleClick);
  
  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}, []);

  const formatPrice = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num <= 0) return '';
    if (num >= 1_000_000_000) return englishToPersianNumber((num / 1_000_000_000).toFixed(3).replace(/\.0+$/, '')) + ' میلیارد';
    if (num >= 1_000_000) return englishToPersianNumber((num / 1_000_000).toFixed(3).replace(/\.0+$/, '')) + ' میلیون';
    if (num >= 1_000) return englishToPersianNumber((num / 1_000).toFixed(3).replace(/\.0+$/, '')) + ' هزار تومان';
    return englishToPersianNumber(num) + ' تومان';
  };

  const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
  const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];

  const persianToEnglishNumber = (val) => {
        return String(val).split("").map(ch => {
        const index = persianNums.indexOf(ch);
        return index > -1 ? englishNums[index] : ch;
      }).join("");
    }

  const englishToPersianNumber = (val) => {
      return String(val).split("").map(ch => {
      const index = englishNums.indexOf(ch);
      return index > -1 ? persianNums[index] : ch;
    }).join("");
  }

  const handleChange = (e, setter, setter2persion) => {

    const raw = e.target.value

    if(raw.length === 0){
      setter('')
      setter2persion('')
      return;
    }

    const filtered = raw
    .split('')
    .filter(ch => englishNums.includes(ch) || persianNums.includes(ch))
    .join('');


    let englishVal = persianToEnglishNumber(filtered);

    englishVal = englishVal.replace(/^0+(?=\d)/, '');

    setter(englishVal);
    setter2persion(englishToPersianNumber(filtered));
  };

  const AddGoogleLink = (addedLink) => {
    const key = addedLink.split(':')[0];
    let cleanPath = location.pathname.replace(new RegExp(`${key}:[^/]*`, 'g'), '').replace(/\/+$/, '');
    navigate(`${cleanPath}/${addedLink}`);
  };

  const trimPathToRoot = () => {
    setMode('default')
    let currentPath = location.pathname;
    if (currentPath.endsWith('/')) currentPath = currentPath.slice(0, -1);
    if (currentPath === '/home' || currentPath === '') return;
    const trimmedPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '/home';
    navigate(trimmedPath);
  };

  const priceRecommendedcal = (e) => {
    const raw = persianToEnglishNumber(e.target.value);
    const price = Number(raw);

    if (!raw || isNaN(price)) {
      setpriceRecommended1('');
      setpriceRecommended2('');
      return;
    }

    if (price > 999) {
      setpriceRecommended1('');
      setpriceRecommended2('');
      return;
    }

    setpriceRecommended1(englishToPersianNumber(price) + ' میلیون');
    setpriceRecommended2(englishToPersianNumber(price) + ' میلیارد');
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (yearListRef.current && !yearListRef.current.contains(e.target)) {
        setShowYearList(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const AddLikemilion = (price) => {
    AddGoogleLink(`price:${price}000000`);
    setPrice(price + '000000')
    setPricePersion(englishToPersianNumber(price + '000000'))
    setpriceRecommended1()
    setpriceRecommended2()
  }

  const AddLikemiliard = (price) => {
    AddGoogleLink(`price:${price}000000000`);
    setPrice(price + '000000000')
    setPricePersion(englishToPersianNumber(price + '000000000'))
    setpriceRecommended1()
    setpriceRecommended2()
  }

  const handleChangeforOneNums = (e, setter) => {

  const raw = persianToEnglishNumber(e.target.value)

  const filtered = raw
  .split('')
  .filter(ch => englishNums.includes(ch) || persianNums.includes(ch))
  .join('');


  let englishVal = persianToEnglishNumber(filtered);

  englishVal = englishVal.replace(/^0+(?=\d)/, '');

  setter(englishVal);
  };

  return (
    <div id="rightBar" className={`right_bar ${isRightBarOpen ? 'open' : ''}`}>
      <nav className="right-bar-nav">
        {mode === 'default' && (
          <>
            <a onClick={() => { setMode('pricehome')}}>مشارکت ساخت</a>
            <a onClick={() => { setMode('MeterageId'); AddGoogleLink('Aparteman');}}>اپارتمان</a>
            <a>ویلایی</a>
            <a>اجاره</a>
            <a>تجاری</a>
          </>
        )}

        {mode === 'pricehome' && (
          <>
            <p className="showInput">قیمت:</p>
            <input
              value={PricePersion}
              onChange={(e) => {handleChange(e, setPrice, setPricePersion); priceRecommendedcal(e);}}
              type="text"
              inputMode="numeric"
              ref={divXRef}
            />

            <p id="priceDisplay" className="priceDisplay">
              {formatPrice(price)}
            </p>

            <button
              className="next"
              disabled={
                !price
              }
              onClick={() => {
                if (price) {
                  AddGoogleLink(`price:${price}`);
                  setMode('default');
                }
              }}
            >
              تایید
            </button>

            <div className={`recommended_div`}>
            {priceRecommended1 ? (
              <button
                className="category"
                disabled={!price}
                onClick={() => {
                  if (price) {
                    AddLikemilion(price)
                    setMode('default');
                  }
                }}
              >
                {priceRecommended1}
              </button>
            ) : null}

            {priceRecommended2 ? (
                <button
                  className="category"
                  disabled={!price}
                  onClick={() => {
                    if (price) {
                      AddLikemiliard(price)
                      setMode('default');
                    }
                  }}
                >
                  {priceRecommended2}
                </button>
              ) : null}
            </div>

            <p className="oneBack" onClick={trimPathToRoot}>بازگشت</p>
          </>
        )}

        {mode === 'MeterageId' && (
          <>
            <p className="showInput">متراژ:</p>
            <input
              type="text"
              value={englishToPersianNumber(meterage)}
              onChange={(e) => handleChangeforOneNums(e, setMeterage)}
              inputMode="numeric"
            />
            <button
              className="next"
              disabled={!meterage}
              onClick={() => {
                if (meterage) {
                  AddGoogleLink(`meter:${meterage}`);
                  setMode('roomsInHome');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'roomsInHome' && (
          <>
            <p className="showInput">اتاق ها:</p>
            <input
              type="text"
              value={englishToPersianNumber(roomsInHome)}
              onChange={(e) => handleChangeforOneNums(e, setroomsInHome)}
              inputMode="numeric"
            />
            <button
              className="next"
              disabled={!roomsInHome}
              onClick={() => {
                if (roomsInHome) {
                  AddGoogleLink(`rooms:${roomsInHome}`);
                  setMode('timeCreated');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'timeCreated' && (
          <>
            <p className="showInput">سال ساخت:</p>
            <div className="input-wrapper" style={{ position: 'relative' }} ref={yearListRef}>
              <input
                id={showYearList ? 'inputter' : ''}
                type="text"
                value={englishToPersianNumber(yearBuilt)}
                onChange={(e) => handleChangeforOneNums(e, setYearBuilt)}
                inputMode="numeric"
                onFocus={() => setShowYearList(true)}
              />
              <div className={`year-dropdown ${showYearList ? 'visible' : 'hidden'}`}>
                {Array.from({ length: 1404 - 1330 + 1 }, (_, i) => 1404 - i).map((year) => (
                  <div
                    key={year}
                    onClick={() => {
                      setYearBuilt(String(year));
                      setShowYearList(false);
                    }}
                    className="conform_buttonYear"
                  >
                    {englishToPersianNumber(year)}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="next"
              disabled={!yearBuilt}
              onClick={() => {
                if (yearBuilt) {
                  AddGoogleLink(`year:${yearBuilt}`);
                  setMode('waylookhome');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'waylookhome' && (
          <>
            <p className="showInput">جهت ساختمان:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                شمالی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                جنوبی
              </label>
            </div>
            <button
              className="next"
              disabled={!homeface}
              onClick={() => {
                if (homeface) {
                  AddGoogleLink(`face:${homeface}`);
                  setMode('homeNumbresInfloor');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'homeNumbresInfloor' && (
          <>
              <p className="showInput showInputfloar">طبقه:</p>
            <div className="floor-info">
              <input
                type="text"
                value={englishToPersianNumber(HomeNumber)}
                onChange={(e) => handleChangeforOneNums(e, sethomeHomeNumber)}
                inputMode="numeric"
                onFocus={() => setShowHomeNumber(true)}
                ref={div1Ref}
              />

            <div className={`homeNumbresInfloor ${showHomeNumber ? 'visible' : ''}`} ref={div4Ref}>
              {Array.from({ length: 50 }, (_, i) => 50 - i).map((HomeNumber) => (
                <div
                  onClick={() => {
                    setShowHomeNumber(false);
                    sethomeHomeNumber(String(HomeNumber));
                  }}
                  className="conform_buttonYear"
                >
                  {englishToPersianNumber(HomeNumber)}
                </div>
              ))}
            </div>

              <p className="showInput">کل طبقات:</p>
            <div className="floor-info">
              <input
                type="text"
                value={englishToPersianNumber(allHomes)}
                onChange={(e) => handleChangeforOneNums(e, setallHomes)}
                inputMode="numeric"
                onFocus={() => setShowAllHomes(true)}
                ref={div2Ref}
              />

            <div className={`homeNumbresInfloor ${showAllHomes ? 'visible' : ''}`} ref={div4Ref}>
              {Array.from({ length: 50 }, (_, i) => 50 - i).map((allHomes) => (
                <div
                  key={allHomes}
                  onClick={() => {
                    setallHomes(String(allHomes));
                    setShowAllHomes(false);
                  }}
                  className="conform_buttonYear"
                >
                  {englishToPersianNumber(allHomes)}
                </div>
              ))}
            </div>
            </div>

             <p className="showInput">تعداد واحد در طبقه :</p>
          <div className="floor-info">
              <input
                type="text"
                value={englishToPersianNumber(homeflorRooms)}
                onChange={(e) => handleChangeforOneNums(e, sethomeflorRooms)}
                inputMode="numeric"
                onFocus={() => setShowHomeFlorRooms(true)}
                ref={div3Ref}
              />

                <div className={`homeNumbresInfloor ${showHomeFlorRooms ? 'visible' : ''}`} ref={div4Ref}>
                  {Array.from({ length: 10 }, (_, i) => 10 - i).map((homeflorRooms) => (
                    <div
                      key={homeflorRooms}
                      onClick={() => {
                        sethomeflorRooms(String(homeflorRooms));
                        setShowHomeFlorRooms(false);
                      }}
                      className="conform_buttonYear"
                    >
                      {englishToPersianNumber(homeflorRooms)}
                    </div>
                  ))}
                </div>
            </div>
          </div>
            <button
              className="next"
              disabled={!(HomeNumber && allHomes && homeflorRooms)}
              onClick={() => {
                if (HomeNumber && allHomes && homeflorRooms) {
                  const val = `${HomeNumber},${allHomes},${homeflorRooms}`;
                  AddGoogleLink(`floor:${val}`);
                  setMode('homeCondition');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'homeCondition' && (
          <>
            <p className="showInput">وضعیت واحد:</p>
            <div className="homeCondition">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'new'}
                  onChange={() => sethomeCondition('new')}
                />
                نو
              </label>

              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'ok'}
                  onChange={() => sethomeCondition('ok')}
                />
                باسازی شده
              </label>

              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'normal'}
                  onChange={() => sethomeCondition('normal')}
                />
                معمولی
              </label>

              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'bad'}
                  onChange={() => sethomeCondition('bad')}
                />
                نیاز به باسازی
              </label>
            </div>
            <button
              className="next"
              disabled={!homeCondition}
              onClick={() => {
                if (homeCondition) {
                  AddGoogleLink(`condition:${homeCondition}`);
                  setMode('options');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'options' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
            <p className="showInput">مبله:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setwithStuffInhome('t')}
                  checked={withStuffInhome === 't'}
                />
                هست
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setwithStuffInhome('f')}
                  checked={withStuffInhome === 'f'}
                />
                نیست
              </label>
            </div>

            <p className="showInput">پارکینگ:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setparking('t')}
                  checked={parking === 't'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setparking('f')}
                  checked={parking === 'f'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">اسنسور:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setasansor('t')}
                  checked={asansor === 't'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setasansor('f')}
                  checked={asansor === 'f'}
                />
                ندارد
              </label>
            </div>


            <p className="showInput">انباری:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setanbary('t')}
                  checked={anbary === 't'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setanbary('f')}
                  checked={anbary === 'f'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">بالاکن:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setbalkon('t')}
                  checked={balkon === 't'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setbalkon('f')}
                  checked={balkon === 'f'}
                />
                ندارد
              </label>
            </div>

            
            <p className="showInput">گرمایش:</p>
            <div className="input-wrapper homeface-wrapper">
              <div className="homeface-row">
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => sethomehotTemp('h')}
                    checked={homehotTemp === 'h'}// stands for heater
                  />
                  بخاری
                </label>
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => sethomehotTemp('c')}
                    checked={homehotTemp === 'c'}// stands for combi boiler
                  />
                  پکیج
                </label>
              </div>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomehotTemp('Hc')}
                  checked={homehotTemp === 'Hc'} // stands for Heater and package
                />
                بخاری و پکیج
              </label>
            </div>

            <p className="showInput">سرمایش :</p>
            <div className="input-wrapper homeface-wrapper">
              <div className="homeface-row">
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => sethomecoldTemp('w')}
                    checked={homecoldTemp === 'w'} // stands for water
                  />
                  ابی
                </label>
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => sethomecoldTemp('g')}
                    checked={homecoldTemp === 'g'} // stadns for gas
                  />
                  گازی
                </label>
              </div>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomecoldTemp('Wg')}
                  checked={homecoldTemp === 'Wg'} // stands for water and gas
                />
                ابی و گازی
              </label>
            </div>

            <p className="showInput">سرویس بهداشتی:</p>
            <div className="input-wrapper homeface-wrapper">
              <div className="homeface-row">
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => setbathroom('f')}
                    checked={bathroom === 'f'} // farangi
                  />
                  فرنگی
                </label>
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => setbathroom('i')}
                    checked={bathroom === 'i'} // irany
                  />
                  ایرانی
                </label>
              </div>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setbathroom('Fi')}
                  checked={bathroom === 'Fi'} // farhangi and irany
                />
                فرنگی و ایرانی
              </label>
            </div>



            

            <button
              className="next"
              disabled={
                !withStuffInhome ||
                !anbary ||
                !parking ||
                !asansor ||
                !balkon ||
                !homehotTemp ||
                !homecoldTemp ||
                !bathroom
              }
              onClick={() => {
                const options = `${withStuffInhome},${anbary},${parking},${asansor},${balkon},${homehotTemp},${homecoldTemp},${bathroom}`
                if (withStuffInhome || anbary || parking || asansor || balkon || homehotTemp || homecoldTemp || bathroom) {
                  AddGoogleLink(`options:${options}`);
                  setMode('pricehome');
                }
              }}
            >
              تایید
            </button>

            </div>


              <button className="oneBack_options" onClick={trimPathToRoot}>بازگشت</button>
            <div className='oneBack_options_parents'></div>
          </div>
        )}

      </nav>
    </div>
  );
}
