# Generate-Password

A package that can perform random password generation process according to the desired features.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install *@asince_npm/generate-password*.

```bash
npm install @asince_npm/generate-password
```

## Quick Start

* After importing the **createPassword** function, you can create the password as in the code block below.

### Initiating

```js
import createPassword from "@asince_npm/generate-password/index.js";

/**
 *
 * @param length is password's length. Default 8.
 * @param hasUppercase case of capital letters in the password to be created. Default true.
 * @param hasLowercase case of lowercase letters in the password. Default true.
 * @param hasNumeric the state of having a number in the password. Default true.
 * @param hasSymbol the presence of a special character in the password. Default true.
 * @param prefix will there be a prefix in the password? Default "" (empty char)
 * @returns {*}
 */
const password = createPassword({
          length: 8,
          hasUppercase: true,
          hasLowercase: true,
          hasNumeric: true,
          hasSymbol: true,
          prefix: ""
        }),
        passwordWithPrefix = createPassword({
          length: 12,
          hasUppercase: false,
          hasSymbol: false,
          prefix: "pre"
        });
console.log("Password:", password);
console.log("Password With Prefix:", passwordWithPrefix);

```

#### Response

```
Password: vDRSJq5@

Password With Prefix: pre2ehziq6f1
```

## Import Package for ECMAScript6

- You can simply run the **script.sh** script, which downloads the babel npm packages for *ECMAScript6* and creates the
  *.babelrc* file.

### Script Contents
````sh
npm install babel-core babel-cli babel-preset-env --save-dev
printf '{ "presets": ["env"] }' > .babelrc

# A script for configuring the use of the javascript es6 module.
````
### Run Command
```bash
bash node_modules/@asince_npm/generate-password/script.sh
```