import createPassword from "./index.js";

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
