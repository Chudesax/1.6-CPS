import '../scss/style.scss'

/* блок кода для кнопки читать далее в блоке main ------------ */

let mobileReadMore = document.querySelector('.main__more') // Находим кнопку Читать далее
console.log(mobileReadMore)
let hiddenText = document.querySelector('.main__text--hidden') // Находим скрытый текст
console.log(hiddenText)

mobileReadMore.addEventListener('click', function () {
  // вешаем обработчик событий на кнопку.
  if (mobileReadMore.textContent === 'Читать далее') {
    mobileReadMore.textContent = 'Скрыть' //корректируем текст

    hiddenText.classList.toggle('hidden') // переключаем класс hidden
  } else {
    mobileReadMore.textContent = 'Читать далее'
  }

  if (mobileReadMore.textContent === 'Скрыть') {
    mobileReadMore.classList.add('arrows__up') // Поворачиваем псевдострелочку
  } else {
    mobileReadMore.classList.remove('arrows__up')

    hiddenText.classList.toggle('hidden') // Проверяем класс hidden
  }
})

/* ----------------------------------------------------------------- */

/* Активируем свайпер для блока brands ----------------------------- */

let list = document.querySelectorAll('.brands__item'); // Находим слайды
console.log(list.length);

let swiper;

const swiperActivator = function () {
  if (window.innerWidth < 768) {
    if (!swiper) {
        swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1.5,
        spaceBetween: 50,
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });
    }
  } else {
    swiper.destroy(true, true);
    swiper = null; 
  }

};


window.addEventListener('resize', swiperActivator);
swiperActivator();

/* -------------------------------------------------------  */
