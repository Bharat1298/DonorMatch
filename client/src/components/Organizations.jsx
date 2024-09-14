import { Component } from "react";
import { Link } from 'react-router-dom';


export default function Organization(){
    return(
        <>
        <Link to = "/Organizations"></Link>
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
        <title>Document</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              
            
            '\n    @import url("styles.css");\n    @import url(\'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap\');\n    @import url(\'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap\');\n\n,    /*Product Section */\n\n* {\n    html,body: {background-color: #FFFDD0;} box-sizing: border-box;\n}\n\n*, *::after , *::before {\n    box-sizing: border-box;\n}\n\n html,body {\n  background: #FFFDD0;  height: 100%;\n}\n\n\n.org_black_section {\n    background-color: #FFFDD0;\n}\n\n.org_section {\n    margin-bottom: 34px;\n}\n\n.org_black_section .org_tab_button ul.nav {\n    border: 2px solid #2d2d2d;\n}\n\n.org_black_section .org_tab_button ul.nav::before {\n    background-image: linear-gradient(to right, transparent, #2d2d2d);\n}\n\n.org_black_section .org_tab_button ul.nav::after {\n    background-image: linear-gradient(to right, #2d2d2d, transparent);\n}\n\n.org_black_section .org_tab_button ul.nav li:first-child a {\n    border-left: 0;\n}\n\n.org_black_section .org_tab_button ul.nav li a {\n    border-left: 2px solid #2d2d2d;\n    color: #ffffff;\n    font-family: "Baloo 2", serif;\n}\n\n.org_black_section .org_tab_button ul.nav li a:hover {\n    color: #a8741a;\n}\n\n.org_black_section .org_tab_button ul.nav li a.active {\n    color: black;\n}\n\n.org_black_section .org_tab_button ul.nav li a.active::before {\n    border: 0px solid black;\n}\n\n.org_tab_button {\n    margin-bottom: 35px;\n    text-align: center;\n}\n\n.org_tab_button ul {\n   justify-content: center;\n    margin: 0 auto;\n    border: 0px solid #ebebeb;\n}\n\n.org_tab_button ul.nav {\n    display: inline-block;\n    position: relative;\n    border: 2px solid #2d2d2d;\n}\n\n.org_tab_button ul.nav::before {\n    content: "";\n    width: 200px;\n    height: 2px;\n    position: absolute;\n    right: 100%;\n    top: 50%;\n    background-image: linear-gradient(to right, transparent, #2d2d2d);\n}\n\n.org_tab_button ul.nav::after {\n    content: "";\n    width: 200px;\n    height: 2px;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    background-image: linear-gradient(to right, transparent, #2d2d2d);\n}\n\n.org_tab_button ul li {\n    display: inline-block;\n}\n\n.org_tab_button ul li:first-child a {\n    border-left: 0;\n}\n\n h4 {color: #FFFDD0;} .org_tab_button ul li a {\n    font-size: 20px;\n font-style:none;    color: #242424;\n    line-height: 48px;\n    text-transform: capitalize;\n    font-weight: 700;\n    display: inline-block;\n    font-family: "Baloo 2", serif;\n    border-left: 1px solid #ebebeb;\n    padding: 0 30px;\n    border-radius: 2px;\n    transition: 0.3s;\n}\n\n.org_tab_button ul li a:hover {\n    color: #a8741a;\n}\n\n.org_tab_button ul li a.active {\n    color: #a8741a;\n    position: relative;\n}\n\n.org_tab_button ul li a.active::before {\n    position: absolute;\n    content: "";\n    width: 104%;\n    height: 109%;\n    border: 2px solid #a8741a;\n    left: -2px;\n    top: -2px;\n    border-radius: 2px;\n}\n\n.tab-content {\n    padding-top: 20px;\n}\n\n.tab-content > .tab-pane.active {\n    display: block;\n    height: auto;\n    opacity: 1;\n    overflow: visible;   \n}\n\n.tab-content > .tab-pane {\n    display: block;\n    height: 0;\n    opacity: 0;\n    overflow: hidden;\n}\n\n.org_container .custom-col-5  {\n    flex: 0 0 50%;\n    max-width: 50%;\n    padding: 0 6px;\n}\n\n.custom-row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -6px;\n    margin-right: -6px;\n}\n\n.org_product {\n    display: inline-block;\n    transition: 0.3s;\n    margin-bottom: 30px;\n}\n\n.org_thumb, .org_product {\n    display: inline-block;\n}\n\n.org_product:hover {\n    background: #ffffff;\n    border-radius: 3px;\n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3);\n}\n\n.org_product:hover .product_hover {\n    top: 66%;\n    opacity: 1;\n    visibility: visible;\n}\n\n.org_product:hover .org_thumb a.secondary_img {\n    opacity: 1;\n    visibility: hidden;\n}\n\n.org_black_section .org_product {\n    padding: 15px 17px;\n}\n\n.org_black_section .org_product:hover {\n    background: #242424;\n}\n\n.org_thumb {\n    position: relative;\n    margin-bottom: 8px;\n}\n\nimg {\n    width: 350px;\n}\n\n.org_thumb a.secondary_img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.product_content {\n  display:block; margin-left: auto; margin-right: auto;  text-align: center;\n    ;\n}\n\n.product_content h3 {\n    line-height: 22px;\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n    position: relative;\n    padding-bottom: 15px;\n    margin-bottom: 13px;\n}\n\n.product_content h3::before {\n    background-image: linear-gradient(to right, transparent, #2d2d2d 30%, 85%, transparent);\n    content: "";\n    display: block;\n    height: 1px;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.product_content h3 a {\n    color: #FFFDD0;\n}\n\n.product_content h3 a:hover {\n    color: red;\n}\n\n.org_black_section .product_content h3 {\n    font-family: "Poppins", \'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 400; \n}\n\n.tag_cate {\n    margin-bottom: 10px;\n}\n\n.org_black_section .tag_cate a{\n    color: #a0a0a0;\n    font-size: 18px;\n}\n\n.org_black_section .tag_cate a:hover {\n    color: red;\n}\n\n.needed_box > span {\n    font-size: 16px;\n    font-weight: 500;\n    color: #FFFDD0;\n}\n\n.needed_box :hover {\n    color: red;\n    cursor: pointer;\n}\n\n.product_hover {\n    position: absolute;\n    top: 50%;\n    z-index: 9;\n    left: 0;\n    background: #fff;\n    padding: 3px 8px 20px 8px;\n    box-shadow: 0px 6px 7px 0 rgba(0, 0, 0, 0.3);\n    transition: all 300ms ease-in-out;\n    opacity: 0;\n    visibility: visible;\n}\n\n.org_product:hover .product_hover {\n    top: 66%;\n    opacity: 1;\n    visibility: visible;\n}\n\n.org_black_section .product_hover {\n    background: #242424;\n    left: -17px;\n    width: 117%;\n}\n\n.product_desc {\n    margin-bottom: 15px;\n    position: relative;\n    padding-bottom: 14px;\n}\n\n.product_desc::before {\n    background-image: linear-gradient(to right, transparent, #2d2d2d 30%, 85%, transparent);\n    content: "";\n    display: block;\n    height: 1px;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.product_desc p {\n    font-size: 13px;\n    line-height: 18px;\n    color: #a0a0a0;\n}\n\n.org_container button {\n    display: none !important;\n}\n\n.org_section1 .slick-list {\n    padding-bottom: 135px !important;\n    margin-bottom: -135px;\n    z-index: 9;\n    padding-top: 18px !important;\n    margin-top: -30px;\n    position: relative;\n}\n\n.p_bottom.org_section1 .slick-list {\n    padding-bottom: 120px !important;\n    margin-bottom: -120px;\n} .heart {\n\n display: inline-block;  margin-left:auto; margin-right:auto;}'
          }}
        />
        <section className="org_section org_section1 org_black_section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="org_area">
                  <div className="org_tab_button">
                    <ul className="nav" role="tablist">
                      <li>
                        <a className="active" data-toggle="tab" role="tab">
                          Organizations
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="featured"
                        role="tabpane1"
                      >
                        <div className="org_container">
                          <div className="custom-row product_column3">
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img" class="heart">
                                    <img src="american red cross.webp" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Red Cross</a>
                                  </div>
                                  <h3>
                                    <a href="#">We aim to prevent and alleviate human suffering in the 
                                    face of emergencies by mobilizing the power of volunteers and 
                                    the generosity of donors. We provide disaster relief, emergency 
                                    assistance, and education, while maintaining a commitment to
                                     preparedness and response efforts to ensure communities are 
                                     resilient and recover from crises effectively.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Monetary Donations, Blood Donations, Emergency Supplies, Health and Safety Supplies</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="unicef.webp" alt="product1" class="heart" />
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">UNICEF</a>
                                  </div>
                                  <h3>
                                    <a href="#">We work tirelessly to advocate for the rights of every child, ensuring that
                                     they are protected from harm and have access to the resources they need to thrive. 
                                     Our mission involves addressing issues such as health, education, and protection through 
                                     sustainable programs, partnerships, and innovative solutions, aiming to create a world where 
                                     every child's potential is realized and their rights are upheld.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Emergency Relief Supplies, Health and Nutrition Supplies, Education Supplies</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="doctors without borders.png" alt="product1" class="heart" />
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Doctors Without Borders</a>
                                  </div>
                                  <h3>
                                    <a href="#">We deliver emergency medical care to populations in crisis, 
                                    irrespective of their race, religion, or political affiliation. 
                                    We provide medical assistance in areas affected by conflict, epidemics, disasters,
                                     and exclusion from healthcare. Our mission is driven by the principles of medical 
                                     ethics and humanitarianism, ensuring that we address urgent health needs and
                                      advocate for those who are often unheard.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Financial Donations, Medical Supplies, Human Resources</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="world wildlife fun.jpeg" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">World Wildlife Fund</a>
                                  </div>
                                  <h3>
                                    <a href="#">We are dedicated to conserving nature and reducing the most
                                     pressing threats to the diversity of life on Earth. Our mission 
                                     involves protecting endangered species, preserving vital ecosystems,
                                      and addressing climate change through science-based conservation 
                                      efforts, global partnerships, and advocacy to ensure a 
                                      sustainable future for all living creatures.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Financial Donations, Education Supplies</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="habitat for humanity .jpeg" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Habitat for Humanity</a>
                                  </div>
                                  <h3>
                                    <a href="#">We are a global nonprofit housing organization with a 
                                    mission to build safe, affordable homes and strengthen communities.
                                     We engage with families, volunteers, and donors to provide 
                                     homeownership opportunities through a unique model that 
                                     combines construction, advocacy, and financial literacy. 
                                     Our goal is to end poverty housing and create lasting change 
                                     by empowering families and fostering community development.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Monetary Donations, Building Materials, Furniture and Appliances</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="save the children.png" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Save the Children</a>
                                  </div>
                                  <h3>
                                    <a href="#">We are dedicated to improving the lives of children around
                                     the world by addressing their basic needs and rights. We work to 
                                     ensure that every child has access to quality education, 
                                     healthcare, and protection from harm. Our mission involves
                                      providing emergency aid, advocating for child rights, and 
                                      implementing long-term development programs to help children
                                       grow up healthy, educated, and safe</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Monetary Donations, Emergency Supplies, Food and Nutrition, 
                                    Education Materials, Health Supplies, Clothing and Blankets, Toys and Comfort Items</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="the nature of conservancy .png" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">The Nature Conservancy</a>
                                  </div>
                                  <h3>
                                    <a href="#">We strive to protect the lands and waters on which 
                                    all life depends. Our mission is to conserve critical natural areas 
                                    and biodiversity through a combination of scientific research, 
                                    innovative solutions, and collaborative partnerships. We work to 
                                    safeguard ecosystems, address climate change, and promote sustainable 
                                    practices to ensure a thriving planet for future generations.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Monetary Donations</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="oxfam.avif" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Oxfam</a>
                                  </div>
                                  <h3>
                                    <a href="#">We are a global movement dedicated to tackling poverty and 
                                    social injustice. Our mission is to alleviate suffering and improve 
                                    the lives of the most vulnerable populations through development 
                                    programs, advocacy, and emergency response. We work with local
                                     partners to promote economic justice, gender equality, and human 
                                     rights, aiming to build a more equitable world where everyone can
                                     live with dignity and opportunity.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Emergency Relief Supploes</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="amnesty international.png" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Amnesty International</a>
                                  </div>
                                  <h3>
                                    <a href="#">We are committed to protecting human rights and promoting 
                                    fundamental freedoms for all individuals. Our mission is to campaign 
                                    against human rights abuses, advocate for justice, and support victims 
                                    of injustice through global mobilization and grassroots activism. We 
                                    seek to end arbitrary detention, torture, and other violations while
                                    promoting the universal rights enshrined in international human rights law.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Financial Donations</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="feeding amerixa.avif" alt="product1" class="heart"/>
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Feeding America</a>
                                  </div>
                                  <h3>
                                    <a href="#">We a nationwide network of food banks working to end hunger
                                    in the United States. Our mission involves providing food and resources 
                                    to individuals and families in need through a collaborative network of
                                     member food banks, community organizations, and partners. We focus on 
                                     addressing the root causes of hunger, advocating for policies that 
                                     support food security, and mobilizing volunteers and donors to make a
                                    difference.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Monetary Donations, Non Perishable Food Items, Personal Care Items</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="humane society of america.png" alt="product1" class="heart" />
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">The Humane Society of the United States</a>
                                  </div>
                                  <h3>
                                    <a href="#">We are dedicated to ending animal cruelty and promoting the 
                                    welfare of animals across the country. Our mission involves advocating 
                                    for animal protection laws, providing rescue and care for abused and 
                                    neglected animals, and promoting humane education and outreach. We 
                                    strive to create a world where animals are treated with respect, 
                                    compassion, and justice.</a>
                                  </h3>
                                  <div className="needed_box">
                                  <h4>What We Need</h4>
                                    <span className="list">Monetary Donations, Vehicle Donations</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="custom-col-5">
                              <div className="org_product">
                                <div className="org_thumb">
                                  <a href="#" className="primary_img">
                                    <img src="heifer international.avif" alt="product1" class="heart" />
                                  </a>
                                  <a href="#" className="secondary_img">
                                    <img src="charity.jpeg" alt="product1" />
                                  </a>
                                </div>
                                <div className="product_content">
                                  <div className="tag_cate">
                                    <a href="#">Heifer International</a>
                                  </div>
                                  <h3>
                                    <a href="#">We are committed to ending hunger and poverty through 
                                    sustainable development and community empowerment. Our mission is 
                                    to provide families with livestock, training, and resources that
                                     enable them to achieve self-reliance and improve their quality of life. 
                                     By fostering community collaboration and environmental stewardship, 
                                     we aim to create long-term solutions that address the root causes 
                                     of poverty and support families in their journey towards economic 
                                     independence.</a>
                                  </h3>
                                  <div className="needed_box">
                                    <h4>What We Need</h4>
                                    <span className="list">Financial Donations, Animal Donations</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*product section area ends*/}
      </>
    );
}