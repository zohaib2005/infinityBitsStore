import React from "react";
import "./Footer.scss";
import AppleIcon from "@material-ui/icons/Apple";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstaIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <ul className="box">
            <li>
              <a href="#">Get the app</a>
            </li>
            <li>
              <a href="#">
                <AppleIcon />
              </a>
            </li>
            <li>
              <a href="#">Follow us</a>
            </li>
            <li>
              <a href="#">
                <FacebookIcon className="iconPadding" />
                <TwitterIcon className="iconPadding" />
                <InstaIcon className="iconPadding" />
              </a>
            </li>
            <li>
              <a href="#">Get inspiration</a>
            </li>
            <li>
              <form method="post">
                <span className="emailForm">
                  <input
                    type="text"
                    className="text"
                    name="cf_email"
                    placeholder="Enter your email"
                    id="email"
                  />

                  <input type="submit" className="submit" value="SUBMIT" />
                </span>
              </form>
            </li>
          </ul>
        </li>
        <li>
          <ul className="box">
            <li>
              <a href="#">Framing Process</a>
            </li>
            <li>
              <a href="#">Hanging Tips</a>
            </li>
            <li>
              <a href="#">For Business</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="box">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Gallery Wall Frame</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="box">
            <li>
              <a href="#">Gift Card</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="box">
            <li>
              <a href="#">Terms Of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Accessilibily</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="b-footer">
        <p className="footerText">2020 Frameboss </p>
      </div>
    </footer>
  );
}

export default Footer;
