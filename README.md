# @inotom/switcher

Change layer element height by handle element click.


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
import { switcher } from '@inotom/switcher';

window.addEventListener('load', () => {
  switcher();
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


Overwrite `changeHeight: true` option for each elemetns, by `data-switcher-change-height="true"` data attribute.

```html
<div>
  <a data-switcher-handle="SOME_KEY" href="#">Handle</a>
</div>
<div data-switcher-layer="SOME_KEY" data-switcher-change-height="true">
  Content
</div>
<script src="switcher.min.js"></script>
<script>
  Switcher.switcher({
    changeHeight: false,
  });
</script>
```


## Options

| name | type | defaults | description |
|------|------|----------|-------------|
| `changeHeight` | `Boolean` | `true` | Change layer element height value |
| `activeAttribute` | `String` | `is-active` | Active handle/layer element attribute name |


### Example options

```js
switcher({
  changeHeight: false,
  activeAttribute: 'is-custom-active',
});
```


## License

MIT


## Author

inotom
