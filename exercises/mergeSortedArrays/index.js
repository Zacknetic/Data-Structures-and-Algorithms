function mergeSortedArrays(arr1, arr2){
  let index = 0;
  while(arr2.length > 0){
    if (arr2[0] <= arr1[index] || !arr1[index]){
      arr1.splice(index, 0,arr2.shift())
    }
    index++;
  }
  return arr1;
}

  const arr1 = [1,2,4,6];
  const arr2 = [4,5,7];
console.log(mergeSortedArrays(arr1, arr2));