const capitalize = require("./capitalize");

test("capitalize capitalizes the first character of a string", () => {
  // Arrange
  const inputString = "hello world";

  // Act
  const result = capitalize(inputString);

  // Assert
  expect(result).toBe("Hello world");
});
