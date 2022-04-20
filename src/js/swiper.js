import Swiper, { Navigation, Pagination, appendSlide } from 'swiper';
import 'swiper/swiper.min.css'

 const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  fetch('https://quantoo.pl/jobs/api/swiper/list.json')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      data.items.forEach(element => {
          if(element.img) {
            // console.log(element.img);
            // let div = document.createElement('div');
            // div.setAttribute('class', 'swiper-slide')
            // div.innerHTML = element.img;
            // // img.setAttribute('src', element.img);
            // // img.setAttribute('alt', '');
            // // console.log(img);
            // swipperWrapper.appendChild(div);
            console.log(swiper);
            swiper.appendSlide(`<div class="swiper-slide">${element.img}</div>`);
          }
      });
  });