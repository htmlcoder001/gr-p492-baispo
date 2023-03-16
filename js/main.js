'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const WebT = {};

  WebT.settings = {
  };

  WebT.elements = {
    scroll_links: document.querySelectorAll('a[href^="#"]'),
  };

  /** Anchor smooth scroll **/
  (() => {
    WebT.elements.scroll_links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = -30,
              element = document.querySelector(this.getAttribute('href')),
              target = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: target, behavior: 'smooth'});
      });
    });
  })();

  /** Reviews carousel **/
  (() => {
    let reviews_carousel =  '#reviews_carousel';
    let swiper = new Swiper(reviews_carousel, {
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      watchOverflow: true
    });

  })();

  /** Reviews date **/
  (() => {
    let date_item = document.querySelectorAll('.js-review-date');
    let currentDate = new Date();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();

    for (let i=0; i < date_item.length; i++) {
      let day = currentDate.getDate() - i;
      date_item[i].innerHTML = `${day}.${month}.${year}`;
    }
  })();

});