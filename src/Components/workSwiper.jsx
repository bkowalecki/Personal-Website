import React from "react";
import Swiper from "react-id-swiper/lib/ReactIdSwiper.full";
import Slide from "../Components/slide";
import hackathon from "../img/hackathon.jpg";
import github from "../img/github.jpeg";
import codepen from "../img/codepen.png";
import youtube from "../img/youtube.jpeg";

const WorkSwiper = () => {

const params = {
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 2250,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}

// const displaySlideInfo = () => {

// }

  return (
    <Swiper {...params}> 
      <div><Slide image={hackathon}/></div>
      <div><Slide image={github}/></div>
      <a href="https://codepen.io/bkowalecki/" target="_blank"><div><Slide image={codepen}/></div></a>
      <div><Slide image={youtube}/></div>
    </Swiper>
  );
};

export default WorkSwiper;
