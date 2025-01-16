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

let list = document.querySelectorAll('.brands__item') // Находим слайды
console.log(list.length)
let techTypesList = document.querySelectorAll('.tech-types__item') // Находим слайды
console.log(techTypesList.length)

let swiper // объявляем переменную свайпер

const swiperActivator = function () {
  // Объявляем функцию активации свайпера
  if (window.innerWidth < 767) {
    // условие функции - срабатывает при экране меньше 768px
    if (!swiper) {
      // если снайпера нет - создай.
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
        keyboard: {
          enable: true,
          onlyInViewPort: true
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          425: {
            slidesPerView: 1.7,
            spaceBetween: 10
          },
          375: {
            slidesPerView: 1.5,
            spaceBetween: 10
          }
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }
  } else {
    swiper.destroy(true, true)
    swiper = null
  }
}

window.addEventListener('resize', swiperActivator)
swiperActivator()

/* -------------------------------------------------------  */
