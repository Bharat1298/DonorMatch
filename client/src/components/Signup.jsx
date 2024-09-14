import { Component } from "react"
import { Link } from 'react-router-dom';

export default function Signup(){
    return(
        <>
  <Link to = "/Signup"></Link>
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
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <title>Document</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n    html, body {\n        background-color: #FFFDD0;\n    }\n\n    fieldset {\n        margin: 125px auto;\n        padding: 1em 2em;\n        border: solid 5px black;\n        border-radius: 1px;\n        min-width: 100px;\n        max-width: 550px;\n        justify-content: center;\n        font-family: 'Times New Roman', Times, serif;\n        text-align: center;\n  font-size: 19px;   }\n\n    .heart {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 10%;\n    padding-bottom: 20px;\n    }\n    p {\n        font-size: 20px;\n    }\n\n    .don_org {\n       padding-bottom: 20px;\n    }\n\n    .user {\n        display: inline-block;\n        margin-left: 150px;\n        align-items: center;\n    }\n\n    .name {\n        padding-bottom: 20px;\n    }\n\n    .org {\n        padding-bottom: 20px;\n    }\n\n    .submit {\n        margin-top: 20px;\n    }\n\n    .needs {\n        padding-bottom: 20px;\n    }\n\n    h1 {\n        text-align: center;\n        font-size: 64px;\n        font-weight: 700;\n        padding-top: 50px;\n        margin: 50px auto;\n        font-family:'Courier New', Courier, monospace;\n} .button1 {background: black; width:15%; height: 0%; margin-top: 10px; } .button1 p {color:white; margin-top:5px; font-size: 12px;} \n\n"
    }}
  />
  <section>
    <h1>Sign Up</h1>
    <img src="logo.png" className="heart" />
    <fieldset>
      <h4>Are You A Donator or Organization?</h4>
      <form className="don_org">
        <input
          type="radio"
          id="html"
          name="user_org"
          defaultValue="User"
          className="user"
          required=""
        />
        <label htmlFor="user">User</label>
        <br />
        <input
          type="radio"
          id="html"
          name="user_org"
          defaultValue="Organization"
        />
        <label htmlFor="organization">Organization</label>
        <br />
      </form>
      <h4>What Is Your Name? (If Applicable)</h4>
      <form className="name">
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" defaultValue="" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" defaultValue="" />
        <br />
        <br />
        <button type="submit" class="button1"> <p>Submit</p> </button>
      </form>
      <h4>What Is Your Organization's Name? (If Applicable)</h4>
      <form className="org">
        <label htmlFor="fname">Organization Name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          defaultValue=""
          className="text"
        />
        <br />
        <button type="submit" class="button1"> <p>Submit</p> </button>
      </form>
      <h4>What Are The Needs For Your Organization?</h4>
      <form className="needs">
        <label htmlFor="needs">Needs:</label>
        <br />
        <textarea id="needs" name="needs" defaultValue={""} />
      </form>
      <form className="sub">
        <button type="submit" class="button1"> <p>Send</p> </button>
      </form>
    </fieldset>
  </section>
</>
    );
}
