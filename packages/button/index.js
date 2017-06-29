var assert = require('assert')
var css = require('sheetify')
var html = require('bel')

var prefix = css`
  :host {
    cursor: pointer;
  }
`

module.exports = button

function button (text, opts) {
  opts = opts || {}

  assert.equal(typeof text, 'string', '@choo-kit/button: text should be type string')
  assert.equal(typeof opts, 'object', '@choo-kit/button: opts should be type object')

  var classNames = opts.class
    ? prefix + ' ' + opts.class
    : prefix

  var click = opts.click
    ? opts.click
    : null

  return html`<button class="${classNames} bg-white hover-bg-black hover-white ba b--black pv2 ph3 f6" onclick=${click}>${text}</button>`
}
