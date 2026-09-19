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

var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    let nearX = Math.max(x1, Math.min(xCenter, x2));
    let nearY = Math.max(y1, Math.min(yCenter, y2));

    let diffX = xCenter - nearX;
    let diffY = yCenter - nearY;

    return diffX * diffX + diffY * diffY <= radius * radius;
};