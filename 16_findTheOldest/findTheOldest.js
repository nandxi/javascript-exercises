const findTheOldest = function(arr) {
  const oldest = arr.reduce((lastPerson, nextPerson) => {
    if (!lastPerson.yearOfDeath) lastPerson.yearOfDeath = (new Date()).getFullYear();
    if (!nextPerson.yearOfDeath) nextPerson.yearOfDeath = (new Date()).getFullYear();
    let lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
    let nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    return ((lastPersonAge > nextPersonAge) ? lastPerson : nextPerson);
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
