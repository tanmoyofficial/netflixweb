import React from "react";
import "./header.css";
import logo from "../assets/images/logo/netflix-logo.svg";
import nlogo from "../assets/images/logo/netflix-n-logo.svg";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="content">
              <div className="header-logo">
                <a
                  href="https://www.netflix.com/in/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <picture>
                    <source media="(max-width: 599px)" srcSet={nlogo} />
                    <img src={logo} alt="Netflix Logo" className="" />
                  </picture>
                </a>
              </div>
              <div className="header-right">
                <p>UNLIMITED TV SHOWS & MOVIES</p>
                <div className="header-btns">
                  <a
                    href="https://www.netflix.com/in/"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-bg-r"
                  >
                    JOIN NOW
                  </a>
                  <a
                    href="https://www.netflix.com/in/login?nextpage=%2Fbrowse%2Fgenre%2F83%3Flocale%3Den-IN"
                    rel="noreferrer"
                    className="btn btn-bg-no"
                  >
                    SIGN IN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
