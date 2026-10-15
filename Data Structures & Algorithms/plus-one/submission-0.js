class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        console.log(digits)
        let stringNum = digits.join('')
        let num = Number(stringNum)
        let newStringNum = (num+1).toString();
        let newDigits = []
        for(let c of newStringNum){
            newDigits.push(c)
        }
        return newDigits

        // console.log(stringNum, num, newStringNum)
    }
}
