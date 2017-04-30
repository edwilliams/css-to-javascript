var test = require('ava')
var csstojs = require('./index')

test('convert CSS string into JS object', t => {

  var str = `
  .header {
    background: red;
    border-top: 1px solid blue;
  }`

  t.is( csstojs(str).header.background, 'red' )
  t.is( csstojs(str).header.borderTop, '1px solid blue' )

})
