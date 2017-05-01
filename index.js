'use strict';

// RULES:
// - must be a class (i.e. `.header`, not `#header` or `header` )
// - must have 2 space indentation
// - must end with semi-colon
// - no space before colon and 1 space after (i.e. key: value;)

// TODO: convert keys from hyphen case to camelcase

function camelCased(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

function convertClass(str) {

  var obj = {};

  var compressed = str.replace(/[\n\r]/g, '');
  var name = compressed.split('{')[0].split('.')[1].split(' ')[0];
  var rulesStr = compressed.split('{')[1].split('}')[0];

  // set name
  obj[name] = {};

  var rules = rulesStr.split(';');

  rules.forEach(function (rule) {
    var key = rule.split(': ')[0].split('  ')[1];
    var val = rule.split(': ')[1];
    if (key) obj[name][camelCased(key)] = val;
  });

  return obj;
}

function numberOfClasses(str) {
  return str.split('{').length - 1;
}

function csstojs(str) {

  var compressed = str.replace(/[\n\r]/g, '');
  var obj = {};

  if (numberOfClasses(str) === 1) return convertClass(str);

  // split @ '.' - prepend '.' before conversion
  compressed.split('.').forEach(function (classs, i) {
    if (classs.length > 0) {
      obj = Object.assign(obj, convertClass('.' + classs));
    }
  });

  return obj;
}

module.exports = csstojs;
