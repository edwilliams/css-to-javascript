var test = require('ava')
var csstojs = require('./index')

var multi = `
.btn {
  background-color: #E0E0E0;
  width: 100%;
  height: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border-top: 1px solid #001030;
  border-bottom: 1px solid #001030;
}
.table {
  border-right: 1px solid #001030;
}
.tr {
  text-decoration: none;
  background: none;
  font-size: 13px;
  line-height: 18px;
  font-weight: normal;
}`

var single = `
.header {
  background: red;
  border-top: 1px solid blue;
}`

test('convert a CSS string, containing one class, into a JS object', t => {

  t.is( csstojs(single).header.background, 'red' )
  t.is( csstojs(single).header.borderTop, '1px solid blue' )

})

test('convert a CSS string, containing two classes, into a JS object', t => {

  t.is( csstojs(multi).table.borderRight, '1px solid #001030' )
  t.is( csstojs(multi).tr.background, 'none' )

})
