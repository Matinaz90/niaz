import { useState } from 'react';
import './AddNiaz.css'


function CreateNiaz(){
  const [mode, setMode] = useState('default');

  return (
  <>
    <div>
      {mode === 'default' && (
        <div className='mainAddNiazdiv'>
          {mode === 'default' && (
            <div className='createNiazStartButtons'>
              <p> : نیاز شما</p>
              <a onClick={setMode('shareBuild')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> مشارکت ساخت</a>
              <a onClick={setMode('aparteman')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اپارتمان</a>
              <a onClick={setMode('villa')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> ویلایی</a>
              <a onClick={setMode('rent')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اجاره</a>
              <a onClick={setMode('store')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img>تجاری</a>
            </div>
          )}
        </div>
      )}
      {mode === 'shareBuild' && (
        <div className='mainAddNiazdiv'>
          {mode === 'default' && (
            <div className='createNiazStartButtons'>
              <p> : نیاز شما</p>
              <a onClick={setMode('shareBuild')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> مشارکت ساخت</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اپارتمان</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> ویلایی</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اجاره</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img>تجاری</a>
            </div>
          )}
        </div>
      )}
      {mode === 'aparteman' && (
        <div>
          <div>نیاز دارم به یک اپارتمان</div>
          <div>از x تا x متر</div>
          <div>از x تا x  اتاق</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {mode === 'villa' && (
        <div className='mainAddNiazdiv'>
          {mode === 'default' && (
            <div className='createNiazStartButtons'>
              <p> : نیاز شما</p>
              <a onClick={setMode('shareBuild')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> مشارکت ساخت</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اپارتمان</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> ویلایی</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اجاره</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img>تجاری</a>
            </div>
          )}
        </div>
      )}
      {mode === 'rent' && (
        <div className='mainAddNiazdiv'>
          {mode === 'default' && (
            <div className='createNiazStartButtons'>
              <p> : نیاز شما</p>
              <a onClick={setMode('shareBuild')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> مشارکت ساخت</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اپارتمان</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> ویلایی</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اجاره</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img>تجاری</a>
            </div>
          )}
        </div>
      )}
      {mode === 'store' && (
        <div className='mainAddNiazdiv'>
          {mode === 'default' && (
            <div className='createNiazStartButtons'>
              <p> : نیاز شما</p>
              <a onClick={setMode('shareBuild')}><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> مشارکت ساخت</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اپارتمان</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> ویلایی</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img> اجاره</a>
              <a><img src='/top-arrow-white.png' className='createNiazStartArrow'></img>تجاری</a>
            </div>
          )}
        </div>
      )}
    </div>
  </>)
}

export default CreateNiaz