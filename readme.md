# tree shaking tests
```bash

npx webpack
npx webpack --mode=production
 
```


## issue 1
run `npx webpack --mode=production`  
the built minified file `dist/entry3-call-sub.js` should not contain those functions because never called 
```js
function u(e) {
        console.log("module 1 - b called: " + e);
    }
    function r(e) {
        console.log("module 1 - c called: " + e);
    }
function u(e) {
        console.log("module 2 - b called: " + e);
    }
    function r(e) {
        console.log("module 2 - c called: " + e);
    }

```
