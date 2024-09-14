import { Component } from "react";
import { Link } from 'react-router-dom';


export default function Account(){
    return(
    <>
  <Link to = "/Account"></Link>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <title>Document</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    @import url(\"styles.css\");\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\n    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap');\n\n    html,body {\n    height: 100%;\n    background: #FFFDD0;\n}\n\nbody {\n    line-height: 24px;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    visibility: visible;\n    font-family: 'Poppins', sans-serif;\n    color: #5a5a5a;\n}\n\n.profile_content h1 {\n    text-align: center;\n    font-size: 48px;\n    color: black;\n}\n\n.heart {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 10%;\n    padding-bottom: 20px;\n}\n\n.firstName_form {\n  margin-bottom: 10px;  text-align: center;\n}\n\n.firstName_form > input {\n    text-align: left;\n}\n\n.lastName_form {\n    text-align: center;\n}\n\n.lastName_form > input {\n    text-align: left;\n}\n\n.recent-donations {\n    padding-top: 50px;\n    text-align: center;\n}\n\n.recent-donations h2 {\n    text-align: center;\n}\n\n.payment-methods {\n    padding-top: 50px;\n    text-align: center;\n}\n\n.payment-methods h2 {\n    text-align: center;\n}\n\n.email-settings {\n    padding-top: 50px;\n}\n\n.email-settings h2 {\n    text-align: center;\n}\n\n.btn-container {\n    display: flex;\n    justify-content: center;\n}\n\n.reset-password {\n    padding-top: 50px;\n    text-align: center;\n}\n\n.reset-password p {\n    margin-bottom: 20px;\n}\n\n.modal-title {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n\n} .button1 {background: grey; width: 15%; max-height:20%;} .button2{background:grey} p {color: white; text-align: center;} .input{padding-bottom:10px;} .text{color:black;} .button3 {display:inline-block; margin-left:auto; margin-right:-400px; background: grey;} .button4 {display:inline-block; margin-left:auto; margin-right:430px; background: grey;} h9 {color: white;}\n\n"
    }}
  />
  <div className="profile_area profile_black">
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="profile_content">
            <h1>My Profile</h1>
            <img src="logo.png" alt="logo" className="heart" />
            <div className="firstName_form">
              <form action="" className="footer-firstName">
                <input
                  type="name"
                  placeholder="First Name ..."
                  autoCapitalize="off"
                  autoComplete="off"
                  class="input"
                />
                <button class = "button1"><p>Enter</p></button>
              </form>
            </div>
            <div className="lastName_form">
              <form action="" className="footer-LastName">
                <input
                  type="name"
                  placeholder="Last Name ..."
                  autoCapitalize="off"
                  autoComplete="off"
                  class="input"
                />
                <button class = "button1"><p>Enter</p></button>
              </form>
            </div>
          </div>
          <div className="recent-donations">
            <h2>Recent Donations</h2>
            <p class="text">
              You currently do not have any recent donations. If you would like
              to support a organization, first find a organization, then select
              the items you want to donate. option at checkout.
            </p>
          </div>
          <div className="payment-methods">
            <h2>Payment Methods</h2>
            <p class="text">
              You currently do not have a saved payment method. To save a credit
              card for faster checkout, find a project to which you'd like to
              donate, and at checkout choose "Remember this card" below your
              payment information.
            </p>
          </div>
          <div className="email-settings">
            <h2>Email Settings</h2>
            <div className="btn-container">
              <button type="click" data-toggle="modal" data-target="#myModal"  class = "button3">
                <h9>Edit Email Preferences</h9>
              </button>
              <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        
                      </button>
                      <h4 className="modal-title">Email Preferences</h4>
                    </div>
                    <div className="modal-body">
                      <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        defaultValue={1}
                      />
                      <label htmlFor="checkbox">
                        {" "}
                        I want to recieve daily updates!
                      </label>
                      <br />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button type="click" data-toggle="modal" data-target="#uno" class = "button4">
               <h9>Unsubscribe</h9>
              </button>
              <div id="uno" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                      </button>
                      <h4 className="modal-title">Subscription</h4>
                    </div>
                    <div className="modal-body">
                      <p> Thank you for being part of our community!</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reset-password">
            <h2>Reset Password</h2>
            <p class="text">
              To change your password below, simply enter your new password
              twice. Password must be between 8-20 characters long.
            </p>
            <form action="" className="newPassword" class="input">
              <h5>New Password</h5>
              <input
                type="password"
                placeholder="New Password"
                autoCapitalize="off"
                autoComplete="off"
              />
              <button class="button1"><h9>Enter</h9></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
    );
}