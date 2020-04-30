const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const replaceByItem = (array, currentItem, newItem) => {
        const indexArr = array.indexOf(currentItem);
        array.splice(indexArr, 1, newItem);
        console.log(array)
};

    replaceByItem(arr, 'e', 't')
