const findTheOldest = function(people) {
    const yearNow = new Date().getFullYear();

    const oldestPerson = people
        .sort((firstPerson, secondPerson) => {
            let firstPersonYearOfDeath = firstPerson.yearOfDeath;
            let secondPersonYearOfDeath = secondPerson.yearOfDeath;

            if(typeof firstPersonYearOfDeath === 'undefined') {
                firstPersonYearOfDeath = yearNow;
            }

            if(typeof secondPersonYearOfDeath === 'undefined') {
                secondPersonYearOfDeath = yearNow;
            }
            
            const firstPersonAge = firstPersonYearOfDeath - firstPerson.yearOfBirth;
            const secondPersonAge = secondPersonYearOfDeath - secondPerson.yearOfBirth;
            
            return secondPersonAge - firstPersonAge;
        })[0];

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
