function processArray(array){
    return array.map (num => {
        if(num % 2 === 0){
            return num * num;
        }
        else {
            return num * 3;
        }
    }
    );
}

let inputArray = [1, 2, 3, 4, 5];
let resultArray = processArray(inputArray);
console.log(resultArray);

function formatArrayStrings(stringsArray, numbersArray) {
    return stringsArray.map((str, index) => {
        if (numbersArray[index] % 2 === 0) {
            return str.toUpperCase();
        }
        else {
            return str.toLowerCase();
        }
    })
}

const inputStrings = ['Hello', 'World', 'Goodbye']
const inputNumbers = [1, 2, 3, 4, 5];
const processNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processNumbers);
console.log(formattedStrings);