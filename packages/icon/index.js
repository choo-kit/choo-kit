var assert = require('assert')
var css = require('sheetify')
var html = require('bel')

module.exports = icon

function icon (iconName, opts) {
  var el = html`<div></div>`

  switch (iconName) {
    case 'chevron-down':
    default:
      return el
  }
}
