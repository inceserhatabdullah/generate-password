export default class {

    #temp_password = "";
    #keys = "";
    #password = "";
    #_lowercase = "abcdefghijklmnopqrstuvwxyz";
    #_numeric = "0123456789";
    #_special = "!#$%&+,.-?@_;:>=<";

    /**
     *
     * @param length is password's length.
     * @param isUppercase case of capital letters in the password to be created.
     * @param isLowercase case of lowercase letters in the password.
     * @param isNumeric the state of having a number in the password.
     * @param isSpecial the presence of a special character in the password.
     * @param prefix will there be a prefix in the password?
     */
    constructor({length = 8, isUppercase = true, isLowercase = true, isNumeric = true, isSpecial = true, prefix = ""}) {
        this.length = length;
        this.isUppercase = isUppercase;
        this.isLowercase = isLowercase;
        this.isNumeric = isNumeric;
        this.isSpecial = isSpecial;
        this.prefix = prefix;
    }

    /**
     * Returns the randomly password-string for entered length parameter.
     * @returns {string}
     */
    #generatePassword() {

        if (this.length < 8)
            return "Your password should be at least 8 characters!";

        if (this.isLowercase) {
            this.#temp_password += this.#randomlyChooseOneCharacterFromRule(this.#_lowercase);
            this.#keys += this.#_lowercase;
        }

        if (this.isUppercase) {
            this.#temp_password += this.#randomlyChooseOneCharacterFromRule(this.#_lowercase).toUpperCase();
            this.#keys += this.#_lowercase.toUpperCase();
        }

        if (this.isNumeric) {
            this.#temp_password += this.#randomlyChooseOneCharacterFromRule(this.#_numeric);
            this.#keys += this.#_numeric;
        }

        if (this.isSpecial) {
            this.#temp_password += this.#randomlyChooseOneCharacterFromRule(this.#_special);
            this.#keys += this.#_special;
        }

        if (!this.isLowercase && !this.isUppercase && !this.isNumeric && !this.isSpecial)
            return "There must be at least one rule.\nAll cannot be false!";

        return this.#randomlyChoosesPassword();
    }

    /**
     * The function in which a random phrase is created in the pattern after the pattern to be created
     * for the password is determined.
     * @returns {string}
     */
    #randomlyChoosesPassword() {
        const lengthPassword = this.length - this.prefix.length - this.#temp_password.length;

        for (let i = 0; i < lengthPassword; i++) {
            this.#password += this.#keys.charAt(Math.floor(Math.random() * this.#keys.length));
        }

        return this.prefix + this.#password + this.#temp_password;
    }

    /**
     * The process of choosing at least one character for the rule according to which rule the password will be created.
     * @param keys word pattern with rule
     * @returns {string}
     */
    #randomlyChooseOneCharacterFromRule(keys) {
        return keys.charAt(Math.floor(Math.random() * keys.length));
    }

    // public generatePassword function.
    generatePassword() {
        return this.#generatePassword();
    }
}