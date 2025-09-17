let data = {
  0: {
    title: 'Earth',
    childIds: [1, 2],
  },
  1: {
    title: 'Moon',
    childIds: [],
  },
  2: {
    title: 'Africa',
    childIds: [],
  },
};
let person = data[0];
let newParent = { ...person, childIds: person.childIds.filter(id => id !== 2)};
let newObj = { ...data, 0: newParent};
console.log(newObj);