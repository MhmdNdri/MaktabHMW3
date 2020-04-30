let arr = [[2,3],5,[[[2,9],4],4],1,0];

let flatArray = function (array , tedad){
    let flatArray = array.flat(tedad);
    return flatArray;
}

console.log(flatArray(arr, 2));