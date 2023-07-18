const stringLength = (str) => {
  if (str.length > 10) {
    throw new Error("String should not exceed 10 characters");
  } else if (str.length === 0) {
throw new Error("String should have at least 1 character");
  } 
  return str.length;
};

module.exports = stringLength;