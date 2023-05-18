Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

function deDuper(array){
  const deDupedArray = Array.from(new Set(array));
    return deDupedArray;
}

function filterDepuper(array){
  const deDuped = array.filter((e, i) => (array.indexOf(e) === i));
    return deDuped;
}

function recursiveDeduper(array){
  let dedupedArray = []
  n = 0
  if(n === 0){
    return dedupedArray
  }else if (array[0] !== n){
     return dedupedArray.push[0] + recursive(array.slice(1))
  }
}