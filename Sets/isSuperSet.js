const superSet = (set, subSet) => {
  for (let elem of subSet) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
};

const setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);

const setB = new Set();

setB.add(3);
setB.add(5);

console.log(superSet(setA, setB));
