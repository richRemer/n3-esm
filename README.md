Important!  This project is deprecated in favor of using
[jspm](https://www.npmjs.com/package/jspm) to create
[importmaps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap).

This is a fork of the [rdfjs/N3.js project](https://github.com/rdfjs/N3.js)
suitable for use in the browser.  Specifically, this fork means to obviate any
need for using a bundler such as webpack or browserify so that the code can be
imported directly from caches like [unpkg.com](https://unpkg.com) with minimal
[importmaps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap).

```html
<html>
  <script type="importmap">
    {
      "imports": {
        "n3": "https://unpkg.com/@welib/n3-esm/n3.js"
      }
    }
  </script>
  <script type="module">
    import {Parser} from "n3";
  </script>
</html>
```
