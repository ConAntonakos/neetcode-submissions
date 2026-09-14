class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];
        candidates = candidates.sort((a, b) => a - b);
        function dfs(i, cur, total){
            if(total === target){
                res.push([...cur])
                return;
            }

            if(total > target || i >= candidates.length){
                return;
            }

            // include candidates[i]
            cur.push(candidates[i]);
            dfs(i + 1, cur, total + candidates[i]);

            cur.pop();
            while (i + 1 < candidates.length && candidates[i] === candidates[i+1]){
                i++;
            }
            dfs(i+1, cur, total)
        }

        dfs(0, [], 0)
        return res;
    }
}
