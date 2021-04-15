import React from "react";
import logo_light from '../../assets/images/logo_light_x.svg';


const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-12 ">
              <img src={logo_light} width={150} alt="logo"/>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-primary">
        © 2021 Copyright: 
        <a className="text-white" href="https://mdbootstrap.com/">
           yenikargo.az
        </a>
      </div>
    </footer>
  );
};

export default Footer;
