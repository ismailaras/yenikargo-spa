import React from "react";
import logo_light from '../../assets/images/logo_light_x.svg';


const Footer = () => {
  return (
    <footer class="bg-primary text-white text-center text-lg-start">
      <div class="container p-4">
        <div class="row">
          <div class="col-md-12 ">
              <img src={logo_light} width={150} alt="logo"/>
          </div>
        </div>
      </div>

      <div class="text-center p-3 bg-primary">
        © 2021 Copyright: 
        <a class="text-white" href="https://mdbootstrap.com/">
           yenikargo.az
        </a>
      </div>
    </footer>
  );
};

export default Footer;
