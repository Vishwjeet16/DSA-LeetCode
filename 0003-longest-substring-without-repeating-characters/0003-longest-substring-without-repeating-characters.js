/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let longest = 0
    const uniqueElements = new Set();
    for (let i=0; i<s.length; i++){
        const char = s[i];
        while (uniqueElements.has(char)){
            uniqueElements.delete(s[left]);
            left++;
        }
            uniqueElements.add(char)
            longest = Math.max(longest, i+1-left)

    }
    return longest;
};