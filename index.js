// Code your solution in this file
function findMatching(drivers, string) {
  let matchingDrivers = [];
  for(const person of drivers) {
    if(person.toLowerCase() === string.toLowerCase()) {
      matchingDrivers.push(person);
    }
  }
  return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
  let fuzzyMatchingDrivers = [];
 
  for(const person of drivers) {
    for(let i = 0; i < string.length; i++){
      if (person[i] !== string[i]) {
        i = string.length;
      }
      if (i === string.length - 1) {
        fuzzyMatchingDrivers.push(person);
      }
    }
  }
  return fuzzyMatchingDrivers;
}

function matchName(drivers, string) {
  let nameMatch = [];

  for(const person of drivers) {
    if (person['name'] === string) {
      nameMatch.push(person);
    }
  }
  return nameMatch;
}