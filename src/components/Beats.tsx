import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBasketShopping, faUser, faBars, faBattery, faMicrophone, faCartShopping, faArrowRight, faX } from "@fortawesome/free-solid-svg-icons"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css'
import { faBluetooth, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from "react";
import { ProductModel } from "../models/ProductModel";
import { Product } from "./Product";
import { Basket } from "./Basket";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ProductSlice } from "../redux/redusers/ProductSlice";
export function Beats() {

    const logo = require('../media/logo.png')
    const home_img = require('../media/home-img.png')
    const swiper1 = require('../media/swiper1.png')
    const swiper2 = require('../media/swiper2.png')
    const swiper3 = require('../media/swiper3.png')
    const about_img = require('../media/about-img.png')
    const about_bg = require('../media/about-bg.png')
    const sound = require('../media/sound.png')
    const bag = require('../media/bag.png')

    function SubmitHandler(event : React.FormEvent) {
        event.preventDefault()
    }
    

    const [navBackVision, setNavBackVision] = useState(false)
    const [menuVision, setMenuVision] = useState(false)
    const [basketVision, setBasketVision] = useState(false)

    const {products} = useAppSelector(state => state.productReducer)

    function ProductsCount() {
        let productsCount = 0
        products.map(item => productsCount += item.count)
        return productsCount
    }

    function NavBackChanger() {
        if(window.scrollY >= 50) {
            setNavBackVision(true)
        }
        else {
            setNavBackVision(false)
        }
    }

    window.addEventListener('scroll', NavBackChanger)

    const navStyle = navBackVision? 'navigation active' : 'navigation'
    const menuStyle = menuVision? 'burger-menu show' : 'burger-menu hide'
    const basketStyle = basketVision? 'basket show' : 'basket hide'

    const [productsMain, setProductsMain] = useState<ProductModel[]> ([
        {
            id: 1,
            name : 'Blue phones',
            price : 256,
            img : require('../media/product1.png'),
            count: 1
        },
        {
            id: 2,
            name : 'Green phones',
            price : 226,
            img : require('../media/product2.png'),
            count: 1
        },
        {
            id: 3,
            name : 'Red phones',
            price : 238,
            img : require('../media/product3.png'),
            count: 1
        },
    ])
    // const dispatch = useAppDispatch()
    // const {busketProducts} = ProductSlice.actions

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
      }, [products])

    // useEffect(() => {
    //     if (localStorage.getItem('products') != null) {
    //       const raw : any = localStorage.getItem('todos') || []
    //       JSON.parse(raw).map((item : ProductModel) => dispatch(busketProducts(item)))
    //       console.log(raw)
    //     }
    //   }, [])
    
    return (
        <>
        <div className="wrapper">
            <div className={menuStyle}>
                <FontAwesomeIcon onClick={() => setMenuVision(false)} className="menu-closer" icon={faX}></FontAwesomeIcon>
                <Link className='burger-menu__item' to='home' smooth={true} duration={1000}>
                    Home
                </Link>
                <Link className='burger-menu__item' to='collection' smooth={true} duration={1000}>
                    Collection
                </Link>
                <Link className='burger-menu__item' to='about' smooth={true} duration={1000}>
                    About
                </Link>
                <Link className='burger-menu__item' to='product' smooth={true} duration={1000}>
                    Product
                </Link>
                <Link className='burger-menu__item' to='content' smooth={true} duration={1000}>
                    Content
                </Link>
                <Link className='burger-menu__item' to='subscribe' smooth={true} duration={1000}>
                    Subscribe
                </Link>
            </div>
            <div className="home" id="home">
                    <nav className={navStyle}>
                        <div className="container ">
                            <div className="navigation-list">
                                <Link className='navigation-list__item' to='home' smooth={true} duration={1000}>
                                    <img src={logo} alt="" />
                                </Link>
                                <div className="navigation__btns">
                                    <Link className='navigation-list__item-center' to='home' smooth={true} duration={1000}>
                                        <div className="home-circle">
                                            <FontAwesomeIcon className='nav-icon' icon={faMagnifyingGlass} />
                                        </div>
                                    </Link>
                                    <div className='navigation-list__item-center' onClick={() => setBasketVision(prev => !prev)}>
                                        <div className="home-circle">
                                            <FontAwesomeIcon className='nav-icon' icon={faBasketShopping} />
                                            <div className="basket-count">
                                                <p>{ProductsCount()}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className='navigation-list__item-center' to='home' smooth={true} duration={1000}>
                                        <div className="home-circle">
                                            <FontAwesomeIcon className='nav-icon' icon={faUser} />
                                        </div>
                                    </Link>
                                </div>
                                <div className="circle" onClick={() => setMenuVision(true)}>
                                    <FontAwesomeIcon className='nav-icon burger' icon={faBars} />
                                </div>
                            </div>
                        </div>
                        <Basket BasketHide={() => setBasketVision(false)} basketClass={basketStyle} products={products}/>
                    </nav>
                
                <div className="container home-center">
                    <div className="home-center__left">
                        <img src={home_img} alt="" />
                    </div>
                    <div className="home-center__right">
                        <h4>HEAR IT. FEEL IT</h4>
                        <h1>MOVE<br/>WITH THE<br/>MUSIC</h1>
                        <div className="home-prices">
                            <div className="home-price">
                                <h3>$ 435</h3>
                            </div>
                            <div className="home-price">
                                <h3>$ 465</h3>
                            </div>
                        </div>
                        <button className="home-center__btn">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="collection" id="collection">
                <div className="container">
                    <h2>
                    Our Latest<br />colour collection 2021
                    </h2>
                    <div className="collection__slider">
                        <Swiper modules={[Autoplay, Pagination, Navigation]}
                            navigation
                            autoplay = { { delay: 2500}}
                            pagination = {{ clickable: true }}
                            slidesPerView = {1}
                            centeredSlides= {true}
                            
                            rewind = {true}
                            >
                            
                            <SwiperSlide>
                                <div className="collection__slide">
                                    <img className="slider__img" src={swiper1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection__slide">
                                    <img className="slider__img" src={swiper2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection__slide">
                                    <img className="slider__img" src={swiper3} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="about" id="about">
                <div className="container about-container">
                    <div className="about-text">
                        <h2>Good headphones<br />and loud music is all<br />you need</h2>
                        <div className="about-text__item">
                            <div className ='about-logo__border'>
                                <div className="about-logo">
                                    <FontAwesomeIcon className="about-icon" icon={faBattery}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="about-item__text">
                                <h6>Battery</h6>
                                <p className="about-info">Battery 6.2V-AAC codec</p>
                                <p className="about-more">Lern More</p>
                            </div>
                        </div>
                        <div className="about-text__item">
                            <div className ='about-logo__border'>
                                <div className="about-logo">
                                    <FontAwesomeIcon className="about-icon" icon={faBluetooth}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="about-item__text">
                                <h6>Bluetooth</h6>
                                <p className="about-info">Battery 6.2V-AAC codec</p>
                                <p className="about-more">Lern More</p>
                            </div>
                        </div>
                        <div className="about-text__item">
                            <div className ='about-logo__border'>
                                <div className="about-logo">
                                    <FontAwesomeIcon className="about-icon" icon={faMicrophone}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="about-item__text">
                                <h6>Microphone</h6>
                                <p className="about-info">Battery 6.2V-AAC codec</p>
                                <p className="about-more">Lern More</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-img">
                        <img className="about-headphones" src={about_img} alt="" />
                        <img className="about-bg" src={about_bg} alt="" />
                        <img className="about-sound1" src={sound} alt="" />
                        <img className="about-sound2" src={sound} alt="" />
                    </div>
                </div>
            </div>
            <div className="product" id="product">
                <div className="container product-container">
                    <div className="product__text">
                        <h2>Our Latest Product</h2>
                        <p className="product-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis<br />nunc ipsum aliquam, ante.</p>
                    </div>
                    <div className="product__items">
                        {productsMain.map(product => <Product product={product} key={product.id} ></Product>)}
                    </div>
                </div>
            </div>
            <div className="content" id="content">
                <div className="container content-container">
                    <div className="content__img">
                        <img src={bag} alt="" />
                    </div>
                    <div className="content__text">
                        <h2>Whatever you get<br />in the box</h2>
                        <div className="content-params">
                            <div className="content-param">
                                <div className="param-arrow">
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                                <p>5A Charger</p>
                            </div>
                            <div className="content-param">
                                <div className="param-arrow">
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                                <p>Extra battery</p>
                            </div>
                            <div className="content-param">
                                <div className="param-arrow">
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                                <p>Sophisticated bag</p>
                            </div>
                            <div className="content-param">
                                <div className="param-arrow">
                                    <FontAwesomeIcon className="arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                                <p>User manual guide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subscribe" id="subscribe">
                {/* <div className="subscribe__backgrund"></div> */}
                <div className="container subscribe-container">
                    <form onSubmit={SubmitHandler} className="subscribe-form" action="">
                        <h2>Subscribe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur </p>
                        <div className="subscribe__inp-btn">
                            <input placeholder="Enter Your email address" type="text" name="" id="" />
                            <button>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-items" >
                        <div className="footer-item centered">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer-item">
                            <div className="footer-links">
                                <Link className="footer-link" to="home" smooth={true} duration={1000}>Home</Link>
                                <Link className="footer-link" to="about" smooth={true} duration={1000}>About</Link>
                                <Link className="footer-link" to="product" smooth={true} duration={1000}>Product</Link>
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="footer-icons">
                                <Link className='navigation-list__item-center' to='' smooth={true} duration={1000}>
                                    <div className="home-circle">
                                        <FontAwesomeIcon className='nav-icon' icon={faInstagram} />
                                    </div>
                                </Link>
                                <Link className='navigation-list__item-center' to='' smooth={true} duration={1000}>
                                    <div className="home-circle">
                                        <FontAwesomeIcon className='nav-icon' icon={faTwitter} />
                                    </div>
                                </Link>
                                <Link className='navigation-list__item-center' to='' smooth={true} duration={1000}>
                                    <div className="home-circle">
                                        <FontAwesomeIcon className='nav-icon' icon={faFacebook} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div></>
    )
}