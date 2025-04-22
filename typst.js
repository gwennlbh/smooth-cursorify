waitForElementToExist('.cm-cursorLayer .cm-cursor').then(applyStyles)
waitForElementToExist('.cm-cursorLayer .cm-fat-cursor').then(applyStyles)

function applyStyles(element) {
	console.info(`[smooth-cursorify] Got cursor element`, element)
	element.style.transition = "all 80ms ease"
	console.info(`[smooth-cursorify] Applied styles to cursor`)
}

function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}
