import { useState, useRef, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useValidatePathHome } from "../validPath.jsx";
import './2.1_home_rightBar.css';

export default function Home_RightBar() {
  // useValidatePathHome()
  const [mode, setMode] = useState('default');
  const navigate = useNavigate();
  const location = useLocation();

  const [price, setPrice] = useState('');
  const [price2, setPrice2] = useState('');
  const [priceRecommended1, setpriceRecommended1]= useState();
  const [priceRecommended2, setpriceRecommended2]= useState();
  const [meterage, setMeterage] = useState('');
  const [roomsInHome, setroomsInHome] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [HomeNumber, sethomeHomeNumber] = useState('');
  const [allHomes, setallHomes] = useState('');
  const [homeface, sethomeface] = useState('');
  const [homeflorRooms, sethomeflorRooms] = useState('');
  const [homeCondition, sethomeCondition] = useState('');
  const [withStuffInhome, setwithStuffInhome] = useState("");
  const [anbary, setanbary] = useState("");
  const [parking, setparking] = useState("");
  const [asansor, setasansor] = useState("");
  const [balkon, setbalkon] = useState("");
  const [bahr, setbahr] = useState("");
  const [joinbuild, setjoinbuild] = useState("");
  const [joinbuildValue, setjoinbuildValue] = useState("");
  const [electrycityStrore, setelectrycityStrore] = useState("");
  const [waterStore, setwaterStore] = useState("");
  const [gasStore, setgasStore] = useState("");

  const yearListRef = useRef();
  const [showYearList, setShowYearList] = useState(false);
  const [showOpenDropdownFloars, setOpenDropdownFloars] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [openRoomDropdown, setopenRoomDropdown] = useState(false);
  const [showJoinbuildDropdown, setShowJoinbuildDropdown] = useState(false);

  const isRightBarOpen = localStorage.getItem('rightBarOpen') === 'true';
  const divXRef = useRef(null);

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const joinbuildDropdownref = useRef(null);
  
  const div1DropdownRef = useRef();
  const div2DropdownRef = useRef();
  const div3DropdownRef = useRef();

  const divRoomDropdownRef = useRef();

  const floorOptions = useMemo(() => Array.from({ length: 30 }, (_, i) => i + 1), []);
  const unitOptions = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1), []);

  const [selectedpriceRent, setselectedpriceRent] = useState('')
  const empityValTosend = 'e'
  const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
  const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];

  const resetAllFields = () => {
  setPrice('');
  setPrice2('');
  setpriceRecommended1();
  setpriceRecommended2();
  setMeterage('');
  setroomsInHome('');
  setYearBuilt('');
  sethomeHomeNumber('');
  setallHomes('');
  sethomeface('');
  sethomeflorRooms('');
  sethomeCondition('');
  setwithStuffInhome('');
  setanbary('');
  setparking('');
  setasansor('');
  setbalkon('');
  };

  useEffect(() => {
    const href = location.pathname;
    if (href.includes('/home')) {
      if (href.includes('/joinbuild')) {
        if(href.includes('price:')){
          setMode('default');
        } else if (href.includes('joinbuildpersent:')) {
          setMode('pricehome');
        } else if (href.includes('face:')) {
          setMode('joinbuild');
        } else if (href.includes('meter:')) {
          setMode('waylookhome');
        } else {
          setMode('MeterageId');
        }
      }  else if (href.includes('/Aparteman')) {
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
        } else {
          setMode('MeterageId');
        }
      } else if (href.includes('/villa')) {
        if(href.includes('price:')){
          setMode('default');
        }else if(href.includes('options:')){
          setMode('pricehome');
        }else if (href.includes('condition:')){
          setMode('options')
        } else if (href.includes('face:')) {
          setMode('homeCondition');
        } else if (href.includes('year:')) {
          setMode('waylookhome');
        } else if (href.includes('rooms:')) {
          setMode('timeCreated');
        } else if (href.includes('meter:')) {
          setMode('roomsInHome');
        } else {
          setMode('MeterageId');
        }
      } else if(href.includes('/rent')) {
        if(href.includes('pricerent:')){
          setMode('default');
        }else if(href.includes('options:')){
          setMode('pricehomerRent');
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
        } else {
          setMode('MeterageId');
        }
      } else if (href.includes('/store')) {
        if(href.includes('price:')){
          setMode('default');
        }else if (href.includes('condition:')){
          setMode('pricehome');
        } else if (href.includes('face:')) {
          setMode('homeCondition');
        } else if (href.includes('year:')) {
          setMode('waylookhome');
        } else if (href.includes('meter:')) {
          setMode('timeCreated');
        } else {
          setMode('MeterageId');
        }
      } else {
        setMode('default');
        resetAllFields()
      }
    } 

  }, [location.pathname]);
  

  const formatPrice = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num <= 0) return '';
    if (num >= 1_000_000_000) return englishToPersianNumber((num / 1_000_000_000).toFixed(3).replace(/\.0+$/, '')) + ' میلیارد';
    if (num >= 1_000_000) return englishToPersianNumber((num / 1_000_000).toFixed(3).replace(/\.0+$/, '')) + ' میلیون';
    if (num >= 1_000) return englishToPersianNumber((num / 1_000).toFixed(3).replace(/\.0+$/, '')) + ' هزار تومان';
    return englishToPersianNumber(num) + ' تومان';
  };

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
  const handleClick = (event) => {
    const refs = [
      joinbuildDropdownref,
      yearListRef,
      div1Ref,
      div2Ref,
      div3Ref,
      div1DropdownRef,
      div2DropdownRef,
      div3DropdownRef,
      divRoomDropdownRef,
    ];

    const clickedInside = refs.some(ref => ref.current?.contains(event.target));

    if (!clickedInside) {
      setShowYearList(false);
      setopenRoomDropdown(false);
      setOpenDropdownFloars(null);
      setShowJoinbuildDropdown(false)
    }
  };

  document.addEventListener('mousedown', handleClick);
  return () => document.removeEventListener('mousedown', handleClick);
}, []);

  const AddLikemilion = (price) => {
          setPrice(price + '000000');
          setpriceRecommended1();
          setpriceRecommended2();
  };

  const AddLikemiliard = (price) => {
      setPrice(price + '000000000');
      setpriceRecommended1();
      setpriceRecommended2();
  };

