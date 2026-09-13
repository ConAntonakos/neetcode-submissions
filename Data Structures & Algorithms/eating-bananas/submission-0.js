class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // ith piles in h hours
        // h = x // i
        // Math.ceil(x / k) <= h
        piles = piles.sort((a,b) => a - b);
        let l = 1, r = Math.max(...piles);
        let res = r;
        while(l <= r){
            let k = Math.floor((l+r)/2)
            console.log("loop",l,r,k)

            let totalTime = 0;
            for(let pile of piles){
                totalTime += Math.ceil(pile/k)
            }

            if(totalTime <= h){
                res = k
                r = k - 1;
            } else {
                l = k + 1
            }
        }
        return res;
    }
}
