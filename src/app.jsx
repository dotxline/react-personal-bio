import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import '../public/assets/css/style.css';
import logo from '../public/assets/img/logo.png';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import NoMatch from './components/NoMatch.jsx';

const Root = () => {
    return (
        <Router>
            <div className="container">
                <div className="header">
                    <Link to='/'>
                        <img className="logo" src={logo} /></Link>
                    <div id="header-text">Justin Park
                            <span className="title">Jr. Web Developer</span>
                    </div>
                </div>

                <Navbar />

                <div className="content">
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                    </Switch>

                </div>
                <Sidebar />
            </div>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('app'));
