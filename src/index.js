/** @prettier */

const ACTIVE_ATTR = 'is-active';

const setNextAttribute = (activeAttribute, el, nextAttr) => {
  if (nextAttr) {
    el.setAttribute(activeAttribute, '');
  } else {
    el.removeAttribute(activeAttribute);
  }
};

const closeLayer = (activeAttribute, elHandle, elLayer) => {
  setNextAttribute(activeAttribute, elHandle, false);
  setNextAttribute(activeAttribute, elLayer, false);
};

const updateLayer = (activeAttribute, elHandle, elLayer) => {
  const nextAttr = !elHandle.hasAttribute(activeAttribute);
  setNextAttribute(activeAttribute, elHandle, nextAttr);
  setNextAttribute(activeAttribute, elLayer, nextAttr);
};

const isEnableUpdate = (changeHeight, elLayer) => {
  let enableUpdate = changeHeight;

  const selfChangeHeight = elLayer.dataset.switcherChangeHeight;
  if (selfChangeHeight) {
    enableUpdate = selfChangeHeight === 'true';
  }

  return enableUpdate;
};

const closeHeight = (activeAttribute, changeHeight, elLayer) => {
  if (!isEnableUpdate(changeHeight, elLayer)) {
    return;
  }

  elLayer.style.height = '0px';
};

const updateHeight = (activeAttribute, changeHeight, elLayer, staticHeight) => {
  if (!isEnableUpdate(changeHeight, elLayer)) {
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

      const elCloses = document.querySelectorAll(
        `[data-switcher-close='${key}']`
      );
      Array.from(elCloses, elClose => {
        elClose.addEventListener('click', e => {
          e.preventDefault();
          closeLayer(activeAttribute, elHandle, elLayer);
          closeHeight(activeAttribute, changeHeight, elLayer);
        });
      });

      updateHeight(activeAttribute, changeHeight, elLayer, staticHeight);
    }
  });
};
