const choo = require('choo')
const css = require('sheetify')
const html = require('bel')
const button = require('../packages/button')
const dropdown = require('../packages/dropdown')

const app = choo()

css('tachyons')
css`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
  }

  body {
    background: #FFFFFF;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  pre {
    white-space: normal;
  }
`

app.use(function (state, emitter) {
  state.count = 0

  emitter.on('increment', function (count) {
    state.count += count
    emitter.emit('render')
  })
})

app.route('/', mainView)
app.route('#button', mainView)
app.route('#dropdown', mainView)
app.mount('body')

function mainView (state, emit) {
  const prefix = css`
    code {
      white-space: pre-line;
    }
  `

  const listPrefix = css`
    :host {
      counter-reset: list;
      padding: 0;
      list-style-type: none;

      > li {
        position: relative;
        padding-left: 30px;

        &:before {
          counter-increment: list;
          content: counter(list);
          font-size: 9px;
          text-align: center;
          color: white;
          position: absolute;
          padding: 1px;
          padding-left: 2px;
          left: 5px;
          top: 3px;
          background-color: #000000;
          border-radius: 50%;
          width: 16px;
          height: 15px;
        }
      }
    }
  `

  return html`
    <body class=${prefix}>
      <!-- start: choo-kit -->
      <div class="cf center mw8">
        <h1 class="f1 ma0 black-90 pt4">choo-kit <span class="f3 v-mid">🔧</span></h1>
        <h2 class="f6 ttu tracked ma0 mb4 black-60">A set of essential components for the choo framework.</h2>
        
        <section class="mb4">
          <h3 class="f3 black-80 ma0 inline-flex">Components</h3>

          <ul class="${listPrefix} mb0">
            <li class="mb1"><a href="#button" class="underline-hover">@choo-kit/button</a></li>
            <li class="mb1"><a href="#dropdown" class="underline-hover">@choo-kit/dropdown</a></li>
          </ul>
        </section>

        <section class="mb3">
          <h3 id="button" class="f3 black-80 ma0 underline">@choo-kit/button</h3>
          <p>A simple button component.</p>

          <div class="mb3">
            <h4 class="f5 black-80 ma0 mb2">INSTALL</h4>

            <code>npm i --save @choo-kit/button</code>
          </div>
          
          <div class="mb3">
            <h4 class="f5 black-80 ma0 mb2">API</h4>

            <code>button(children, opts?)</code>
          </div>

          <div class="mb3">
            <h4 class="f5 black-80 ma0 mb2">EXAMPLE</h4>
            
            <div class="pa3 ba b--dashed inline-flex">
              <p class="mr3">You clicked the button ${state.count} times</p>
              ${button('Click me', {
                click: function () {
                  emit('increment', 1)
                }
              })}
            </div>
          </div>
        </section>

        <section class="mb3">
          <h3 id="dropdown" class="f3 black-80 ma0 underline">@choo-kit/dropdown</h3>
          <p>A button that popups a list of available options.</p>

          <div class="mb3">
            <h4 class="f5 black-80 ma0 mb2">INSTALL</h4>

            <code>npm i --save @choo-kit/dropdown</code>
          </div>
          
          <div class="mb3">
            <h4 class="f5 black-80 ma0 mb2">API</h4>

            <code>dropdown(id, items[{ label, click? }])</code>
          </div>

          <div class="mb3">
            <h4 class="f5 black-80 ma0 mb2">EXAMPLE</h4>
            
            <div class="pa3 ba b--dashed inline-flex">
              ${dropdown('account.settings', [{label: 'Verify account'}, {label: 'Log out', click: function () { alert('Logout item fired') }}])(state, emit)}
            </div>
          </div>
        </section>

        <section class="mb4">
          <h3 class="f3 black-80 ma0 inline-flex">FAQ</h3>

          <ul class="${listPrefix} mb0">
            <li class="mb1">
              <span class="b black-90">How I can customize/style a component?</span>

              <p>Just pass your <i>sheetify prefix</i> / <i>class names</i> to the \`class\` prop.</p>

              <code>const css = require('sheetify')
                const prefix = css\`:host { color: red; }\`

                button({ class: prefix })
              </code>

              <p>Also, another way is encapsulating the component inside an already styled element.</p>
            </li>
          </ul>
        </section>
      </div>
      <!-- end: choo-kit -->
    </body>
  `
}
