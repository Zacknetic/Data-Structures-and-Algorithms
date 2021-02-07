function firstConsecutive(arr){
    let prev = '';
    const arrLen = arr.length;
    for( let i = 0; i < arrLen; i++) {
        if(arr[i] === prev) {
            return prev;
        }
        prev = arr[i]
    }
    return undefined;
}

console.log(firstConsecutive('abcdd'));