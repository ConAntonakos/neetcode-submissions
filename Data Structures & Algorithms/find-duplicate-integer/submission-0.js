class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let countMap = {}
        for(let num of nums){
            countMap[num] = (countMap[num] || 0) + 1;
        }

        let maxf = -Infinity
        let res = -Infinity;
        for (let [key, value] of Object.entries(countMap)){
            if (value > maxf) {
                maxf = value
                res = key;
            }
        }

        return res
    }
}
