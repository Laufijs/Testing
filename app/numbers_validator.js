class NumbersValidator {
  
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== "number") {
      throw new Error(
        `[${number}] is not of type "Number" it is of type "${typeOfVariable}"`
      );
    } else if (number === 0) {
      throw new Error(`[${number}] is too low, Provide a number above 0`);
    } else if (number < 0) {
      throw new Error(`[${number}] is too low, Provide a number above 0`);
    } else {
      return number % 2 === 0;
    }
  }

  
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (
      Array.isArray(arrayOfNumbers) &&
      arrayOfNumbers.every((item) => typeof item === "number")
    ) {
      return arrayOfNumbers.filter(this.isNumberEven);
    }
    throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
  }

  
  isAllNumbers(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array`);
    }
    return arrayOfNumbers.every((n) => typeof n === "number");
  }


  isInteger(n) {
    if (typeof n !== "number") {
      throw new Error(`[${n}] is not a number`);
    }
    return Number.isInteger(n);
  }
}

export { NumbersValidator };
