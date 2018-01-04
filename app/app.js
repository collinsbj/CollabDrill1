var contestants = [
  {
    name: 'Chrissy',
    age: 45
  },
  {
    name: 'Ben',
    age: 35
  },
  {
    name: 'Clyde',
    age: 100
  }
];

var children = [2, 5, 8, 3];

function sumChildren(array) {
  let total = array.reduce((accumulator, currentValue) => accumulator + currentValue
  ); return total;
}

sumChildren(children);
