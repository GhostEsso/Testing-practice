const reverseString = require("./reverse");

test("reverseString reverses the given string", () => {
  // Arrange
  const inputString = "Hello, World!";

  // Act
  const result = reverseString(inputString);

  // Assert
  expect(result).toBe("!dlroW ,olleH");
});
