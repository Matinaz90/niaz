import './product.css'

function Product(){
    return (
    <>
        <div id='product-card' className="product-card ">
            <div id='product-card' className="product-card-inner">
                <img src="/product/soren.png" alt="عکس نیاز" className="product-image" />
                <div className="product-info">
                    <p className='niaz-to'>:نیاز به</p>
                    <p className="product-title">خانه اپارتمانی</p>
                    <div>
                        <div className='product-explainDiv' >
                            <p className="product-explain">
                               متر<span className="highlight">120</span>تا<span className="highlight">100</span> متراژ از
                            </p>
                            <p className="product-explain">
                               <span className="highlight">1400</span>تا<span className="highlight">1390</span> سال ساخت از
                            </p>
                            <p className="product-explain">
                               میلیارد <span className="highlight">100</span>تا<span className="highlight">90</span> بودجه
                            </p>
                        </div>
                    </div>
                    <span className="product-date"><p>روز پیش در تهران</p> 1 </span>
                </div>
            </div>
        </div>
        <div id='product-card' className="product-card ">
            <div id='product-card' className="product-card-inner">
                <img src="/product/soren.png" alt="عکس نیاز" className="product-image" />
                <div className="product-info">
                    <p className='niaz-to'>:نیاز به</p>
                    <p className="product-title">خانه اپارتمانی</p>
                    <div>
                        <div className='product-explainDiv' >
                            <p className="product-explain">
                               متر<span className="highlight">120</span>تا<span className="highlight">100</span> متراژ از
                            </p>
                            <p className="product-explain">
                               <span className="highlight">1400</span>تا<span className="highlight">1390</span> سال ساخت از
                            </p>
                            <p className="product-explain">
                               میلیارد <span className="highlight">100</span>تا<span className="highlight">90</span> بودجه
                            </p>
                        </div>
                    </div>
                    <span className="product-date"><p>روز پیش در تهران</p> 1 </span>
                </div>
            </div>
        </div>
    </>
    )
}

export default Product