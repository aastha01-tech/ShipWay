import React from 'react';
import {RiMessage3Line} from 'react-icons/ri'

const AboutCard = () => {
  return (
   <>
   <div className="container-fluid">
    <div className="row" style={{marginTop:"100px"}}  >
      <div className="col-md-1"></div>
    <div className="col-md-6">
      <div className="about-card">
      <div className="card-content">
        <h1>About Us</h1><hr/>
        <h2>Hey! My Self Aastha Modanwal </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:"20px"}} >      MERN Stack Developer <b style={{color:"darkcyan"}} >full stack developer</b> </span>
        <br/><p>Here I have done my 1 year Experience in Techpile Technology Pvt Ltd. <br/>
          and i have done my more then 2 mojor projects likes.. E-commerce , E-Notes and more then React Based Project
        <b style={{color:"darkcyan"}} > &nbsp; &nbsp; Thank You</b>
        </p>
        <button className='btn btn-default w-25' style={{fontSize:"15px"}} >Contact Me <RiMessage3Line/> </button>
        </div>
    </div>
    </div>
    <div className="col-md-4">
      <div className="card-image">
        <img src="https://static.vecteezy.com/system/resources/previews/019/841/048/original/businesswoman-cartoon-character-with-beautiful-business-woman-in-office-style-white-shirt-png.png" height={300} alt="About Us" />
      </div>
    </div>
    <div className="col-md-1"></div>
    </div>
   </div>
   </>
  );
};

export default AboutCard;
