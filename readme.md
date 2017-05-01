# CSS to JS

> Convert a CSS class with its styles into a JavaScript object

## Install

```
$ npm install css-to-javascript --save
```

## Usage

```
import csstojs from 'css-to-js'

var str = `
.header {
  background: red;
  border-top: 1px solid blue;
}
`
csstojs(str)
// => { header: { background: 'red', borderTop: '1px solid blue' } }
```

## License

MIT © [Ed Williams](http://edwilliams.github.io)
