/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */

const {max , min} = Math;
const checkOverlap = (r, cx, cy, x1, y1, x2, y2) => {
    const x = max(x1, min(cx, x2)) - cx;
    const y = max(y1, min(cy, y2)) - cy;

    return x * x + y * y <= r * r;
};