// Recursevly sum all the values from fromN up to toN
function sum(fromN, toN) {
  if (toN === fromN) return fromN;
  return sum(fromN, toN - 1) + toN;
}

module.exports = sum;