function stringLength(string) {
  const length = string.length;

  if (length === 0) {
    throw new Error("The string must contain at least 1 character.");
  }

  if (length > 10) {
    throw new Error("The string must not exceed 10 characters.");
  }

  return length;
}

module.exports = stringLength;
