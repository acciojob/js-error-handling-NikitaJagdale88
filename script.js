//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}


function evalString(str) {
  try {
    if (/[\+\-\*\/]{2,}/.test(str)) {
      throw new InvalidExprError();
    }
    if (/^[\+\/\*]/.test(str)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }
    if (/[\+\/\*\-]$/.test(str)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }
    let result = eval(str);
    if (!Number.isInteger(result)) {
      throw new OutOfRangeError(result);
    }
    return result;
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      throw error;
    }
  }
}

// example usage:
console.log(evalString("1+2*3-4/2")); // expected output: 5
console.log(evalString("1.5+2")); // expected output: OutOfRangeError
console.log(evalString("1++2")); // expected output: InvalidExprError
console.log(evalString("+1+2")); // expected output: SyntaxError
console.log(evalString("1+2-")); // expected output: SyntaxError
