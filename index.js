const lowercase = "abcdefghijklmnopqrstuvwxyz",
    numeric = "0123456789",
    symbol = "!#$%&+,.-?@_;:>=<";

/**
 * Selecting a random char from the chars given as a parameter.
 * @param chars string word to use for password.
 * @returns {string}
 */
function chooseRandomCharacter(chars) {
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

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
export default function createPassword({length = 8, hasUppercase = true, hasLowercase = true, hasNumeric = true, hasSymbol = true, prefix = ""}) {
    const {chars, temp_chars} = checkParameters({hasUppercase, hasLowercase, hasNumeric, hasSymbol});
    return generatePassword({length, chars, temp_chars, prefix});
}

/**
 * It performs char assignments that must be in the password for the values given as parameters.
 * @param hasUppercase
 * @param hasLowercase
 * @param hasNumeric
 * @param hasSymbol
 * @returns {{temp_chars: string, chars: string}}
 */
function checkParameters({hasUppercase, hasLowercase, hasNumeric, hasSymbol}) {
    let chars = "", temp_chars = "";

    /**
     * If hasUppercase is true, we assign it to a temporary value so that there is 1 uppercase in the password.
     * To avoid the case of not returning uppercase char in random password operation.
     * It also applies to other conditions. (hasLowercase, hasNumeric, hasSymbol)
     */
    if (hasUppercase) {
        chars += lowercase.toUpperCase();
        temp_chars += chooseRandomCharacter(chars);
    }

    if (hasLowercase) {
        chars += lowercase;
        temp_chars += chooseRandomCharacter(lowercase);
    }

    if (hasNumeric) {
        chars += numeric;
        temp_chars += chooseRandomCharacter(numeric);
    }

    if (hasSymbol) {
        chars += symbol;
        temp_chars += chooseRandomCharacter(symbol);
    }

    /**
     * @param chars string word to be chosen randomly for password.
     * @param temp_chars which must be one in the password.
     */
    return {chars, temp_chars};
}

/**
 * The function where the password is created
 * @param length password's length
 * @param chars  for which the password will be generated.
 * @param temp_chars which must be 1 in the password.
 * @param prefix
 * @returns {*}
 */
function generatePassword({length, chars, temp_chars, prefix}) {
    length = length - prefix.length - temp_chars.length;

    for (let i = 0; i < length; i++)
        prefix += chooseRandomCharacter(chars);

    return prefix + temp_chars;
}