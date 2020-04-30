
const arr = [1, 3, 1, 4, 5, 3, 5, 3, 9];
function myRemoveDuplicate(array) {
    let output = [];
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        let res = 1;
        for (let j = 0; j < output.length; j++) {
            if (output[j] === array[i]) {
                res = -1;
            }
        }
        if (res === 1) output[j++] = array[i];
    }
    return output;
}

console.log(myRemoveDuplicate(arr));