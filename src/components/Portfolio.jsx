import React from 'react';
import githubIcon from '../../public/assets/img/gh.png';
import cityTrek from '../../public/assets/img/citytrek.jpg';
import shinsa from '../../public/assets/img/shinsa.jpg';
import tukio from '../../public/assets/img/tukio.jpg';

class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio-content">
        <div className="title-row">
          <a href="https://github.com/parkjjustin"><img className="giticon" src={githubIcon} target="_blank" /><h1 id="title">Github</h1></a></div>
        <div className="row">
          <a href="https://city-trek.herokuapp.com/" target="_blank"><div className="cityTrek"><img className="portfolio-image" src={cityTrek} /><div id="media-text">CityTrek</div></div></a>
          <a href="https://shinsa.herokuapp.com/" target="_blank"><div className="shinsa"><img className="portfolio-image" src={shinsa} /><div id="media-text">Shinsa</div></div></a>
          <a href="https://tukio-webapp.herokuapp.com/" target="_blank"><div className="tukio"><img className="portfolio-image" src={tukio} /><div id="media-text">Tukio</div></div></a>
        </div>
      </div>
    );
  }
};

export default Portfolio;