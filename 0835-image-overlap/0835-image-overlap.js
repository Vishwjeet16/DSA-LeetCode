/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    return useDuplicatedSpace(img1, img2);
};

const useDuplicatedSpace = function(img1, img2) {
    const n = img1.length;

    const m = 3 * n - 2;
    let backdrop = Array.from({ length: m }, () => new Array(m).fill(0));

    for (let i = n - 1; i <= 2 * n - 2; i++) {
        for (let j = n - 1; j <= 2 * n - 2; j++) {
            backdrop[i][j] = img2[i - n + 1][j - n + 1];
        }
    }

    let ans = 0;
    for (let i = 0; i <= m - n; i++) {
        for (let j = 0; j <= m - n; j++) {
            let count = 0;
            for (let u = i; u < i + n; u++) {
                for (let v = j; v < j + n; v++) {
                    if (img1[u - i][v - j] * backdrop[u][v] === 1) {
                        count++;
                    }
                }
            }
            ans = Math.max(ans, count);
        }
    }
    return ans;
};