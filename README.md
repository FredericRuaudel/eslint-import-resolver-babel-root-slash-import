# eslint-import-resolver-babel-root-slash-import [![NPM version](https://badge.fury.io/js/eslint-import-resolver-babel-root-slash-import.svg)](http://badge.fury.io/js/eslint-import-resolver-babel-root-slash-import)

A [babel-root-slash-import](https://github.com/mantrajs/babel-root-slash-import)
resolver for [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).

## Installation

```sh
npm install --save-dev eslint-plugin-import eslint-import-resolver-babel-root-slash-import
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
      "babel-root-slash-import": {}
    }
  }
}
```

### Debugging

You can debug the result of the plugin by adding `debug` option to `true` in your `.eslintrc` file:

```json
{
  "extends": "airbnb",
  "rules": {},
  "settings": {
    "import/resolver": {
      "babel-root-slash-import": { "debug": true}
    }
  }
}
```

Then run your linter and find the result in `/tmp/eslint-import-resolver-babel-root-slash-import.log` :

**Example:**
```
/js/store/myFile.js - /path/to/projects/myJSProject/index.js- absolute - true - /path/to/projects/myJSProject/js/store/myFile.js

./js/store/myFile.js - /path/to/projects/myJSProject/index.js- other - true - /path/to/projects/myJSProject/js/store/myFile.js

/js/store/myFile.js - /path/to/projects/index.js- absolute - false - undefined
```

The format is `{import value} - {file containing the import}- {absolute|other} - {true is resolving succeeds} - {resolved path}`

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.


[babel-root-slash-import]: https://github.com/mantrajs/babel-root-slash-import
