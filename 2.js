let arr1 = [1,2,3];

let arr2 = [4,5,6];

let arr3 = [9,8,7,0]; 

let sortArrays = function (array1,array2,array3){
    let combineArray = array1.concat( array2 , array3);
    let sortArr = combineArray.sort() ; 
    return sortArr ; 
}

console.log(sortArrays(arr1,arr2,arr3));