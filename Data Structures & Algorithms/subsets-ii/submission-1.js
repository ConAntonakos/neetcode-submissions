class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        nums = nums.sort((a,b) => a-b);

        function dfs(i, subset){
            if(i === nums.length){
                res.push([...subset])
                return;
            }
            // console.log("subset before", subset)
            subset.push(nums[i])
            // console.log("subset after", subset)
            dfs(i+1, subset)
            // console.log("dfs after", subset)

            subset.pop();
            // console.log("pop after", subset)
            while(i < nums.length && nums[i] === nums[i+1]){
                i+=1;
            }
            // console.log("while after", i)
            dfs(i+1, subset)
        }

        dfs(0, [])

        return res;
    }
}
