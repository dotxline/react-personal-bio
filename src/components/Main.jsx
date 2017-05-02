import React from "react";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import { Link } from 'react-router';
import logo from "../../public/assets/img/logo.png";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Link href="/">
            <img className="logo" src={logo} /></Link>
          <div id="header-text">Justin Park
            <span className="title">Jr. Web Developer</span>
          </div>
        </div>

        <Navbar />

        <div className="content">
          {this.props.children}
        </div>

        <Sidebar />
      </div>
    );
  }
};

export default Main;
