import {exist} from './helpers';

const langswitcher = (function() {
  const langswitcher = document.getElementById('js-langswitcher');
  const selected = document.getElementById('js-selected');
  const list = document.getElementById('js-list');

  if (exist(langswitcher)) {
    selected.addEventListener('click', handleSelectedClick);
    list.addEventListener('click', onSelectLang);
    document.addEventListener('click', hideList);
  }

  function handleSelectedClick(event) {
    event.stopPropagation();
    list.classList.add('active');
  }

  function hideList() {
    list.classList.remove('active');
  }

  function onSelectLang(event) {
    event.stopPropagation();
    if (event.target.className === 'lang') {
      const langSelected = event.target.innerHTML;
      const lang = langSelected
        .toString()
        .trim()
        .slice(-2);
      selected.innerHTML = langSelected;
      hideList();
      redirectTo(lang);
    }
  }

  function redirectTo(lang) {
    window.location.href = `${window.location.href}${lang.toLowerCase()}`;
  }
})();

export default langswitcher;
