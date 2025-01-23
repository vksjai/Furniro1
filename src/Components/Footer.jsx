import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Address Section */}
        <div className="row">
          <div className="col">
            <p>400 University Drive, Suite 200, Coral Gables, FL 33134 USA</p>
          </div>
        </div>

        {/* Links and Help Section */}
        <div className="row">
          <div className="col">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row">
          <div className="col">
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
