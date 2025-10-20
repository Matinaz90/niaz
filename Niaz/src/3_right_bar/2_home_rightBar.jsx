import { useState, useRef, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useValidatePathHome } from "../validPath.jsx";
import './2.1_home_rightBar.css';

export default function Home_RightBar() {
  useValidatePathHome()
  const [mode, setMode] = useState('default');
  const navigate = useNavigate();
  const location = useLocation();
  const href = location.pathname;

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
  const [bahr, setbahr] = useState("");
  const [homeflorRooms, sethomeflorRooms] = useState('');
  const [homeCondition, sethomeCondition] = useState('');
  const [withStuffInhome, setwithStuffInhome] = useState("");
  const [anbary, setanbary] = useState("");
  const [parking, setparking] = useState("");
  const [asansor, setasansor] = useState("");
  const [balkon, setbalkon] = useState("");
  const [joinbuild, setjoinbuild] = useState("");
  const [joinbuildValue, setjoinbuildValue] = useState("");
  const [electrycityStrore, setelectrycityStrore] = useState("");
  const [waterStore, setwaterStore] = useState("");
  const [gasStore, setgasStore] = useState("");
  const [categorizestore, setcategorizestore] = useState("");
  const [selectedpriceRent, setselectedpriceRent] = useState('');

  const yearListRef = useRef();
  const roomsInputRef = useRef();
  const [showYearList, setShowYearList] = useState(false);
  const [showOpenDropdownFloars, setOpenDropdownFloars] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const [openRoomDropdown, setopenRoomDropdown] = useState(false);
  const [showJoinbuildDropdown, setShowJoinbuildDropdown] = useState(false);

  const [finalpagejoinbuild1Dropdown, setfinalpagejoinbuild1Dropdown] = useState(false);
  const [finalpagejoinbuild2Dropdown, setfinalpagejoinbuild2Dropdown] = useState(false);
  const [finalpagejoinbuild3Dropdown, setfinalpagejoinbuild3Dropdown] = useState(false);
  const [finalpagejoinbuild5Dropdown, setfinalpagejoinbuild5Dropdown] = useState(false);

  const finalpagejoinbuild1Ref = useRef(null)
  const finalpagejoinbuild2Ref = useRef(null)
  const finalpagejoinbuild3Ref = useRef(null)
  const finalpagejoinbuild5Ref = useRef(null)

  const [finalpageaparteman1Dropdown, setfinalpageaparteman1Dropdown] = useState(false);
  const [finalpageaparteman2Dropdown, setfinalpageaparteman2Dropdown] = useState(false);
  const [finalpageaparteman3Dropdown, setfinalpageaparteman3Dropdown] = useState(false);
  const [finalpageaparteman4Dropdown, setfinalpageaparteman4Dropdown] = useState(false);
  const [finalpageaparteman5Dropdown, setfinalpageaparteman5Dropdown] = useState(false);
  const [finalpageaparteman6Dropdown, setfinalpageaparteman6Dropdown] = useState(false);
  const [finalpageaparteman7Dropdown, setfinalpageaparteman7Dropdown] = useState(false);
  const [finalpageaparteman8Dropdown, setfinalpageaparteman8Dropdown] = useState(false);

  const finalpageaparteman1Ref = useRef(null);
  const finalpageaparteman2Ref = useRef(null);
  const finalpageaparteman3Ref = useRef(null);
  const finalpageaparteman4Ref = useRef(null);
  const finalpageaparteman5Ref = useRef(null);
  const finalpageaparteman6Ref = useRef(null);
  const finalpageaparteman7Ref = useRef(null);
  const finalpageaparteman8Ref = useRef(null);

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

  const empityValTosend = 'e'
  const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
  const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  const joinbuildpersentoptions = [
    { key: '70-30', text: 'مالک ۳۰ / ۷۰ سازنده', value: '70-30' },
    { key: '60-40', text: 'مالک ۴۰ / ۶۰ سازنده', value: '60-40' },
    { key: '50-50', text: 'مالک ۵۰ / ۵۰ سازنده', value: '50-50' },
    { key: '40-60', text: 'مالک ۶۰ / ۴۰ سازنده', value: '40-60' },
    { key: '30-70', text: 'مالک ۷۰ / ۳۰ سازنده', value: '30-70' },
  ];

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
    setbahr('');
    setjoinbuild('');
    setjoinbuildValue('');
    setelectrycityStrore('');
    setwaterStore('');
    setgasStore('');
    setcategorizestore('');
    setselectedpriceRent('');
  };

  const closeAllDropdowns = () => {
    setShowYearList(false);
    setopenRoomDropdown(false);
    setOpenDropdownFloars(null);
    setShowJoinbuildDropdown(false);
    setfinalpagejoinbuild5Dropdown(false);
    setfinalpagejoinbuild1Dropdown(false);
    setfinalpagejoinbuild2Dropdown(false);
    setfinalpagejoinbuild3Dropdown(false);
    setfinalpageaparteman1Dropdown(false);
    setfinalpageaparteman2Dropdown(false);
    setfinalpageaparteman3Dropdown(false);
    setfinalpageaparteman4Dropdown(false);
    setfinalpageaparteman5Dropdown(false);
    setfinalpageaparteman6Dropdown(false);
    setfinalpageaparteman7Dropdown(false);
    setfinalpageaparteman8Dropdown(false);
    finalPageSearchBarVal();
  }

  useEffect(() => {
    if (href.includes('/home')) {
      if (href.includes('/joinbuild')) {
        if(href.includes('price:')){
          finalPageSearchBarVal();
          setMode('finalpagejoinbuild');
        } else if (href.includes('joinbuildpersent:')) {
          setMode('pricehome');
        } else if (href.includes('face:')) {
          setMode('joinbuild');
        } else if (href.includes('meter:')) {
          setMode('waylookhome');
        } else {
          setMode('MeterageId');
        }
      }  else if (href.includes('/aparteman')) {
        if(href.includes('price:')){
          setMode('finalpageaparteman');
          finalPageSearchBarVal()
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
          setMode('finalpage');
          finalPageSearchBarVal()
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
          setMode('finalpage');
          finalPageSearchBarVal()
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
          setMode('finalpage');
          finalPageSearchBarVal()
        } else if (href.includes('categorizestore:')) {
          setMode('pricehome');
        } else if (href.includes('condition:')){
          setMode('categorizestore')
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
    
    if (raw == 0) return
    setpriceRecommended1(englishToPersianNumber(price) + ' میلیون');
    setpriceRecommended2(englishToPersianNumber(price) + ' میلیارد');
  };

  useEffect(() => {
    const handleClick = (event) => {
      const refs = [
        joinbuildDropdownref,
        div1Ref,
        div2Ref,
        div3Ref,
        div1DropdownRef,
        div2DropdownRef,
        div3DropdownRef,
        divRoomDropdownRef,
        finalpagejoinbuild1Ref,
        finalpagejoinbuild2Ref,
        finalpagejoinbuild3Ref,
        finalpagejoinbuild5Ref,
        finalpageaparteman1Ref,
        finalpageaparteman2Ref,
        finalpageaparteman3Ref,
        finalpageaparteman4Ref,
        finalpageaparteman5Ref,
        finalpageaparteman6Ref,
        finalpageaparteman7Ref,
        finalpageaparteman8Ref,
      ];

      const clickedInside = refs.some(ref => ref.current?.contains(event.target));

      if (!clickedInside) {
        setShowYearList(false);
        setopenRoomDropdown(false);
        setOpenDropdownFloars(null);
        setShowJoinbuildDropdown(false);
        setfinalpagejoinbuild1Dropdown(false);
        setfinalpagejoinbuild2Dropdown(false);
        setfinalpagejoinbuild3Dropdown(false);
        setfinalpagejoinbuild5Dropdown(false);
        setfinalpageaparteman1Dropdown(false);
        setfinalpageaparteman2Dropdown(false);
        setfinalpageaparteman3Dropdown(false);
        setfinalpageaparteman4Dropdown(false);
        setfinalpageaparteman5Dropdown(false);
        setfinalpageaparteman6Dropdown(false);
        setfinalpageaparteman7Dropdown(false);
        setfinalpageaparteman8Dropdown(false);
        finalPageSearchBarVal();
      };
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);


    useEffect(() => {
    const handleClick1 = (event) => {
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
        roomsInputRef
      ];

      const clickedInside = refs.some(ref => ref.current?.contains(event.target));

      if (!clickedInside) {
        setShowYearList(false);
        setopenRoomDropdown(false);
        setOpenDropdownFloars(null);
        setShowJoinbuildDropdown(false);
      };
    };

    document.addEventListener('mousedown', handleClick1);
    return () => document.removeEventListener('mousedown', handleClick1);
  }, []);

  const AddLikemilion = (price) => {
    if(price == 0) return
          setPrice(price + '000000');
          setpriceRecommended1();
          setpriceRecommended2();
  };

  const AddLikemiliard = (price) => {
    if(price == 0) return
      setPrice(price + '000000000');
      setpriceRecommended1();
      setpriceRecommended2();
  };

  const AddLikemilionrent = (priceValue, rentIndex) => {
    if(priceValue == 0) return
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
    if(priceValue == 0) return
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

  const triggerError = (text) => {
    setShowError(true);
    setShowErrorText(text);
    setTimeout(() => {
      setShowError(false);
      setShowErrorText('');
    }, 2000);
  };
  
  const updatePathParam = (key, value) => {
    const segments = href.split("/");

    const updatedSegments = segments.map(seg => {
      if (seg.startsWith(`${key}:`)) {
        return `${key}:${value}`;
      }
      return seg;
    });

    const keyExists = segments.some(seg => seg.startsWith(`${key}:`));
    if (!keyExists) updatedSegments.push(`${key}:${value}`);

    const newPath = updatedSegments.join("/");
    navigate(newPath);
  };

  const finalPageSearchBarVal = () => {
    const getVal = (key) =>
      href.split("/").find(seg => seg.startsWith(`${key}:`))?.split(":")[1] || null;

    let price = getVal("price"); if (price == 'e') price = '';
    let meter = getVal("meter"); if (meter == 'e') meter = '';
    let faceSeg = getVal("face")?.split(",") || [];
    let direction = faceSeg[0] || null;
    let bahr = faceSeg[1] || null;

    if (href.includes('joinbuild')) {
        if(href.includes('price')){
          const joinbuildval = getVal("joinbuildpersent");
          const foundOption = joinbuildpersentoptions.find(opt => opt.value === joinbuildval) || '';
          setjoinbuild(foundOption.text);
          setPrice(price);
          setMeterage(meter);
          sethomeface(direction);
          setbahr(bahr);
        }
    } else if(href.includes('aparteman')){
        if(href.includes('price')){
        let rooms = getVal("rooms"); if (rooms == 'e') rooms = ''
        let condition = getVal("condition"); if (rooms == 'e') condition = ''
        let year = getVal("year"); if (year == 'e') year = ''

        let flowaerFullVal = getVal("face")?.split(",") || []; if(flowaerFullVal == 'e') flowaerFullVal = []
        const flower1 = flowaerFullVal[0] || null;
        const flower2 = flowaerFullVal[1] || null;
        const flower3 = flowaerFullVal[2] || null;

        setPrice(price);
        setMeterage(meter);
        sethomeface(direction);
        setbahr(bahr);
        setroomsInHome(rooms);
        sethomeCondition(condition)
        setYearBuilt(year)

        sethomeHomeNumber(flower1)
        sethomeflorRooms(flower2)
        sethomeHomeNumber(flower3)
      }
      

    } else if(href.includes('villa')){

    } else if(href.includes('rent')){

    } else if(href.includes('store')){
  };
  


  };

  const openDropdown = (val, ref, setDropdownState) => {
    val()
    setDropdownState(true);
  }

  return (
    <div id="rightBar" className={`right_bar ${isRightBarOpen ? 'open' : ''}`}>
      <nav className="right-bar-nav">
        {mode === 'default' && (
          <div className='optionDiv'>
          <div className='optionDivchildFullScreen'>
              <a onClick={() => {AddGoogleLink('joinbuild');}}>مشارکت ساخت</a>
              <a onClick={() => {AddGoogleLink('aparteman');}}>اپارتمان</a>
              <a onClick={() => {AddGoogleLink('villa');}}>ویلایی</a>
              <a onClick={() => {AddGoogleLink('rent');}}>اجاره</a>
              <a onClick={() => {AddGoogleLink('store');}}>تجاری</a>
            </div>
          </div>
        )}

        {mode === 'pricehome' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
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
                if (price >= 0 && price <= 100000000000) {
                  AddGoogleLink(`price:${price}`);
                } else {
                  triggerError("عدد وارد شده بیش از حد مجاز است.");
                }
              }}
            >
              تایید
              <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
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
          </div>
            
            <button className='ignoreVal' onClick={() => AddGoogleLink(`price:${empityValTosend}`)}>نادیده گرفتن</button>\
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </div>
        )}

        {mode === 'pricehomerRent' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
            <p className="showInput">ودیعه:</p>

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
              disabled={
                price === '' ||
                price2 === '' ||
                isNaN(Number(price)) ||
                isNaN(Number(price2))}
              onClick={() => {
                if(price >= 0 && price <= 100000000000){
                  if(price2 >= 0 && price2 <= 100000000000){
                    AddGoogleLink(`pricerent:${price + ',' + price2}`);
                  } else {
                    triggerError("اجاره وارد بیش از حد مجاز است.");
                  } 
                } else {
                  triggerError("ودیعه وارد بیش از حد مجاز است.");
                }
              }}
            >
              تایید
            <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
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
          </div>

            <button className="ignoreVal" onClick={() => AddGoogleLink(`pricerent:${empityValTosend}`)}>
              نادیده گرفتن
            </button>

            <button className="oneBack" onClick={trimPathToRoot}>
              بازگشت
            </button>
          </div>
        )}

        {mode === 'MeterageId' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
            <p className="showInput">متراژ:</p>
            <input
              type="text"
              value={englishToPersianNumber(meterage)}
              onChange={(e) => handleChangeforOneNums(e, setMeterage)}
              inputMode="numeric"
            />
            <button
              className="next"
              disabled={meterage === '' || isNaN(Number(meterage))}
              onClick={() => {
                if (meterage >= 0 && meterage <= 10000) {
                  AddGoogleLink(`meter:${meterage}`);
                } else {
                  triggerError("عدد وارد شده بیش از حد مجاز است.");
                }
              }}
            >
              تایید
            <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
            </button>
          </div>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`meter:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </div>
        )}

        {mode === 'roomsInHome' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
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
              disabled={roomsInHome === '' || isNaN(Number(roomsInHome))}
              onClick={() => {
                if (roomsInHome >= 0 && roomsInHome <= 100000) {
                  AddGoogleLink(`rooms:${roomsInHome}`);
                } else {
                  triggerError("عدد وارد شده بیش از حد مجاز است.");
                }
              }}
            >
              تایید
            </button>
          </div>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`rooms:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </div>
        )}

        {mode === 'timeCreated' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
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
          </div>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`year:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </div>
        )}

        {mode === 'waylookhome' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
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
                if (!homeface || !bahr) return;
                AddGoogleLink(`face:${homeface},${bahr}`);
              }}
            >
              تایید
            </button>
          </div>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`face:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </div>
        )}

        {mode === 'homeNumbresInfloor' && (
          
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
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
                    triggerError("انتخاب طبقه نامعتبر است.");
                    return;
                  }
                  const val = `${HomeNumberserachBarVal},${allHomesserachBarVal},${homeflorRoomsserachBarVal}`;
                  AddGoogleLink(`floor:${val}`);
                }
              }}
            >
              تایید
            <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
            </button>
          </div>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`floor:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </div>
        )}

        {mode === 'homeCondition' && (
          
          <div className='optionDiv'>

            <div className='optionDivchild'>
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
            </div>
            <button className='ignoreVal' onClick={() => AddGoogleLink(`condition:${empityValTosend}`)}>نادیده گرفتن</button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          
          </div>
        )}

        {mode === 'options' && (
          <div className='optionDiv'>
            
            <div className='optionDivchildOptions'>
            <p className="showInput">مبله:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setwithStuffInhome('Ft')}
                  checked={withStuffInhome === 'Ft'}
                />
                هست
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setwithStuffInhome('Ff')}
                  checked={withStuffInhome === 'Ff'}
                />
                نیست
              </label>
            </div>

            <p className="showInput">پارکینگ:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setparking('Pt')}
                  checked={parking === 'Pt'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setparking('Pf')}
                  checked={parking === 'Pf'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">اسنسور:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setasansor('Et')}
                  checked={asansor === 'Et'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setasansor('Ef')}
                  checked={asansor === 'Ef'}

                />

                ندارد
              </label>
            </div>


            <p className="showInput">انباری:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setanbary('St')}
                  checked={anbary === 'St'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setanbary('Sf')}
                  checked={anbary === 'Sf'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">بالاکن:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setbalkon('Bt')}
                  checked={balkon === 'Bt'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setbalkon('Bf')}
                  checked={balkon === 'Bf'}
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

        {mode === 'categorizestore' && (
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
            <p className="showInput">کاربری مغازه:</p>
            <div className="input-wrapper homeface-wrapper">
              <div className="homeface-row">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setcategorizestore('retail')} 
                  checked={categorizestore === 'retail'}
                />
                فروشگاهی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setcategorizestore('service')}
                  checked={categorizestore === 'service'}
                />
                خدماتی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setcategorizestore('food')}
                  checked={categorizestore === 'food'}
                />
                غذایی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setcategorizestore('workshop')}
                  checked={categorizestore === 'workshop'}
                />
                کارگاهی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setcategorizestore('office')}
                  checked={categorizestore === 'office'}
                />
                اداری
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setcategorizestore('medical')}
                  checked={categorizestore === 'medical'}
                />
                درمانی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => setcategorizestore('educational')}
                  checked={categorizestore === 'educational'}
                />
                آموزشی
              </label>
              </div>
            </div>

            <button
              className="next"
              disabled={!categorizestore}
              onClick={() => {
                if (categorizestore) {
                  AddGoogleLink(`categorizestore:${categorizestore}`);
                }
              }}
            >
              تایید
            </button>

            </div>

            <button className='ignoreVal' onClick={() => AddGoogleLink(`categorizestore:${empityValTosend}`)}>نادیده گرفتن</button>
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
          <div className='optionDiv'>
            
            <div className='optionDivchild'>
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
                  { key: '70-30', text: 'مالک ۳۰ / ۷۰ سازنده', value: '70-30' },
                  { key: '60-40', text: 'مالک ۴۰ / ۶۰ سازنده', value: '60-40' },
                  { key: '50-50', text: 'مالک ۵۰ / ۵۰ سازنده', value: '50-50' },
                  { key: '40-60', text: 'مالک ۶۰ / ۴۰ سازنده', value: '40-60' },
                  { key: '30-70', text: 'مالک ۷۰ / ۳۰ سازنده', value: '30-70' },
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
                AddGoogleLink(`joinbuildpersent:${joinbuildValue}`)
              }}
            >
              تایید
            </button>
          </div>

            <button className="ignoreVal" onClick={() => AddGoogleLink(`joinbuildpersent:${empityValTosend}`)}>
              نادیده گرفتن
            </button>

            <button className="oneBack" onClick={trimPathToRoot}>
              بازگشت
            </button>
          </div>
        )}
        
        {mode === 'finalpagejoinbuild' && (
          <div className='optionDiv'>
            
            <div className='optionDivchildfinalPageMain'>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpagejoinbuild2Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder={`متراژ`}
                onClick={() => {openDropdown(closeAllDropdowns, finalpagejoinbuild2Ref, setfinalpagejoinbuild2Dropdown)}}
                inputMode="text"
                readOnly
              />      

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpagejoinbuild2Dropdown ? 'visible' : 'hidden'}`} ref={finalpagejoinbuild2Ref}>

                <div className='optionDiv'>
                  
                  <div className='optionDivchildfinalPage'>
                  <p className="showInput">متراژ:</p>
                  <input
                    type="text"
                    value={englishToPersianNumber(meterage)}
                    onChange={(e) => handleChangeforOneNums(e, setMeterage)}
                    inputMode="numeric"
                  />
                  <button
                    className="next"
                    disabled={meterage === '' || isNaN(Number(meterage))}
                    onClick={() => {
                      if (meterage >= 0 && meterage <= 10000) {
                        updatePathParam("meter", meterage);
                        closeAllDropdowns();
                      } else {
                        triggerError("عدد وارد شده بیش از حد مجاز است.");
                      }
                    }}
                  >
                    تایید
                  <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                </div>
                </div>
              </div>
            </div>

             <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpagejoinbuild3Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder='جهت ساختمان / بحر'
                onClick={() => {openDropdown(closeAllDropdowns, finalpagejoinbuild3Ref, setfinalpagejoinbuild3Dropdown)}}
                inputMode="text"
                readOnly
              />

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpagejoinbuild3Dropdown ? 'visible' : 'hidden'}`} ref={finalpagejoinbuild3Ref}>
                  <div className='optionDivchildfinalPage'>
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
                          checked={bahr == '1'}
                        />
                        ۱ بحر 
                      </label>
                      <label className="homeface-option">
                        <input
                          type="checkbox"
                          onChange={() => setbahr('2')}
                          checked={bahr == '2'}
                        />
                        ۲ بحر
                      </label>
                    </div>
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setbahr('3')}
                        checked={bahr == '3'}
                      />
                      ۳ بحر
                    </label>
                  </div>

                  <button
                    className="next"
                    disabled={!homeface || !bahr}
                    onClick={() => {
                      const val = homeface + "," + bahr
                      updatePathParam("face", val);
                    }}
                  >
                    تایید
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                </div>
              </div>
            </div>

             <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpagejoinbuild5Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder='درصد مشارکت'
                onClick={() => {openDropdown(closeAllDropdowns, finalpagejoinbuild5Ref, setfinalpagejoinbuild5Dropdown)}}
                inputMode="text"
                readOnly
              />

              <span className="dropdown-arrow">{'\u2304'}</span>

                <div className={`finalPage-dropdown ${finalpagejoinbuild5Dropdown ? 'visible' : 'hidden'}`}ref={finalpagejoinbuild5Ref}>

                <div className='optionDiv'>
                  
                  <div className='optionDivchildfinalPage'>
                  <p className="showInput">درصد مشارکت:</p>
                  <div className="input-wrapper" style={{ position: 'relative' }}>
                    <input
                      id={showJoinbuildDropdown ? 'inputter' : ''}
                      type="text"
                      value={joinbuild}
                      onChange={(e) => handleChangeforOneNums(e, setjoinbuild)}
                      inputMode="text"
                      onFocus={() => setShowJoinbuildDropdown(true)}
                      readOnly
                    />

                    <div className={`year-dropdown-finalPage ${showJoinbuildDropdown ? 'visible' : 'hidden'}`} style={{ position: 'relative' }} ref={joinbuildDropdownref}>
                      {joinbuildpersentoptions.map(({ key, text, value }) => (
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
                        updatePathParam("joinbuildpersent", joinbuildValue);
                        closeAllDropdowns();
                    }}
                  >
                    تایید
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                </div>
                </div>
              </div>
              
            </div>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpagejoinbuild1Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder='قیمت'
                onClick={() => {openDropdown(closeAllDropdowns, finalpagejoinbuild1Ref, setfinalpagejoinbuild1Dropdown)}}
                inputMode="text"
                readOnly
              />

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpagejoinbuild1Dropdown ? 'visible' : 'hidden'}`} ref={finalpagejoinbuild1Ref}>
                <div className='optionDivchildfinalPage'>
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
                      if (price >= 0 && price <= 100000000000) {
                        updatePathParam("price", price);
                        closeAllDropdowns();
                      } else {
                        triggerError("عدد وارد شده بیش از حد مجاز است.");
                      }
                    }}
                  >
                    تایید
                    <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>

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
                </div>
              </div>
            </div> 

          </div>

            <button className="oneBack" onClick={() =>navigate("/")}>
              بازگشت به صفحه اصلی
            </button>
          </div>
        )}

        {mode === 'finalpageaparteman' && (
          <div className='optionDiv'>
            
          <div className='optionDivchildfinalPageMain'>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman1Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder={`متراژ`}
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman1Ref, setfinalpageaparteman1Dropdown)}}
                inputMode="text"
                readOnly
              />      

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman1Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman1Ref}>

                <div className='optionDiv'>
                  
                  <div className='optionDivchildfinalPage'>
                  <p className="showInput">متراژ:</p>
                  <input
                    type="text"
                    value={englishToPersianNumber(meterage)}
                    onChange={(e) => handleChangeforOneNums(e, setMeterage)}
                    inputMode="numeric"
                  />
                  <button
                    className="next"
                    disabled={meterage === '' || isNaN(Number(meterage))}
                    onClick={() => {
                      if (meterage >= 0 && meterage <= 10000) {
                        updatePathParam("meter", meterage);
                        closeAllDropdowns();
                      } else {
                        triggerError("عدد وارد شده بیش از حد مجاز است.");
                      }
                    }}
                  >
                    تایید
                  <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                </div>
                </div>
              </div>
            </div>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman2Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder={`اتاق`}
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman2Ref, setfinalpageaparteman2Dropdown)}}
                inputMode="text"
                readOnly
              />      

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman2Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman2Ref}>
                <div className='optionDiv'>
                  
                  <div className='optionDivchildfinalPage'>
                  <p className="showInput">اتاق ها:</p>
                  <div className="input-wrapper" style={{ position: 'relative' }} ref={roomsInputRef}>
                <div className="floor-info">
                  <input
                    type="text"
                    value={englishToPersianNumber(roomsInHome)}
                    id={openRoomDropdown ? 'inputter' : ''}
                    onChange={(e) => handleChangeforOneNums(e, setroomsInHome)}
                    inputMode="numeric"
                    onFocus={() => setopenRoomDropdown(true)}
                    readOnly
                  />

                  <div className={`year-dropdown-finalPage ${openRoomDropdown ? 'visible' : ''}`} style={{ position: 'relative' }}  ref={divRoomDropdownRef}>
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
                  </div>

                  <button
                    className="next"
                    disabled={roomsInHome === '' || isNaN(Number(roomsInHome))}
                    onClick={() => {
                      if (roomsInHome >= 0 && roomsInHome <= 100000) {
                        AddGoogleLink(`rooms:${roomsInHome}`);
                      } else {
                        triggerError("عدد وارد شده بیش از حد مجاز است.");
                      }
                    }}
                  >
                    تایید
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                </div>
                </div>


              </div>
            </div>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman3Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder={`سال ساخت`}
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman3Ref, setfinalpageaparteman3Dropdown)}}
                inputMode="text"
                readOnly
              />      

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman3Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman3Ref}>
                <div className='optionDiv'>
                  
                  <div className='optionDivchildfinalPage'>
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
                    <div className={`year-dropdown-finalPage ${showYearList ? 'visible' : ''}`}>
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
                  <button className='hideButton' onClick={() => {closeAllDropdowns();}}>پنهان کردن</button>
                </div>
                </div>


              </div>
            </div>

             <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman7Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder='جهت ساختمان / بحر'
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman7Ref, setfinalpageaparteman7Dropdown)}}
                inputMode="text"
                readOnly
              />

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman7Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman7Ref}>
                  <div className='optionDivchildfinalPage'>
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
                          checked={bahr == '1'}
                        />
                        ۱ بحر 
                      </label>
                      <label className="homeface-option">
                        <input
                          type="checkbox"
                          onChange={() => setbahr('2')}
                          checked={bahr == '2'}
                        />
                        ۲ بحر
                      </label>
                    </div>
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setbahr('3')}
                        checked={bahr == '3'}
                      />
                      ۳ بحر
                    </label>
                  </div>

                  <button
                    className="next"
                    disabled={!homeface || !bahr}
                    onClick={() => {
                      const val = homeface + "," + bahr
                      updatePathParam("face", val);
                    }}
                  >
                    تایید
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                </div>
              </div>
            </div>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman4Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder={`طبقه`}
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman4Ref, setfinalpageaparteman4Dropdown)}}
                inputMode="text"
                readOnly
              />      

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman4Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman4Ref}>
          
                <div className='optionDiv'>
                  
                  <div className='optionDivchildfinalPage'>
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

                  <div className={`year-dropdown-finalPage ${showOpenDropdownFloars === 'floor' ? 'visible' : ''}`} ref={div1DropdownRef}>
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

                  <div className={`year-dropdown-finalPage ${showOpenDropdownFloars === 'all' ? 'visible' : ''}`} ref={div2DropdownRef}>
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

                      <div className={`year-dropdown-finalPage ${showOpenDropdownFloars === 'roomInFloar' ? 'visible' : ''}`} ref={div3DropdownRef}>
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
                          triggerError("انتخاب طبقه نامعتبر است.");
                          return;
                        }
                        const val = `${HomeNumberserachBarVal},${allHomesserachBarVal},${homeflorRoomsserachBarVal}`;
                        AddGoogleLink(`floor:${val}`);
                      }
                    }}
                  >
                    تایید
                  <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                </div>
                </div>


              </div>
            </div>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman5Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder={`وضعیت واحد`}
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman5Ref, setfinalpageaparteman5Dropdown)}}
                inputMode="text"
                readOnly
              />      

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman5Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman5Ref}>          
                <div className='optionDiv'>

                  <div className='optionDivchildfinalPage'>
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
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                  </div>
                
                </div>


              </div>
            </div>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman6Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder={`جزئیات خانه`}
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman6Ref, setfinalpageaparteman6Dropdown)}}
                inputMode="text"
                readOnly
              />      

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman6Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman6Ref}>
                <div className='optionDiv'>
                  
                  <div className='optionDivchildOptionsfinalPage'>
                  <p className="showInput">مبله:</p>
                  <div className="input-wrapper homeface-wrapper">
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setwithStuffInhome('Ft')}
                        checked={withStuffInhome === 'Ft'}
                      />
                      هست
                    </label>
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setwithStuffInhome('Ff')}
                        checked={withStuffInhome === 'Ff'}
                      />
                      نیست
                    </label>
                  </div>

                  <p className="showInput">پارکینگ:</p>
                  <div className="input-wrapper homeface-wrapper">
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setparking('Pt')}
                        checked={parking === 'Pt'}
                      />
                      دارد
                    </label>
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setparking('Pf')}
                        checked={parking === 'Pf'}
                      />
                      ندارد
                    </label>
                  </div>

                  <p className="showInput">اسنسور:</p>
                  <div className="input-wrapper homeface-wrapper">
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setasansor('Et')}
                        checked={asansor === 'Et'}
                      />
                      دارد
                    </label>
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setasansor('Ef')}
                        checked={asansor === 'Ef'}

                      />

                      ندارد
                    </label>
                  </div>


                  <p className="showInput">انباری:</p>
                  <div className="input-wrapper homeface-wrapper">
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setanbary('St')}
                        checked={anbary === 'St'}
                      />
                      دارد
                    </label>
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setanbary('Sf')}
                        checked={anbary === 'Sf'}
                      />
                      ندارد
                    </label>
                  </div>

                  <p className="showInput">بالاکن:</p>
                  <div className="input-wrapper homeface-wrapper">
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setbalkon('Bt')}
                        checked={balkon === 'Bt'}
                      />
                      دارد
                    </label>
                    <label className="homeface-option">
                      <input
                        type="checkbox"
                        onChange={() => setbalkon('Bf')}
                        checked={balkon === 'Bf'}
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
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>
                  <div></div>

                  </div>
                </div>

              </div>
            </div>

            <div className="input-wrapper" style={{ position: 'relative' }}>
              <input
                id={finalpageaparteman8Dropdown ? 'inputter' : 'closedInputPlacefolder'}
                type="text"
                placeholder='قیمت'
                onClick={() => {openDropdown(closeAllDropdowns, finalpageaparteman8Ref, setfinalpageaparteman8Dropdown)}}
                inputMode="text"
                readOnly
              />

              <span className="dropdown-arrow">{'\u2304'}</span>

              <div className={`finalPage-dropdown ${finalpageaparteman8Dropdown ? 'visible' : 'hidden'}`} ref={finalpageaparteman8Ref}>
                <div className='optionDivchildfinalPage'>
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
                      if (price >= 0 && price <= 100000000000) {
                        updatePathParam("price", price);
                        closeAllDropdowns();
                      } else {
                        triggerError("عدد وارد شده بیش از حد مجاز است.");
                      }
                    }}
                  >
                    تایید
                    <p className={`floarErrText ${showError ? "visible" : ""}`}>{showErrorText}</p>
                  </button>
                  <button className='hideButton' onClick={() => closeAllDropdowns()}>پنهان کردن</button>

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
                </div>
              </div>
            </div> 

          </div>

            <button className="oneBack" onClick={() =>navigate("/")}>
              بازگشت به صفحه اصلی
            </button>
          </div>
        )};
        


      </nav>
    </div>
  );
};

