/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(A, k) {
    const res = new Float64Array(k);
    let freq = new Int32Array(k);

    for (let n of A) {
        n %= k;
        const cur = new Int32Array(k);
        
        cur[n] = 1;
        for (let i = 0; i < k; i++) 
            cur[(i * n) % k] += freq[i];        

        freq = cur;
        for (let i = 0; i < k; i++) 
            res[i] += freq[i];        
    }

    return res;
};