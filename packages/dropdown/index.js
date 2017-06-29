var assert = require('assert')
var css = require('sheetify')
var html = require('bel')
var uuid = require('node-uuid')
var button = require('@choo-kit/button')
var icon = require('@choo-kit/icon')

var prefix = css`
  :host {
    position: relative;
    display: inline-block;

    ul {
      position: absolute;
      list-style-type: none;
      border: 1px solid #000000;
      top: 40px;
      left: 0;

      > li {
        display: block;
        padding-top: 7px;
        padding-bottom: 7px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        user-select: none;
      }

      &:before {
        content: '';
        position: absolute;
        top: -3px;
        left: 0;
        margin: 0 0 0 -6px;
        width: 7px;
        height: 7px;
        background: #fff;
        box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.98);
        will-change: transform;
        transition-property: transform;
        transition-duration: .25s;
        transform: translateX(20px) rotate(45deg);
        z-index: -1;
      }
    }
  }
`

module.exports = dropdown

function dropdown (items, opts) {
  opts = opts || {}

  assert.ok(items instanceof Array, '@choo-kit/dropdown items should be type array')
  assert.equal(typeof opts, 'object', '@choo-kit/dropdown: opts should be type object')

  var classNames = opts.class
    ? prefix + ' ' + opts.class
    : prefix

  var state = { opened: false }

  return function (state, emit) {
    var element = html`
      <div class="${classNames}">
        ${button(items[0].label, { click: onclick })} ${icon('chevron-down')}

        <ul ${state.opened ? '' : 'hidden'} class="ma0 pa0 z-1">
          ${items.map(function (item) { return html`<li class="f5 pl3 pr4 pt2 pb2 bg-white hover-bg-black hover-white pointer" onclick=${item.click}>${item.label}</li>` })}
        </ul>
      </div>
    `

    return element

    function onclick () {
      state.opened = !state.opened

      if (state.opened) {
        document.body.addEventListener('click', onclickoutside, true)
      }

      emit('render')
    }

    function onclickoutside (evt) {
      console.log(element)
      if (!isChildOf(evt.target, element)) {
        state.opened = false
        
        document.body.removeEventListener('click', onclickoutside, true)

        emit('render')
      }
    }

    function isChildOf(child, parent) {
      if (child.parentNode === parent) {
        return true
      } else if (child.parentNode === null) {
        return false
      } else {
        return isChildOf(child.parentNode, parent)
      }
    }
  }
}
