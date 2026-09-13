class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // let min = Infinity;
        // for(let num of nums) {
        //     min = Math.min(min, num)
        // }
        // return min

        let l = 0, r = nums.length - 1
        let res = nums[0];
        while(l <= r){
            // console.log("nums", nums[l], nums[r])
            if (nums[l] <= nums[r]) {
                // console.log("inside", nums[l])
                res = Math.min(res, nums[l]);
                break;
            }
            
            let m = Math.floor((l+r)/2);
            // console.log(nums[l], nums[m], nums[r]);
            res = Math.min(res, nums[m])
            if(nums[l] <= nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res

    }
}
