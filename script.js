//your code here

function call() {
    const input = document.getElementById("expression").value.trim();
    const validChars = /^[-+*/\d\s]+$/;
  
    if (!validChars.test(input)) {
      throw new OutOfRangeError(input);
    }
  
    const result = eval(input);
  
    if (!Number.isInteger(result)) {
      throw new InvalidExprError();
    }
  
    alert(`Result: ${result}`);
  }
  
  class OutOfRangeError extends Error {
    constructor(arg) {
      super();
      this.name = "OutOfRangeError";
      alert(this.message = `Expression should only consist of integers and +-/* characters and not ${arg}`);
    }
  }
  
  class InvalidExprError extends Error {
    constructor() {
      super();
      this.name = "InvalidExprError";
      alert(this.message = "Expression should only evaluate addition, subtraction, multiplication, division of positive and negative integers");
    }
  }
  
  if (expression.match(/^[+*/]/)) {
    throw new SyntaxError("Expression should not start with an invalid operator");
  }

  if (expression.match(/[-+*/]$/)) {
    throw new SyntaxError("Expression should not end with an invalid operator");
  }

  const numbers = expression.split(/[-+*/]/);
  for (let i = 0; i < numbers.length; i++) {
    if (!/^[-+]?\d+$/.test(numbers[i].trim())) {
      throw new OutOfRangeError();
    }
  }

  const operators = expression.split(/\d+/).filter(Boolean);
  for (let i = 0; i < operators.length; i++) {
    if (!/[-+*/]/.test(operators[i].trim())) {
      throw new OutOfRangeError();
    }
  }

  // Evaluate the expression
  const result = eval(expression);
  return result;
}

// Testing the evalString function
/*try {
  const expression = "10 + 5 - 2 * 3 / 4";
  const result = evalString(expression);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error.message);
}
*/
