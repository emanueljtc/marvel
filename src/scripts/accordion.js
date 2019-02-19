import {exist} from './helpers';

const accordion = (function() {
  const container = document.getElementById('accordion');
  const panels = document.getElementById('panels');
  const imagesList = document.getElementById('images-list');
  const mainImage = document.getElementById('main-image');

  const init = function() {
    if (exist(container)) container.addEventListener('click', handleClickToItem);
    if (exist(imagesList)) imagesList.addEventListener('click', handleClickGalleryImage);
  };

  const handleClickToItem = function(event) {
    if (event.target.classList.contains('title')) {
      const parent = event.target.parentNode;
      const panel = parent.dataset.panel;
      addActiveClassToParentItem(parent);
      setHeightToDescription(parent);
      setActivePanel(panel);
    }
  };

  const addActiveClassToParentItem = function(element) {
    const items = container.querySelectorAll('.item');
    items.forEach(item => {
      item.classList.remove('active');
    });
    element.classList.add('active');
  };

  const setHeightToDescription = function(element) {
    const description = element.querySelector('.description');
    const height = description.scrollHeight;
    description.style.setProperty('--height', height + 'px');
  };

  const setActivePanel = function(panel) {
    const panelElements = panels.querySelectorAll('.panel');
    panelElements.forEach(panel => {
      panel.classList.remove('active');
    });
    panels.querySelector(`[data-item=${panel}]`).classList.add('active');
  };

  const handleClickGalleryImage = function(event) {
    event.stopPropagation();
    if (event.target.classList.contains('image')) {
      // 1. get src attribute
      const src = event.target.getAttribute('src');
      // 2. set src attribute to main image
      mainImage.setAttribute('src', src);
      // 3. add animation class
      mainImage.classList.add('fade-in');
      // 4. remove animation class
      setTimeout(() => {
        mainImage.classList.remove('fade-in');
      }, 1200);
    }
  };

  return {
    init: init,
  };
})();

export default accordion.init();
