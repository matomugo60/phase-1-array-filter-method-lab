// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (p,q) => p.filter(p => p.toLowerCase() === q.toLowerCase())

const fuzzyMatch = (p,q) => p.filter(p => p.charAt(0) === q.charAt(0))

const matchName = (p,q) => p.filter(p => p.name === q)