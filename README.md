# eslint-import-resolver-babel-root-import

A [babel-root-slash-import](https://github.com/mantrajs/babel-root-slash-import)
resolver for [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).

## Installation

```sh
npm install --save-dev eslint-plugin-import eslint-import-resolver-babel-root-import
```

## Usage

Inside your `.eslintrc` file, pass this resolver to `eslint-plugin-import`:
```
"settings": {
  "import/resolver": {
    "babel-root-slash-import": {}
  }
}
```

And see [babel-root-slash-import][babel-root-slash-import] to know how to configure.

### Example

```json
{
  "extends": "airbnb",
  "rules": {},
  "settings": {
    "import/resolver": {
      "babel-root-import": {}
    }
  }
}
```

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.


[babel-root-slash-import]: https://github.com/mantrajs/babel-root-slash-import
