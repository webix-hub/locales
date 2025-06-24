![npm (scoped)](https://img.shields.io/npm/v/@wbx/locales.svg)

### Localization files for Webix widgets

- The base locale is English (`{widget}/en.js`)
- Localizations for other languages are contributed by users

### Using with NPM

```js
npm add @wbx/locales
```

and 

```js
import locale from "@wbx/locales/spreadsheet/en";
webix.i18n.spreadsheet = locale;
```

### How to add the new locale

- fork the repo
- copy `{widget}/en.js` to `{widget}/{some lang}.js`
- translate all values to your language
- commit, push, make pull request