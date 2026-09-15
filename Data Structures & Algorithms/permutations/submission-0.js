class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (nums.length === 0) {
            return [[]];
        }

        console.log(nums);

        let perms = this.permute(nums.slice(1));
        let res = [];
        console.log(perms)
        for (let p of perms) {
            for (let i = 0; i <= p.length; i++) {
                console.log("nums[0]", nums[0])
                let p_copy = p.slice();
                console.log("p_copy", p_copy)
                p_copy.splice(i, 0, nums[0]);
                console.log("after splice", p_copy)
                res.push(p_copy);
            }
        }

        return res;
    }
}
