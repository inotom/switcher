# @inotom/switcher

Change Layer element height by handle element click.


## Demo

[Demo](http://sandbox.serendip.ws/switcher.html)


## Install

### npm

```
npm install -D @inotom/switcher
```


## Usage

### Browser

```html
<script src="switcher.min.js"></script>
<script>
  Switcher.switcher();
</script>
```


### ES module

```js
import { Switcher } from '@inotom/switcher';

window.addEventListener('load', () => {
  Switcher();
});
```


### HTML

Set a same string key to `data-switcher-handle` and `data-switcher-layer` attributes.

The `is-active` attribute of these elements are toggled , when clicking `*[data-switcher-handle]` element.

```html
<div>
  <a data-switcher-handle="SOME_KEY" href="#">Handle</a>
</div>
<div data-switcher-layer="SOME_KEY">
  Content
</div>
```


## License

MIT


## Author

inotom
