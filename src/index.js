module.exports = function reverse (n) {
    const numToStr = n.toString().split('').reverse().join('');
    return Number.parseInt(numToStr, 10);
}
