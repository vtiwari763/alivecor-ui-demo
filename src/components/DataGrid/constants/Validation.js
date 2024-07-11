export const VALIDATION_RULES = {
  EMAIL: (value, message) => {
    const isEmailValid =
      !!value && /^[A-Z0-9'._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    if (!isEmailValid) return message || "Entered email is not valid";
    return isEmailValid;
  },
  NUMBER_MORE_THAN_ZERO: (value, message) => {
    if (!/[0-9]/.test(value)) return "Only numerical values are allowed";
    return value && value > 0 ? true : message || "Value should be more than 0";
  },
  REQUIRED: (value, message) => {
    const errorText = message || "This field is required";
    return String(value).length > 0 ? true : errorText;
  },
  ONLY_NUMBER: (value, message) => {
    const isValid = /^[0-9]*$/.test(value);
    return isValid ? true : message || "Only numerical values are allowed";
  },
  ONLY_LETTERS_NUMBERS_DASHES_UNDERSCORE: (value, message) => {
    const isValid = /^[A-Za-z0-9_-]*$/.test(value);
    return isValid
      ? true
      : message || "Only letters, digits, underscores, and hyphen are allowed";
  },
  MUST_START_WITH_LETTER: (value, message) => {
    const isValid = /^[a-zA-Z].*$/.test(value);
    return isValid ? true : message || "Must begin with a letter";
  },
};

const validateFun = (validationRule, value) => {
  if (typeof validationRule === "function") {
    return validationRule(value);
  }
  if (typeof validationRule === "object") {
    return validationRule.test(value);
  }
  return true;
};

// to validate list of validations
export const validate = (value, validators = []) => {
  let isValid = false;
  for (let i = 0; i < validators.length; i++) {
    const validator = validators[i];
    isValid = validateFun(validator, value);
    if (isValid !== true) break;
  }
  return isValid;
};
