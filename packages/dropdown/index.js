const assert = require('assert')
const css = require('sheetify')
const html = require('bel')

const prefix = css`
  :host {

  }
`

module.exports = dropdown

function dropdown (id, items) {
  assert.equal(typeof id, 'string', '@choo-kit/dropdown id should be a string.')
  assert.ok(items instanceof Array, '@choo-kit/dropdown items arguments should be an array.')

  return function (state, emit) {
    return html`<div>dropdown</div>`
  }
}
