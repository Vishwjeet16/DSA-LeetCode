/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let rev = 0;

    const MAX = 2147483647;
    const MIN = -2147483648;

    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        // Positive overflow
        if (
            rev > Math.trunc(MAX / 10) ||
            (rev === Math.trunc(MAX / 10) && digit > 7)
        ) return 0;

        // Negative overflow
        if (
            rev < Math.trunc(MIN / 10) ||
            (rev === Math.trunc(MIN / 10) && digit < -8)
        ) return 0;

        rev = rev * 10 + digit;
    }

    return rev;

};