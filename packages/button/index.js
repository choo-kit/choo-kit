const assert = require('assert')
const css = require('sheetify')
const html = require('bel')

const prefix = css`
  :host {

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

  return html`<button class="${classNames} bg-white ba b--black pv1 ph2 f6" onclick=${click}>${text}</button>`
}
