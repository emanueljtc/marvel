/* eslint-disabled */
export const exist = function() {
  for (let element of arguments) {
    if (!element) return false;
  }
  return true;
};

export const parseHTML = function(str) {
  // let tmp = document.implementation.createHTMLDocument();
  // tmp.body.innerHTML = str;
  // return tmp.body.children;
  return document.createRange().createContextualFragment(str).children;
};

export const simulateClick = function(elem) {
  // Create our event (with options)
  const evt = new MouseEvent('click', {
    bubbles: false,
    cancelable: true,
    view: window,
  });
  // If cancelled, don't dispatch our event
  const canceled = !elem.dispatchEvent(evt); // eslint-disable-line no-unused-vars
};
