const unionSet = (setA, setB) => {
  const union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
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

console.log(unionSet(setA, setB));
