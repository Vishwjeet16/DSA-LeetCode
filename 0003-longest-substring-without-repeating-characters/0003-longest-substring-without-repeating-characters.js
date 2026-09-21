/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let charSet = new Set();
        for (let j = i; j < n; j++) {
            if (charSet.has(s[j])) {
                break;
            } else {
                charSet.add(s[j]);
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
};