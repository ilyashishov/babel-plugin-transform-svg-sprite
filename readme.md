# babel-plugin-transform-svg-sprite

## Note, this repo is still WIP

> Use this module in your babel configuration to strip out the svg imports when using [svg-sprite webpack loader](https://www.npmjs.com/package/svg-sprite-loader)
>
> Useful if creating a bundle specific for the server


## Installation

With [npm](https://www.npmjs.com/) do

    npm install babel-plugin-transform-svg-sprite --save-dev

## add it to your webpack babel-loader configuration or .babelrc

```javascript
...

    presets: ['es2015', 'react'],
    plugins: [
      'transform-svg-sprite'
    ]

...
```

## License

[MIT](http://g14n.info/mit-license/)
