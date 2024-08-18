// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

function merge(nums1, m, nums2, n) {
    // Start from the end of nums1 and nums2
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    // Merge the arrays starting from the largest elements
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    // If there are remaining elements in nums2, add them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]