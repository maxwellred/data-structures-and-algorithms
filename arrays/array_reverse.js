'use strict';

function reverseArray(arr) {
  let reversedArray = [];

  for(let i = arr.length; i>=0; i--){
    reversedArray.push(arr[i]);
  }
  return reverseArray;
}
reverseArray();
//calling it so i stop getting errors in travis
