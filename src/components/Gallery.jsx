import React from 'react';
import Modal from './Modal.jsx';
import one from '../../public/assets/img/mewithkong.jpg';
import two from '../../public/assets/img/hikingselfie.jpg';
import three from '../../public/assets/img/charmanderdoll.jpg';
import four from '../../public/assets/img/promotion.gif';
import five from '../../public/assets/img/tacticool.jpg';
import six from '../../public/assets/img/tacticooler.jpg';
import seven from '../../public/assets/img/eating.jpg';
import eight from '../../public/assets/img/laptop.jpg';
import nine from '../../public/assets/img/webdev.jpg';


class Gallery extends React.Component {
  componentDidMount() {
    let images = [one, two, three, four, five, six, seven, eight, nine];
    let gallery = document.getElementById("gallery-content");
    for (let i = 0; i < images.length; i++) {
      let img = document.createElement("img");
      img.src = images[i];
      img.className = "gallery-image";
      img.setAttribute("data-id", i + 1);
      gallery.appendChild(img);
      let modal = document.getElementById("imgModal");

      img.onclick = () => {
        let value = img.getAttribute("data-id");
        let modalContent = document.getElementById("modal-content");
        modalContent.style.backgroundImage = "url('" + images[value - 1] + "')";
        modal.style.display = "block";
      }
    };

    let modal = document.getElementById("imgModal");
    let span = document.getElementsByClassName("close")[0];
    span.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  componentWillUnmount() {
    let galleryContent = document.getElementById('gallery-content');
    while (galleryContent.firstChild) galleryContent.removeChild(galleryContent.firstChild);
  }

  render() {
    return (
      <div id="gallery-content">
        <Modal />
      </div>
    );
  }
};

export default Gallery;