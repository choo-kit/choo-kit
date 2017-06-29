# choo-kit 🔧

A set of essential components for the choo framework.

## Components

- [@choo-kit/button](#choo-kitbutton)
- [@choo-kit/dropdown](#choo-kitdropdown)
- [@choo-kit/icon](#choo-kiticon)

### @choo-kit/button

#### Installing

```sh
npm i @choo-kit/button
```

#### Documentation

```javascript
type Opts = {
  class: string,
  click: Function,
}

button(text: String, opts: Opts)
```

#### Example

```javascript
<div>
  ${button('Click me', {
    click: function () {
      // ..
    }
  })}
</div>
```
  
### @choo-kit/dropdown

#### Installing

```sh
npm i @choo-kit/dropdown
```

#### Documentation

```javascript
type Opts = {
  class: string,
}

dropdown(items: Array, opts: Opts)
```

#### Example

```javascript
<div>
  ${dropdown([
    {label: 'Item'},
    {label: 'Item 2', click: function () {
      // ..
    }}
  ])(state, emit)}
</div>
```

### @choo-kit/icon

#### Installing

```sh
npm i @choo-kit/icon
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
