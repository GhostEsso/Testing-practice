const stringLength = require("./string");

test("stringLength throws an error if the string is empty", () => {
  // Arrange
  const inputString = "";

  // Act and Assert
  expect(() => {
    stringLength(inputString);
  }).toThrow("The string must contain at least 1 character.");
});

test("stringLength throws an error if the string has more than 10 characters", () => {
  // Arrange
  const inputString = "This is a long string.";

  // Act and Assert
  expect(() => {
    stringLength(inputString);
  }).toThrow("The string must not exceed 10 characters.");
});
