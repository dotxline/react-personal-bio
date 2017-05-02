import React from "react";
import { Route, IndexRoute } from "react-router";
import Main from "../components/Main.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Gallery from "../components/Gallery.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";

export default () => {
  return (
    <Route path="/" component={Main}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="gallery" component={Gallery} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="contact" component={Contact} />
      <IndexRoute component={Home} />
    </Route>
  )
};
