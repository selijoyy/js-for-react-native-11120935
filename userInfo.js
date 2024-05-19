function createUserProfiles(namesArr, modifiedNamesArr) {
    let id = 1;
    return namesArr.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNamesArr[index],
            id: id++
        };
    });
}

let originalNames = ['Alice', 'Bob', 'Charlie'];
let modifiedNames = ['alice', 'BOB', 'charlie'];
let userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);