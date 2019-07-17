/** @prettier */

const ACTIVE_ATTR = 'is-active';

const setNextAttribute = (el, nextAttr) => {
  if (nextAttr) {
    el.setAttribute(ACTIVE_ATTR, '');
  } else {
    el.removeAttribute(ACTIVE_ATTR);
  }
};

const updateLayer = (elHandle, elLayer) => {
  const nextAttr = !elHandle.hasAttribute(ACTIVE_ATTR);
  setNextAttribute(elHandle, nextAttr);
  setNextAttribute(elLayer, nextAttr);
};

const updateHeight = (elLayer, staticHeight) => {
  const isActive = elLayer.hasAttribute(ACTIVE_ATTR);
  const height = isActive ? `${staticHeight}px` : '0px';
  elLayer.style.height = height;
};

export const switcher = () => {
  const elHandles = document.querySelectorAll('[data-switcher-handle]');

  Array.from(elHandles, elHandle => {
    const key = elHandle.dataset.switcherHandle;
    if (!key) {
      return;
    }

    const elLayer = document.querySelector(`[data-switcher-layer='${key}']`);
    if (elLayer) {
      const staticHeight = elLayer.clientHeight;

      elHandle.addEventListener('click', e => {
        e.preventDefault();
        updateLayer(elHandle, elLayer);
        updateHeight(elLayer, staticHeight);
      });

      updateHeight(elLayer, staticHeight);
    }
  });
};
