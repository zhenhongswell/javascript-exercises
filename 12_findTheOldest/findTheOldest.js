const findTheOldest = function (people = []) {
    people.sort((lastPerson, nextPerson) => {
        //if the lastPerson haven't died yet
        if (lastPerson['yearOfDeath'] == null || lastPerson['yearOfDeath'] == undefined){
            lastPerson['yearOfDeath'] = new Date().getFullYear();
        }
        //if the nextPerson haven't died yet
        if (nextPerson['yearOfDeath'] == null || nextPerson['yearOfDeath'] == undefined){
            nextPerson['yearOfDeath'] = new Date().getFullYear();
        }
        // calculate the lived time,and the person is already died
        const lastPersonLived = lastPerson['yearOfDeath'] - lastPerson['yearOfBirth'];
        const nextPersonLived = nextPerson['yearOfDeath'] - nextPerson['yearOfBirth'];

        //check who lives longer.
        if (lastPersonLived < nextPersonLived) {
            return 1;
        }
        else {
            return -1;
        }
    })
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