const AddLikemilionrent = (priceValue, rentIndex) => {
  const finalPrice = priceValue + '000000'; // million

  if (rentIndex === 1) {
    setPrice(finalPrice);
  } else if (rentIndex === 2) {
    setPrice2(finalPrice);
  }

  setpriceRecommended1();
  setpriceRecommended2();
};

const AddLikemiliardrent = (priceValue, rentIndex) => {
  const finalPrice = priceValue + '000000000';

  if (rentIndex === 1) {
    setPrice(finalPrice);
  } else if (rentIndex === 2) {
    setPrice2(finalPrice);
  }

  setpriceRecommended1();
  setpriceRecommended2();
};
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

  const floorOptionsPersian = useMemo(
  () => floorOptions.map((num) => englishToPersianNumber(num)),
  [floorOptions]
  );

  const unitOptionsPersian = useMemo(
  () => unitOptions.map((num) => englishToPersianNumber(num)),
  [unitOptions]
  );

  const HomeNumberserachBarVal = useMemo(
    () => persianToEnglishNumber(HomeNumber),
    [HomeNumber]
  );

  const allHomesserachBarVal = useMemo(
    () => persianToEnglishNumber(allHomes),
    [allHomes]
  );

  const homeflorRoomsserachBarVal = useMemo(
    () => persianToEnglishNumber(homeflorRooms),
    [homeflorRooms]
  )

  const triggerError = () => {
    setShowError(true);
    setTimeout(() => {setShowError(false), 2000; setShowErrorText('');})
  };

  return (
    <div id="rightBar" className={`right_bar ${isRightBarOpen ? 'open' : ''}`}>
      <nav className="right-bar-nav">
        {mode === 'default' && (
          <>
            <a onClick={() => {AddGoogleLink('joinbuild');}}>مشارکت ساخت</a>
            <a onClick={() => {AddGoogleLink('Aparteman');}}>اپارتمان</a>
            <a onClick={() => {AddGoogleLink('villa');}}>ویلایی</a>
            <a onClick={() => {AddGoogleLink('rent');}}>اجاره</a>
            <a>تجاری</a> // what is it for
          </>
        )}

        {mode === 'pricehome' && (
          <>
            <p className="showInput">قیمت:</p>
            <input
              value={englishToPersianNumber(price)}
              onChange={(e) => {handleChangeforOneNums(e, setPrice); priceRecommendedcal(e);}}
              type="text"
              inputMode="numeric"
              ref={divXRef}
            />

            <p id="priceDisplay" className="priceDisplay">
              {englishToPersianNumber(formatPrice(price))}
            </p>

            <button
              className="next"
              disabled={
                !price
              }
              onClick={() => {
                if (price) {
                  AddGoogleLink(`price:${price}`);
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
                  }
                }}
              >
                {englishToPersianNumber(priceRecommended1)}
              </button>
            ) : null}

            {priceRecommended2 ? (
                <button
                  className="category"
                  disabled={!price}
                  onClick={() => {
                    if (price) {
                      AddLikemiliard(price);
                    }
                  }}
                >
                  {englishToPersianNumber(priceRecommended2)}
                </button>
              ) : null}
            </div>

            <button className='ignoreVal' onClick={() => AddGoogleLink(`price:${empityValTosend}`)}>نادیده گرفتن</button>\
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'pricehomerRent' && (
          <>
            <p className="showInput">وعدیه:</p>

            <input
              value={englishToPersianNumber(price)}
              onChange={(e) => {
                handleChangeforOneNums(e, setPrice);
                priceRecommendedcal(e);
              }}
              onClick={(e) => priceRecommendedcal(e)}
              type="text"
              inputMode="numeric"
              onFocus={() => setselectedpriceRent(true)}
            />

            <p className="showInput">اجاره:</p>

            <input
              value={englishToPersianNumber(price2)}
              onChange={(e) => {
                handleChangeforOneNums(e, setPrice2);
                priceRecommendedcal(e);
              }}
              onClick={(e) => priceRecommendedcal(e)}
              type="text"
              inputMode="numeric"
              onFocus={() => setselectedpriceRent(false)}
            />

            <p id="priceDisplay" className="priceDisplay">
              {formatPrice(selectedpriceRent ? price : price2)}
            </p>

            <button
              className="next"
              disabled={!Number(price) && !Number(price2)}
              onClick={() => {
                  AddGoogleLink(`pricerent:${price + ',' + price2}`);
              }}
            >
              تایید
            </button>

            <div className="recommended_div">
              {priceRecommended1 && (
                <button
                  className="category"
                  onClick={() => {
                    const activePrice = selectedpriceRent ? price : price2;
                    const activeIndex = selectedpriceRent ? 1 : 2;
                    AddLikemilionrent(activePrice, activeIndex);
                  }}
                >
                  {englishToPersianNumber(priceRecommended1)}
                </button>
              )}

              {priceRecommended2 && (
                <button
                  className="category"
                  onClick={() => {
                    const activePrice = selectedpriceRent ? price : price2;
                    const activeIndex = selectedpriceRent ? 1 : 2;
                    AddLikemiliardrent(activePrice, activeIndex);
                  }}
                >
                  {englishToPersianNumber(priceRecommended2)}
                </button>
              )}
            </div>

            <button className="ignoreVal" onClick={() => AddGoogleLink(`pricerent:${empityValTosend}`)}>
              نادیده گرفتن
            </button>

            <button className="oneBack" onClick={trimPathToRoot}>
              بازگشت
            </button>
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
                }
              }}
            >
              تایید
            </button>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`meter:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'roomsInHome' && (
          <>
            <p className="showInput">اتاق ها:</p>
          <div className="floor-info">
            <input
              type="text"
              value={englishToPersianNumber(roomsInHome)}
              onChange={(e) => handleChangeforOneNums(e, setroomsInHome)}
              inputMode="numeric"
              onFocus={() => setopenRoomDropdown(true)}
              readOnly
            />

            <div className={`homeNumbresInfloor ${openRoomDropdown ? 'visible' : ''}`} ref={divRoomDropdownRef}>
              {unitOptions.map((roomsInHome) => (
                <div
                  key={roomsInHome}
                  onClick={() => {
                    setopenRoomDropdown(false);
                    setroomsInHome(String(roomsInHome));
                  }}
                  className="conform_buttonYear"
                >
                  {englishToPersianNumber(roomsInHome)}
                </div>
              ))}
            </div>
            </div>

            <button
              className="next"
              disabled={!roomsInHome}
              onClick={() => {
                if (roomsInHome) {
                  AddGoogleLink(`rooms:${roomsInHome}`);
                }
              }}
            >
              تایید
            </button>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`rooms:${empityValTosend}`)}>نادیده گرفتن</button>
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
                readOnly
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
                }
              }}
            >
              تایید
            </button>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`year:${empityValTosend}`)}>نادیده گرفتن</button>
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

            <p className="showInput">بحر ملک:</p>
            <div className="input-wrapper homeface-wrapper">
              <div className="homeface-row">
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => setbahr('1')}
                    checked={bahr === '1'}
                  />
                  ۱ بحر 
                </label>
                <label className="homeface-option">
                  <input
                    type="checkbox"
                    onChange={() => setbahr('2')}
                    checked={bahr === '2'}
                  />
                  ۲ بحر
                </label>
              </div>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setbahr('3')}
                  checked={bahr === '3'}
                />
                ۳ بحر
              </label>
            </div>

            <button
              className="next"
              disabled={!homeface || !bahr}
              onClick={() => {
                if (homeface || bahr) {
                  AddGoogleLink(`face:${homeface + ',' + bahr}`);
                }
              }}
            >
              تایید
            </button>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`face:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'homeNumbresInfloor' && (
          <>
              <p className="showInput showInputfloar">طبقه:</p>
            <div className="floor-info">
              <input
                type="text"
                id={showYearList ? 'inputter' : ''}
                value={englishToPersianNumber(HomeNumber)}
                onChange={(e) => handleChangeforOneNums(e, sethomeHomeNumber)}
                inputMode="numeric"
                onFocus={() => setOpenDropdownFloars('floor')}
                ref={div1Ref}
                readOnly
              />

            <div className={`homeNumbresInfloor ${showOpenDropdownFloars === 'floor' ? 'visible' : ''}`} ref={div1DropdownRef}>
              {floorOptionsPersian.map((HomeNumber) => (
                <div
                  key={HomeNumber}
                  onClick={() => {
                    setOpenDropdownFloars(null);
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
                id={showYearList ? 'inputter' : ''}
                value={englishToPersianNumber(allHomes)}
                onChange={(e) => handleChangeforOneNums(e, setallHomes)}
                inputMode="numeric"
                onFocus={() => setOpenDropdownFloars('all')}
                ref={div2Ref}
                readOnly
              />

            <div className={`homeNumbresInfloor ${showOpenDropdownFloars === 'all' ? 'visible' : ''}`} ref={div2DropdownRef}>
              {floorOptionsPersian.map((allHomes) => (
                <div
                  key={allHomes}
                  onClick={() => {
                    setallHomes(String(allHomes));
                    setOpenDropdownFloars(null);
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
                id={showYearList ? 'inputter' : ''}
                value={englishToPersianNumber(homeflorRooms)}
                onChange={(e) => handleChangeforOneNums(e, sethomeflorRooms)}
                inputMode="numeric"
                onFocus={() => setOpenDropdownFloars('roomInFloar')}
                ref={div3Ref}
                readOnly
              />

                <div className={`homeNumbresInfloor ${showOpenDropdownFloars === 'roomInFloar' ? 'visible' : ''}`} ref={div3DropdownRef}>
                  {unitOptionsPersian.map((homeflorRooms) => (
                    <div
                      key={homeflorRooms}
                      onClick={() => {
                        sethomeflorRooms(String(homeflorRooms));
                        setOpenDropdownFloars(null);
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
                  if (HomeNumberserachBarVal - allHomesserachBarVal - 1 >= 0) {
                    triggerError();
                    return;
                  }
                  const val = `${HomeNumberserachBarVal},${allHomesserachBarVal},${homeflorRoomsserachBarVal}`;
                  AddGoogleLink(`floor:${val}`);
                }
              }}
            >
              تایید
            </button>
            <p className={`floarErrText ${showError ? "visible" : ""}`}>خطا در انتخاب</p>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`floor:${empityValTosend}`)}>نادیده گرفتن</button>
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
                }
              }}
            >
              تایید
            </button>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`condition:${empityValTosend}`)}>نادیده گرفتن</button>
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

            <button
              className="next"
              disabled={
                !withStuffInhome ||
                !anbary ||
                !parking ||
                !asansor ||
                !balkon
              }
              onClick={() => {
                const options = `${withStuffInhome},${anbary},${parking},${asansor},${balkon}`
                if (withStuffInhome || anbary || parking || asansor || balkon) {
                  AddGoogleLink(`options:${options}`);
                }
              }}
            >
              تایید
            </button>

            </div>

            <button className='ignoreVal' onClick={() => AddGoogleLink(`options:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack_options" onClick={trimPathToRoot}>بازگشت</button>
            <div className='oneBack_options_parents'></div>
          </div>
        )}

        {mode === 'storeWaterGasWater' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
            <p className="showInput">اب:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setwaterStore('t')}
                  checked={waterStore === 't'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setwaterStore('f')}
                  checked={waterStore === 'f'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">برق:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setelectrycityStrore('t')}
                  checked={electrycityStrore === 't'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setelectrycityStrore('f')}
                  checked={electrycityStrore === 'f'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">گاز:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setgasStore('t')}
                  checked={gasStore === 't'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setgasStore('f')}
                  checked={gasStore === 'f'}
                />
                ندارد
              </label>
            </div>

            <button
              className="next"
              disabled={
                !electrycityStrore ||
                !waterStore ||
                !gasStore
              }
              onClick={() => {
                const storeWaterGasWater = `${electrycityStrore},${waterStore},${gasStore}`
                if (electrycityStrore || waterStore || gasStore) {
                  AddGoogleLink(`storeWaterGasWater:${storeWaterGasWater}`);
                }
              }}
            >
              تایید
            </button>

            </div>

            <button className='ignoreVal' onClick={() => AddGoogleLink(`options:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack_options" onClick={trimPathToRoot}>بازگشت</button>
            <div className='oneBack_options_parents'></div>
          </div>
        )}

        {mode === 'joinbuild' && (
          <>
            <p className="showInput">درصد مشارکت:</p>
            <div className="input-wrapper" style={{ position: 'relative' }} ref={yearListRef}>
              <input
                id={showJoinbuildDropdown ? 'inputter' : ''}
                type="text"
                value={joinbuild}
                onChange={(e) => handleChangeforOneNums(e, setjoinbuild)}
                inputMode="text"
                onFocus={() => setShowJoinbuildDropdown(true)}
                readOnly
              />

              <div className={`year-dropdown ${showJoinbuildDropdown ? 'visible' : 'hidden'}`} ref={joinbuildDropdownref}>
                {[
                  { key: '70-30', text: 'مالک ۳۰ / ۷۰ سازنده', value: '70/30' },
                  { key: '60-40', text: 'مالک ۴۰ / ۶۰ سازنده', value: '60/40' },
                  { key: '50-50', text: 'مالک ۵۰ / ۵۰ سازنده', value: '50/50' },
                  { key: '40-60', text: 'مالک ۶۰ / ۴۰ سازنده', value: '40/60' },
                  { key: '30-70', text: 'مالک ۷۰ / ۳۰ سازنده', value: '30/70' },
                ].map(({ key, text, value }) => (
                  <div
                    key={key}
                    onClick={() => {
                      setjoinbuild(text);
                      setjoinbuildValue(value);
                      setShowJoinbuildDropdown(false);
                    }}
                    className="conform_buttonYear"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <button
              className="next"
              disabled={!joinbuild}
              onClick={() => {
                AddGoogleLink(`joinbuildpersent:${joinbuildValue}`);
              }}
            >
              تایید
            </button>

            <button className="ignoreVal" onClick={() => AddGoogleLink(`year:${empityValTosend}`)}>
              نادیده گرفتن
            </button>

            <button className="oneBack" onClick={trimPathToRoot}>
              بازگشت
            </button>
          </>
        )}

      </nav>
    </div>
  );
}
