import React from 'react';
import profilePicture from '../../public/assets/img/profile.jpg';
import fbIcon from '../../public/assets/img/fb.png';
import igIcon from '../../public/assets/img/ig.png';
import linkedinIcon from '../../public/assets/img/linkedin.png';


class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <img className="bio-image" src={profilePicture} alt="Justin Park at his best!"/>
        <span id="code">
          <p>Justin Park</p>
          <p>Los Angeles, CA</p>
        </span>
        <a href="https://www.facebook.com/jjp89" target="_blank"><img className="icon" src={fbIcon} alt="Facebook" /></a>
        <a href="https://www.instagram.com/jjparky89/" target="_blank"><img className="icon" src={igIcon} alt="Instagram"/></a>
        <a href="https://www.linkedin.com/in/parkjjustin/" target="_blank"><img className="icon" src={linkedinIcon} alt="LinkedIn"/></a>
        <p id="caption">Technologies used to create this bio:</p>
        <i className="devicon-react-original-wordmark"></i>
        <i className="devicon-nodejs-plain-wordmark"></i>
        <i className="devicon-heroku-line-wordmark"></i>
        <i className="devicon-babel-plain"></i>
        <i className="devicon-photoshop-plain"></i>
      </div>
    );
  }
};

export default Sidebar;