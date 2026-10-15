class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freqMap = {}
        for (let num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        let max = 0;
        let maxElem = 0;
        for(let [num, freq] of Object.entries(freqMap)){
            if (freq > max){
                max = freq;
                maxElem = num;
            }
        }

        return maxElem;
    }
}
