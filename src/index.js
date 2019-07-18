/** @prettier */

const ACTIVE_ATTR = 'is-active';

const setNextAttribute = (activeAttribute, el, nextAttr) => {
  if (nextAttr) {
    el.setAttribute(activeAttribute, '');
  } else {
    el.removeAttribute(activeAttribute);
  }
};

const updateLayer = (activeAttribute, elHandle, elLayer) => {
  const nextAttr = !elHandle.hasAttribute(activeAttribute);
  setNextAttribute(activeAttribute, elHandle, nextAttr);
  setNextAttribute(activeAttribute, elLayer, nextAttr);
};

const updateHeight = (activeAttribute, changeHeight, elLayer, staticHeight) => {
  let enableUpdate = changeHeight;

  const selfChangeHeight = elLayer.dataset.swicherChangeHeight;
  if (selfChangeHeight && selfChangeHeight === 'true') {
    enableUpdate = true;
  }

  if (!enableUpdate) {
    return;
  }

  const isActive = elLayer.hasAttribute(activeAttribute);
  const height = isActive ? `${staticHeight}px` : '0px';
  elLayer.style.height = height;
};

export const switcher = ({
  changeHeight = true,
  activeAttribute = ACTIVE_ATTR,
} = {}) => {
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
        updateLayer(activeAttribute, elHandle, elLayer);
        updateHeight(activeAttribute, changeHeight, elLayer, staticHeight);
      });

      updateHeight(activeAttribute, changeHeight, elLayer, staticHeight);
    }
  });
};
