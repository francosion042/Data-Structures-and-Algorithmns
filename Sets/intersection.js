const intersectionSet = (set1, set2) => {
  let intersection = new Set();
  for (let elem of set1) {
    if (set2.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
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
setB.add(6);
setB.add(7);
setB.add(8);

console.log(intersectionSet(setA, setB));
