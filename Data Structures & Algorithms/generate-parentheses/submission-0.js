class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let stack = []
        let res = []
        function backtrack(openN, closedN, stack){
            if (openN === closedN && openN === n) {
                res.push(stack);
                return;
            }


            if (openN < n){
                // stack.push("(")
                backtrack(openN + 1, closedN, stack + "(")
                // stack.pop();
            }

            if (closedN < openN){
                // stack.push(")")
                backtrack(openN, closedN + 1, stack + ")")
                // stack.pop();
            }
        }

        backtrack(0,0, [])
        return res;
    }
}
