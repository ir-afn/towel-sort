module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) {
    return result;
  }
  for (const item of matrix) {
    let index = matrix.indexOf(item);
    if (index % 2 === 0) {
      for (let i = 0; i < item.length; i += 1) {
        result.push(item[i]);
      }
    } else {
      for (let i = item.length - 1; i >= 0; i -= 1) {
        result.push(item[i]);
      }
    }
  }
  return result;
};
