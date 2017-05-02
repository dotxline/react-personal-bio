import React from "react";
import Modal from "./Modal.jsx";
import one from "../../public/assets/img/1.jpg";
import two from "../../public/assets/img/2.jpg";
import three from "../../public/assets/img/3.jpg";
import four from "../../public/assets/img/4.gif";
import five from "../../public/assets/img/5.jpg";
import six from "../../public/assets/img/6.jpg";
import seven from "../../public/assets/img/7.jpg";
import eight from "../../public/assets/img/8.jpg";
import nine from "../../public/assets/img/9.jpg";


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