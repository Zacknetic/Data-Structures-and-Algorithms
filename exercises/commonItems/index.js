function commonItems(arr1, arr2){
    const bag = {};
    const arrSize = Math.max(arr1.length, arr2.length);

    for(let i = 0; i < arrSize; i++){
        if (bag[arr1[i]]) {
            bag[arr1[i]]++;
          } else {
            bag[arr1[i]] = 1;
          }
          if (bag[arr2[i]]) {
            bag[arr2[i]]++;
          } else {
            bag[arr2[i]] = 1;
          }
        if(bag[arr1[i]] >= 2 || bag[arr2[i]] >= 2){
            return true;
        }
    }
    return false;
    
}
const arr1 = ['a','b','c','x'];
const arr2 = ['z','y','x'];

console.log(commonItems(arr1, arr2));