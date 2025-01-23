import { NumbersValidator } from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("isNumberEven positive tests", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return true when provided with an even number", () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.true;
  });

  it("should return false when provided with an odd number", () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it("should throw an error when provided a string", () => {
    expect(() => {
      validator.isNumberEven("5");
    }).to.throw('[5] is not of type "Number" it is of type "string"');
  });

  it("should return true for a positive number", () => {
    const input = 5;
    const result = validator.isNumberEven(input);
    expect(result).to.be.false;
  });

  it("should throw an error with message '...is too low, Provide a number above 0' when provided with a 0", () => {
    const input = 0;
    expect(() => {
      validator.isNumberEven(input);
    })
      .to.throw(Error)
      .with.property("message", "[0] is too low, Provide a number above 0");
  });

  it("should throw an error with message '...is too low, Provide a number above 0' when provided with a negative number", () => {
    const input = -3;
    expect(() => {
      validator.isNumberEven(input);
    }).to.throw("[-3] is too low, Provide a number above 0");
  });
});

describe("getEvenNumbersFromArray", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it("should return an array of even numbers when given an array of numbers", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [2, 4, 6];
    const output = validator.getEvenNumbersFromArray(input);
    expect(output).to.deep.equal(expectedOutput);
  });

  it("should return an empty array when given an array with no even numbers", () => {
    const input = [1, 3, 5];
    const output = validator.getEvenNumbersFromArray(input);
    expect(output).to.be.an("array").that.is.empty;
  });

  it("should throw an error when given a non-array input", () => {
    const input = "not an array";
    expect(() => validator.getEvenNumbersFromArray(input)).to.throw(
      `[not an array] is not an array of "Numbers"`
    );
  });

  it("should throw an error when given an array with non-numeric elements", () => {
    const input = [1, 2, "not a number", 4];
    expect(() => validator.getEvenNumbersFromArray(input)).to.throw(
      `[1,2,not a number,4] is not an array of "Numbers"`
    );
  });
});

describe("isAllNumbers", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it("should return true for an array of numbers", () => {
    const input = [1, 2, 3, 4, 5];
    const result = validator.isAllNumbers(input);
    expect(result).to.be.true;
  });
  it("should return true for an empty array", () => {
    const input = [];
    const result = validator.isAllNumbers(input);
    expect(result).to.be.true;
  });
  it("should return false if the argument is not an array", () => {
    const input = "not an array";
    expect(() => validator.isAllNumbers(input)).to.throw(
      "[not an array] is not an array"
    );
  });
  it("should return false if the array contains non-numeric elements", () => {
    const input = [1, 2, "not a number", 4];
    const result = validator.isAllNumbers(input);
    expect(result).to.be.false;
  });
  it("should return false if any element in the array is not a number", () => {
    const input = [1, 2, 3, "not a number", 5];
    const result = validator.isAllNumbers(input);
    expect(result).to.be.false;
  });
});

describe("isInteger", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  it("should return true for an integer number", () => {
    const input = 5;
    const result = validator.isInteger(input);
    expect(result).to.be.true;
  });
  it("should return true for 0", () => {
    const input = 0;
    const result = validator.isInteger(input);
    expect(result).to.be.true;
  });
  it("should return true for negative integer number", () => {
    const input = -5;
    const result = validator.isInteger(input);
    expect(result).to.be.true;
  });
  it("should return false for a non-integer number", () => {
    const input = 5.5;
    const result = validator.isInteger(input);
    expect(result).to.be.false;
  });
  it("should throw an error if the input is not a number", () => {
    const input = "not a number";
    expect(() => validator.isInteger(input)).to.throw(
      "[not a number] is not a number"
    );
  });
});
