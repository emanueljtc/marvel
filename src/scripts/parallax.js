import {exist} from './helpers';

const parallax = (function() {
  /* home const */
  const $navbar = document.querySelector('.navbar > .inner');
  const $functioning = document.querySelector('.functioning > .inner');
  const $information = document.querySelector('.information > .inner');
  const $productHero = document.querySelector('.product > .hero > .inner');
  const $productLegalInfo = document.querySelector('.product > .legal-info > .inner');
  const $productFuntioning = document.querySelector('.product > .functioning > .inner');
  const $productBuyBallots = document.querySelector('.product > .buy-ballots > .inner');
  const $contactForm = document.querySelector('.contact > .form > .inner');
  const $contactHeader = document.querySelector('.contact > .header > .inner');
  const $informationHeader = document.querySelector('.information > .header > .inner');
  const $informationMain = document.querySelector('.information > .main > .inner');

  /* navbar */
  if (exist($navbar)) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      $navbar.style.backgroundPositionY = `${offset * 0.7}px`;
    });
  }
  /* home */
  if (exist($functioning, $information)) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      $functioning.style.backgroundPositionY = `${offset * 0.7}px`;
      $information.style.backgroundPositionY = `${offset * 0.7}px`;
    });
  }

  /* product */
  if (exist($productHero, $productLegalInfo, $productFuntioning, $productBuyBallots)) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      $productHero.style.backgroundPositionY = `${offset * 0.7}px`;
      $productLegalInfo.style.backgroundPositionY = `${offset * 0.7}px`;
      $productFuntioning.style.backgroundPositionY = `${offset * 0.7}px`;
      $productBuyBallots.style.backgroundPositionY = `${offset * 0.7}px`;
    });
  }

  /* contact */
  if (exist($contactForm, $contactHeader)) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      $contactForm.style.backgroundPositionY = `${offset * 0.7}px`;
      $contactHeader.style.backgroundPositionY = `${offset * 0.7}px`;
    });
  }

  /* information */
  if (exist($informationHeader, $informationMain)) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      $informationHeader.style.backgroundPositionY = `${offset * 0.7}px`;
      $informationMain.style.backgroundPositionY = `${offset * 0.7}px`;
    });
  }
})();

export default parallax;
