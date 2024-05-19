function processArray(numArray){
    return numArray.map (num => {
        if(num % 2 === 0){
            return num * num;
        }
        else {
            return num * 3;
        }
    }
    );
}

let selection = processArray([1, 2, 3, 4, 5]);
console.log(selection);