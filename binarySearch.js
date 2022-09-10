function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midpt = Math.round((first + last) / 2);

    if (list[midpt] === target) {
      return midpt;
    } else if (list[midpt] < target) {
      first = midpt + 1;
    } else {
      last = midpt - 1;
    }
  }
  return null;
}

function verify(index) {
  if (index !== null) {
    console.log("Target is found on index :", index);
  } else {
    console.log("Target is not found on the list");
  }
}
// the condition of binary search is that the array should be sorted

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let result = binarySearch(numbers, 7);
verify(result);
