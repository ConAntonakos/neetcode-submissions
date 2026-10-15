class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        for(var i = 0; i < haystack.length; i++){
            let j = 0;
            while(j < needle.length){
                if(needle[j] !== haystack[i+j]){
                    break;
                }
                j++;
            }
            // console.log(i, j)
            if (j === needle.length){
                return i;
            }
        }
        return -1;
    }
}
