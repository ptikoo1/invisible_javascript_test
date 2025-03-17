function findPairsWithSum(nums1, nums2, k) {
  const result =;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] + nums2[j] === k) {
        result.push([nums1[i], nums2[j]]);
      }
    }
  }

  return result;
}

let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 13;
let pairs = findPairsWithSum(nums1, nums2, k);
console.log(pairs); // Output: [ [ 4, 9 ], [ 7, 6 ] ]
