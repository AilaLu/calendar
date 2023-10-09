import React from "react";
import "./Footer.css";
import githubLogo from "./github.png";
import redux_icon from "./redux_icon.png";
import flask_icon from "./flask_icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="creator">
          <h4>Creator</h4>
          <a
              href="https://www.linkedin.com/in/ailalutw/"
              target="_blank"
              rel="noopener noreferrer"
            >
          <img
            className="member-image"
            src="https://media.licdn.com/dms/image/C4E03AQHw8P2euo3WZQ/profile-displayphoto-shrink_200_200/0/1517638025526?e=1698883200&v=beta&t=lnYjzvYCaP07-P7VWIQKpe-kwv-p3pCzFJhImAhd2fs"
            alt="Team Member 1"
          />
             </a>
          <div className="member-name">Aila Lu</div>
          <div>
            <a
              href="https://www.linkedin.com/in/ailalutw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="linkedin-logo"
                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://github.com/AilaLu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="github-logo" src={githubLogo} alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="stack">
          <h4>Stack</h4>
          <div className="links">
            <div className="first-row">
              <i class="fa-brands fa-react fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  React
                </span>
              </i>
              <i className="hover-text-img">
                <img
                  className="fa-brands-redux-icon hover-text"
                  src={redux_icon}
                ></img>
                <span id="topTip-img" className="tooltip-text-img">
                  Redux
                </span>
              </i>
              <i className="hover-text-img">
                <img
                  className="fa-brands-redux-icon hover-text"
                  src={flask_icon}
                ></img>
                <span id="topTip-img" className="tooltip-text-img">
                  Flask
                </span>
              </i>
              <i class="fa-solid fa-database fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  SQLAlchemy
                </span>
              </i>
              <i class="fa-brands fa-python fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  Python
                </span>
              </i>
            </div>

            <div className="second-row">
              <i class="fa-brands fa-node-js fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  Node
                </span>
              </i>
              <i class="fa-brands fa-square-js fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  Javascript
                </span>
              </i>
              <i class="fa-brands fa-html5 fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  HTML5
                </span>
              </i>
              <i class="fa-brands fa-css3-alt fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  CSS3
                </span>
              </i>
              <i class="fa-brands fa-git-alt fa-xl hover-text">
                <span id="topTip" className="tooltip-text">
                  Git
                </span>
              </i>
            </div>
          </div>
        </div>
        <div className="github">
          <h4>GitHub Repo</h4>
            <a
              href="https://github.com/AilaLu/Retreat"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img className="retreat-github-link" width="96" height="96" src="https://img.icons8.com/color/96/github-2.png" alt="github-2"/>
            </a>
          </div>
      </div>

      <div className="retreat-inspired-by"> © 2023 Retreat - inspired by DailyBean</div>
    </footer>
  );
}

export default Footer;
