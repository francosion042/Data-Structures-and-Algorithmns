//using sets to check for duplicates in an array

const checkDuplicates = arr => {
  const checker = new Set(arr);

  return checker.size < arr.length;
};

console.log(checkDuplicates([1, 2, 2, 3, 4, 5]));
