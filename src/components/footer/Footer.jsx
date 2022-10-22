import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
      <h1 className="logo1">Iambooking</h1>
        <div className="fLists">
            
          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>
          
          
          
        </div>
       
      </div>
    </div>
  );
};

export default Footer;