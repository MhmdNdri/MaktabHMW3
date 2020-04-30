const num = [2, 3, 4];

function findByItem(array, i) {
    const finding = array.indexOf(i);
    console.log(`item: ${i} - index: ${finding}`);
}

findByItem(num, 3);