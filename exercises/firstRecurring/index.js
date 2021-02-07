function firstRecurring(arr){
    const recur = {};
    const arrLen = arr.length;
    for( let i = 0; i < arrLen; i++) {
        if(recur[arr[i]]){
            recur[arr[i]]++;
            if(recur[arr[i]] >= 2){
                return arr[i];
            }
        }
         else 
            recur[arr[i]] = 1;
    }

    return undefined;
}

console.log(firstRecurring('abcbdef'));