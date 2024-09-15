import { Component } from "react"
import { useNavigate } from "react-router-dom";

export default function Index(){
  const navigate = useNavigate();
    return(
        <>

  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" src="styles.css" />
  <link
    rel="stylesheet"
    href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  />
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    @import url("styles.css");\n    @import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\');\n    @import url(\'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap\');\n\n* {\n    box-sizing: border-box;\n}\n\n*, *::after , *::before {\n    box-sizing: border-box;\n}\n\nhtml,body {\n    height: 100%;\n background: #FFFDD0; \n}\n\nbody {\n    line-height: 24px;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    visibility: visible;\n    font-family: \'Poppins\', sans-serif;\n    color: #5a5a5a;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-weight: 400;\n    margin-top: 0;\n    font-family: "Baloo 2", cursive;\n}\n\nh1 {\n    font-size: 48px;\n    line-height: 1;\n    font-weight: 700;\n}\n\nh2 {\n    font-size: 36px;\n    line-height: 36px;\n}\n\nh3 {\n    font-size: 30px;\n    line-height: 30px;\n}\n\nh4 {\n    font-size: 16px;\n    line-height: 19px;\n    font-weight: 700;\n}\n\nh5 {\n    font-size: 14px;\n    line-height: 18px;\n}\n\nh6 {\n    font-size: 12px;\n    line-height: 14px;\n}\n\np:last-child {\n    margin-bottom: 0;\n}\n\na,button {\n    color: inherit;\n    line-height: inherit;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.btn:focus {\n    box-shadow: none;\n}\n\na,button,img,input,span {\n    transition: all 0.3s ease 0s;\n}\n\n*:focus {\n    outline: none !important;\n}\n\na:focus {\n    color: inherit;\n    outline:none;\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: none;\n}\n\nbutton, \ninput[type = "submit"] {\n    cursor:pointer\n}\n\nimg {\n    max-width: 100%;\n    height: auto; \n    color: black;\n}\n\nul {\n    list-style: outside none none;\n    margin: 0;\n    padding: 0;\n}\n\nnav {\n    display: inline-block;\n    padding: 15px;\n}\n\n.dropdown_links nav {\n    display: block;\n\n}\n\n.home_black_version {\n    background: #FFFDD0;\n}\n\n.header_black .header_top {\n    border-bottom: 1px solid #2d2d2d;\n}\n\n.header_black .social_icons ul li a {\n    background: #2f2f2f;\n    color: #cccccc; \n}\n\n.header_black .social_icons ul li a:hover {\n    background: red;\n}\n\n.header_black .top_right > ul > li::before {\n    background: #2d2d2d;\n}\n\n.header_black .top_right > ul > li:hover > a {\n    color: red;\n}\n\n.header_black .top_right > ul > li > a {\n    color: red;\n}\n\n.header_black .top_right > ul > li > a:not([hred]):not([tabindex]) {\n    color: black;\n    font-weight: bold;\n\n}\n\n.header_black .top_right > ul > li > a:not([hred]):not([tabindex]):hover {\n    color: red;\n}\n\n.header_black .dropdown_language li, \n.header_black .dropdown_currency li,\n.header_black .dropdown_links li {\n    border-bottom: 1px solid #2d2d2d;\n}\n\n.header_black .dropdown_language li a:hover, \n.header_black .dropdown_currency li a:hover,\n.header_black .dropdown_links li a:hover {\n    color: red;\n}\n\n.header_black .dropdown_links {\n    left: -98%;\n}\n\n.social_icons ul li {\n    display: inline-block;\n    margin-left: 5px;\n}\n\n.social_icons ul li:first-child {\n    margin-left: 0;\n}\n\n.social_icons ul li a {\n    background: #ebebeb;\n    color: #aaaaaa;\n    display: block;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border-radius: 50%;\n}\n\n.social_icons ul li a:hover {\n    background:#2f2f2f;\n    color: #2f2f2f;\n}\n\n.top_right > ul > li {\n    display: inline-block;\n    position: relative;\n    padding-left: 20px;\n    margin-left: 20px;\n}\n\n.top_right > ul > li:hover ul.dropdown_currency {\n    top: 100px;\n    opacity: 1;\n    visibility: visible;\n}\n\n.top_right > ul > li:hover ul.dropdown_language, \n.top_right > ul > li:hover .header_black ul.dropdown_currency,\n.header_black .top_right > ul > li:hover ul.dropdown_currency,\n.top_right > ul > li:hover .header_black ul.dropdown_links,\n.header_black .top_right > ul > li:hover ul.dropdown_links {\n    top: 100%;\n    opacity: 1;\n    visibility: visible;\n} \n\n.top_right > ul > li:hover ul.dropdown_links {\n    top: 100%;\n    opacity: 1;\n    visibility: visible;\n}\n\n.top_right > ul > li:first-child {\n    padding-left: 0;\n    margin-left: 0;\n}\n\n.top_right > ul > li::before {\n    position: absolute;\n    content: "";\n    width: 1px;\n    height: 15px;\n    background: red;\n    top: 50%;\n    left: 0px;\n    transform: translateY(-50%);\n}\n\n.top_right > ul > li:first-child::before {\n    display: none;\n}\n\n.top_right > ul > li > a {\n    color: #242424;\n    text-transform: capitalize;\n    line-height: 26px;\n    font-size: 12px;\n    cursor: pointer;\n    display: block;\n    font-weight: 400;\n    padding: 9px 0;\n}\n\n.top_right > ul > li > a i {\n    margin-left: 3px;\n    font-size: 10px;\n}\n\n.dropdown_currency,\n.dropdown_language,\n.dropdown_links,\n.header_black .dropdown_currency,\n.header_black .dropdown_links{\n    position: absolute;\n    background: red;\n    box-shadow: 0 0 5px rgba(0,0,0,0.2);\n    min-width: 200px;\n    text-align: center;\n    top: 125%;\n    transition: all 0.3s ease-out;\n    overflow: hidden;\n    left: -154%;\n    z-index: 9999;\n    padding: 0 15px;\n    border-radius: 5px;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.header_black .dropdown_language,\n.header_black .dropdown_currency,\n.header_black .dropdown_links {\n    background:#242424;\n}\n\n.dropdown_language li a,\n.header_black .dropdown_currency li a \n.header_black .dropdown_links li a {\n    text-transform: capitalize;\n    display: block;\n    font-size: 12px;\n    color: #242424;\n    text-align: center;\n}\n\n.dropdown_language li a:hover,\n.header_black .dropdown_currency li a:hover, \n.header_black .dropdown_links li a:hover {\n    color: black;\n}\n\n.header_black .dropdown_language li:last-child,\n.header_black .dropdown_currency li:last-child,\n.header_black .dropdown_links li:last-child {\n    border-bottom: 0;\n} \n\n.header_black .dropdown_language li a,\n.header_black .dropdown_currency li a, \n.header_black .dropdown_links li a {\n    color: white;\n}\n\n.header_black .dropdown_links {\n    left: -98%;\n}\n\n.dropdown_language li,\n.header_black .dropdown_currency li, \n.header_black .dropdown_links li {\n    border-bottom: 1px solid;\n    line-height: 36px;\n    padding: 5px 0;\n}\n\n.dropdown_language li:last-child,\n.header_black .dropdown_currency li:last-child,\n.header_black .dropdown_links li:last-child {\n    border-bottom: 0;\n}\n\n.dropdown_language li a:hover,\n.header_black .dropdown_currency li a:hover, \n.header_black .dropdown_links li a:hover {\n    color: red;\n}\n\n    /* MIDDLE HEADER */\n\n.header_middle {\n    padding: 40px 0;\n    border-bottom: 1px solid #ebebeb;\n}\n\n.header_black .header_middle {\n    border-bottom: 1px solid #2d2d2d;\n}\n\n.home_contact {\n    display: flex;\n}\n\n.home_contact .contact_box {\n    padding-right: 25px;\n    margin-right: 25px;\n    border-right: 2px solid #cccccc;\n}\n\n.header_black .home_contact {\n    align-items: center;\n}\n\n.header_black .contact_box {\n    margin-left: 15px;\n}\n\n.header_black .contact_box p {\n    color: black;\n    font-size: 14px;\n}\n\n.logo {\n    padding: 0 20px;    \n}\n\n.middle_right {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n\n.search_btn {\n    position: relative;\n}\n\n.search_btn:hover .dropdown_search {\n    opacity: 1;\n    visibility: visible;\n    top: 100%;\n}\n\n.search_btn a {\n    width: 45px;\n    height: 45px;\n    border-radius: 3px;\n    text-align: center;\n    line-height: 45px;\n    border: 1px solid #2d2d2d;\n    color: #ffffff;\n    font-size: 20px;\n    display: block;\n}\n\n.search_btn a:hover {\n    color:#a8741a;\n}\n\n.header_black .search_btn form button {\n    position: absolute;\n    top: 0;\n    right: 10px;\n    border: 0;\n    background: inherit;\n    color: #ffffff;\n    font-size: 20px;\n    height: 100%;\n}\n\n.header_black .search_btn form button:hover{\n    color: #a8741a;\n}\n\n.dropdown_search{\n    position: absolute;\n    right: 0;\n    opacity: 0;\n    visibility: hidden;\n    top: 120%;\n    transition: 0.3s;\n}\n\n.dropdown_search form {\n    position: relative;\n    width: 200px;\n    border: 1px solid #ebebeb;\n    background: #ffffff;\n    z-index: 9;\n}\n\n.dropdown_search form input {\n    border: 0;\n    width: 100%;\n    right: 50px;\n    line-height: 50px;\n    padding: 0 67px 0 10px;\n    background: inherit;\n    font-size: 12px;\n    color: #a4a4a4;\n}\n\n.dropdown_search form button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: #ebebeb;\n    width: 59px;\n    height: 100%;\n    border: 0;\n    border-left: 1px solid #2d2d2d;\n    padding: 0;\n    font-size: 20px;\n    background: none;\n    color: #ffffff;\n}\n\n.header_black .dropdown_search form {\n    background: #242424;\n    border: 1px solid #2d2d2d;\n}\n\n\n/* HEADER DOWN */\n\n.header_bottom.sticky-header.sticky .main_menu_inner {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.header_bottom.sticky-header.sticky .logo_sticky {\n    display: block;\n}\n\n.header_black .header_bottom {\n    border-bottom: 1px solid #2d2d2d;\n}\n\n.sticky-header.sticky {\n    position: fixed;\n    z-index: 99;\n    width: 100%;\n    top: 0; \n    background: rgba(255,255,255,0.9);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.11);\n    animation-name: fadeInDown;\n    animation-duration: 900ms;\n    animation-timing-function: cubic-bezier(0.2,1,0.22,1);\n    animation-delay: 0s;\n    animation-iteration-count: 1;\n    animation-direction: normal;\n    animation-fill-mode: none;\n    animation-play-state: running;\n}\n\n.header_bottom.sticky-header.sticky .main_menu_inner {\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;  \n}\n\n.header_black .sticky-header.sticky {\n    background: rgba(54,63,77,0.9);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.11);\n}\n\n.main_menu_inner {\n    text-align: center;\n}\n\n.logo_sticky {\n    display: none;\n    margin-right: 35px;\n}\n\n.logo_sticky a img {\n    max-width: 120px;\n}\n\n/* Slider Section */ \n\n.single_slider {\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n     background-position: center center;\n    background-size: cover;\n}\n\n.slider_area {\n    margin-bottom: 35px;\n}\n\n.slider_area.owl-carousel .owl-dots {\n    position: absolute;\n    bottom: 20px;\n    width: 100%;\n    text-align: center;\n}\n\n.slider_area.owl-carousel .owl-dots .owl-dot {\n    width: 9px;\n    height: 9px;\n    border-radius: 50%;\n    display: inline-block;\n    background: #242424;\n    margin: 0 5px;\n    transition: 0.3s;\n    position: relative;\n}\n\n.slider_area.owl-carousel .owl-dots .owl-dot.active {\n    transition: 0.3s;\n}\n\n.slider_area.owl-carousel .owl-dots .owl-dot.active::before {\n    position: absolute;\n    content: "";\n    background: #a8741a;\n    width: 13px;\n    height: 13px;\n    left: -3px;\n    top: -3px;\n    border-radius: 50%;\n}\n\n.slider_area .single_slider .row {\n    height: 500px;\n}\n\n.slider_area .slider_content {\n    margin-left: 20px;\n    overflow: hidden;\n}\n\n.slider_white .slider_content p {\n    color: #a8741a;\n    font-size: 18px;\n    margin-bottom: 0;\n    line-height: 22px;\n}\n\n.slider_white .slider_content p.slider_price {\n    color: #ffffff;\n}\n\n.slider_white .slider_content p.slider_price span {\n    color: #a8741a;\n    margin-bottom: 0;\n}\n\n.slider_white .slider_content h1 {\n    color: #FFFDD0;\n    font-weight: 500;\n    margin-bottom: 10px;\n    font-family: cursive;\n    text-decoration:wavy;\n}\n\n@media only screen and (min-width: 1200px) and (max-width : 1600px) {\n    .slider_white .slider_content h1 {\n        font-size: 40px;\n        line-height: 46px;\n        margin-bottom: 8px;\n    }\n}\n\n.slider_white .slider_content span {\n    font-size: 24px;\n    color: #cccccc;\n    margin-bottom: 35px;\n    display: inline-block;\n}\n\n@media only screen and (min-width: 1200px) and (max-width : 1600px) {\n    .slider_white .slider_content span {\n        font-size: 18px;\n        margin-bottom: 25px;\n    }\n}\n\n.slider_white .slider_content a {\n    background: #FFFDD0;\n    margin-top: 30px;\n}\n\n.slider_white .slider_content a:hover {\n    background: red;\n}\n\n@media only screen and (min-width: 1200px) and (max-width : 1600px) {\n    .slider_black .slider_content a {\n        margin-top: 43px;\n    }\n}\n\n.active .slider_content > span {\n    animation-fill-mode: both;\n    animation-duration: 1s;\n    animation-name: fadeInLeft;\n    animation-delay: 0.7s;\n}\n\n.active .slider_content p,\n.active .slider_content h1,\n.active .slider_content a {\n    animation-fill-mode: both;\n    animation-duration: 1s;\n    animation-name: fadeInLeft;\n    animation-delay: 0.3s;\n}\n\n.active .slider_content h1 {\n    animation-delay: 0.6s;\n}\n\n.active .slider_content a {\n    animation-delay: 0.9s;\n}\n\n.slider_content p {\n    font-size: 18px;\n    line-height: 18px;\n    font-weight: 400;\n    color: #242424;\n    margin-bottom: 11px;\n    text-transform: capitalize;\n}\n\n.slider_content h1{\n    font-size: 60px;\n    line-height: 60px;\n    font-weight: 700;\n    color: #212121;\n    text-transform: capitalize;\n    margin-bottom: 50px;\n}\n\n.slider_content p.slider_price {\n    color: #ffffff;\n    font-size: 18px;\n}\n\n.slider_content p.slider_price span {\n    font-size: 22px;\n    font-weight: 500;\n    margin-left: 8px;\n    color: #a8741a;\n    margin-bottom: 0;\n}\n\n.slider_content a {\n    font-weight: 500;\n    margin-top: 25px;\n    color: black;\n    height: 50px;\n    line-height: 50px;\n    padding: 0 35px;\n}\n\n.slider_content a:hover {\n    background: #212121;\n}\n\n.vertical-center {\n    margin-left: 650px;\n    position: absolute;\n    top: 75%;\n    -ms-transform: translateY(-75%);\n    transform: translateY(-75%);\n\n}\n\n.button {\n    background-color: #a8741a;\n    box-shadow: none;\n    color: #ffffff;\n    display: inline-block;\n    height: 45px;\n    line-height: 45px;\n    padding: 0 22px;\n    text-transform: uppercase;\n    font-size: 13px;\n    border-radius: 5px;\n    margin-left: -155px;\n    margin-top: 50px;\n    padding-bottom: 50px;\n\n}\n\n/*Reasons To Donate */\n\n.banner_section {\n    border-bottom: 1px solid #ebebeb;\n    margin-bottom: 70px;\n}\n\n.banner_black {\n    border-bottom: 1px solid #2d2d2d;\n}\n\n\n@media only screen and (min-width: 992px) and (max-width : 1199px) {\n    .banner_black .banner_content h2 {\n        font-size: 21px;\n        line-height: 23px;\n        margin-bottom: 13px;\n    }\n}\n\n.banner_thumb {\n    position: relative;\n    overflow: hidden;\n}\n\n.banner_thumb::before {\n    position: absolute;\n    content: "";\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,0.11);\n    top: 0;\n    left: 0;\n    transition: 0.3s;\n    opacity: 0;\n    pointer-events: none;\n    z-index: 1;\n}\n\n.banner_thumb img {\n    transition: 0.3s;\n    width: 325px;\n    height: 200px;\n    margin-left: 50px;\n}\n\n.banner_thumb:hover::before {\n    opacity: 0;\n}\n\n.banner_thumb:hover img {\n    transform: scale(1.1);\n}\n\n.row h1 {\n    text-align: center;\n    margin-bottom: 50px;\n    color: black;\n    text-decoration: underline;\n    font-family:cursive;\n}\n\n.banner_thumb h3 {\n    margin-top: 15px;\n    text-align: center;\n    color: black;\n    font-weight: 500;\n}\n\n.banner_thumb h5 {\n    text-align: center;\n}\n\n.footer_area {\n    border-bottom: 1px solid #ebebeb;\n    padding-bottom: 70px;\n    margin-bottom: 65px;\n}\n\n.footer_black {\n    border-bottom: 0;\n    padding-bottom: 0;\n    margin-bottom: 70px;\n}\n\n.footer_black h2 {\n    color: black;\n    font-family: serif;\n    font-weight: 700;\n    font-size: 35px;\n    letter-spacing: 2px;\n    line-height: 32px;\n}\n\n.footer_black p {\n    color: #a0a0a0;\n    line-height: 26px;\n    margin-bottom: 37px;\n}\n\n.footer_black .footer_content form {\n    width: inherit;\n    position: unset;\n    display: flex;\n    justify-content: center;\n    width: 600px;\n    position: relative;\n    margin: 0 auto;\n    margin-bottom: 20px;\n}\n\n.footer_black .footer_content form input {\n    width: 100%;\n    border: 2px solid #2d2d2d;\n    font-size: 12px;\n    color: #fff;\n    padding: 0 20px;\n    border-radius: 4px;\n    padding: 10px 224px 10px 20px;\n    background: none;\n}\n\n.footer_black .footer_content form button {\n    position: absolute;\n    font-family: "Poppins", serif;\n    font-weight: 400;\n    content: "";\n    right: 0;\n    top: 0;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n    padding: 0 60px;\n    background: black;\n    color: white;\n    height: 100%;\n    border: 0;\n    border-radius: 4px;\n    text-transform: capitalize;\n}\n\n.footer_black .footer_content form button:hover {\n    color: red;\n}\n\n.footer_content {\n    text-align: center;\n}\n\n' 
    }}
  />
  <div className="home_black_version">
    <header className="header_area header_black">
      {/*header top starts */}
      <div className="header_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="social_icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ion-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              
              <div className="top_right text-right">
                <ul>
                  <li className="language">
                    <a href="#">
                      English <i className="ion-chevron-down" />
                    </a>
                    <ul className="dropdown_language">
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                    </ul>
                  </li>
                  <nav>
                    <li className="currency">
                      <a onClick={()=>navigate("/organizations")}>Organizations</a>
                    </li>
                  </nav>
                  <nav>
                    <li className="currency">
                      <a onClick={()=>navigate("/list")}>Donate</a>
                    </li>
                  </nav>
                  <li className="top_links">
                    <a href="#">
                      My Account
                      <i className="ion-chevron-down" />
                    </a>
                    <ul className="dropdown_links">
                      <nav>
                        <li>
                          <a href="#">Checkout</a>
                        </li>
                      </nav>
                      <nav>
                        <li>
                          <a onClick={()=>navigate("/Account")}>Profile</a>
                        </li>
                      </nav>
                      <nav>
                        <li>
                          <a onClick={()=>navigate("/User")}>Sign Up</a>
                        </li>
                      </nav>
                      <nav>
                        <li>
                          <a onClick={() => navigate("/create")}href="#">Create Organization</a>
                        </li>
                      </nav>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*header top ends*/}
      {/*header middle starts*/}
      <div className="header_middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="home_contact">
                <div className="contact_icons">
                  <img src="icon_phone.png" alt="" />
                </div>
                <div className="contact_box">
                  <p>
                    Inquiry / Helpline :{" "}
                    <a href="tel:1234567890">123-456-7890</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-4">
              <div className="logo">
                <a href="index.html">
                  <img src="logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 com-6">
              <div className="middle_right"></div>
            </div>
          </div>
        </div>
      </div>
      {/*header middle ends*/}
      {/*header bottom starts*/}
      <div className="header_bottom sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="main_menu_inner">
                <div className="logo_sticky">
                  <a href="#">
                    <img src="logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*header bottom ends*/}
    </header>
    {/*Slider Section Starts*/}
    <div className="slider_area slider_white owl-carousel">
      <div className="single_slider" style={{ backgroundImage: `url('${"charity.jpeg"}')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="slider_content">
                <h1>Giving Is Not Just About Just Making A Donation</h1>
                <div className="vertical-center">
                  <a href="#" className="button">
                    Browse The Organizations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single_slider" style={{ backgroundImage: `url('${"charity1.png"}')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="slider_content">
                <h1>It's About Making A Difference</h1>
                <div className="vertical-center">
                  <a href="#" className="button">
                    Browse The Organizations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single_slider" style={{ backgroundImage: `url('${"charity3.png"}')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="slider_content">
                <h1>Making A Huge Impact In Someones Life</h1>
                <div className="vertical-center">
                  <a href="organizations.html" className="button">
                    Browse The Organizations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Slider Section Ends*/}
    {/*Reasons To Donate Section Starts*/}
    <section className="banner_section banner_black">
      <div className="container">
        <div className="row">
          <h1>Reasons To Donate</h1>
          <div className="col-lg-4 col-md-6">
            <div className="single_banner">
              <div className="banner_thumb">
                <a href="#">
                  <img src="charity.jpeg" alt="banner1" />
                </a>
                <h3>Make a Tangible Difference</h3>
                <h5>
                  Donations help fund essential services and programs that
                  directly benefit individuals and communities in need. Your
                  contribution can provide food, shelter, medical care,
                  education, and more, creating a significant and positive
                  impact on people’s lives.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_banner">
              <div className="banner_thumb">
                <a href="#">
                  <img src="charity3.png" alt="banner2" />
                </a>
                <h3>Support a Cause You Believe In</h3>
                <h5>
                  Giving to charity allows you to support causes and
                  organizations that align with your personal values and
                  passions. Whether it's combating hunger, advancing medical
                  research, or promoting environmental conservation, your
                  donation helps further the mission of organizations you care
                  about.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single_banner">
              <div className="banner_thumb">
                <a href="#">
                  <img src="charity2.png" alt="banner3" />
                </a>
                <h3>Create Positive Change</h3>
                <h5>
                  Donations contribute to broader societal improvements and
                  advancements. By supporting charities, you help drive
                  initiatives that address systemic issues, improve quality of
                  life, and work towards solutions for global challenges.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Reason To Donate Section Ends*/}
    {/*footer section starts*/}
    <div className="footer_area footer_black">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="footer_content">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get E-mail of all the updates</p>
              <div className="subscribe_form">
                <form action="" className="footer-newsletter">
                  <input
                    type="email"
                    placeholder="Email address ..."
                    autoCapitalize="off"
                    autoComplete="off"
                  />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*footer section ends*/}
  </div>
</>
    );
}