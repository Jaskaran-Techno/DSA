/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    let [a, b] = equation.split("=");
    let a1 = a.match(/[+-]*\d*x/ig) || [];
    let b2 = b.match(/[+-]*\d*x/ig) || [];
    let leftX = a1.reduce((res, item) => {
        item = item.replace(/x/ig, '');
        if (item === '+' || item === '-' || !item) {
            item = item + '1'
        }
        return res + parseInt(item)
    }, 0);

    let leftY = b2.reduce((res, item) => {
        item = item.replace(/x/ig, '');
        if (item === '+' || item === '-' || !item) {
            item = item + '1'
        }
        return res + parseInt(item)
    }, 0);

    let numX = a.replace(/[+-]*\d*x/ig, '') ? eval(a.replace(/[+-]*\d*x/ig, '')) : 0;
    let numY = b.replace(/[+-]*\d*x/ig, '') ? eval(b.replace(/[+-]*\d*x/ig, '')) : 0;
    
    let x = leftX - leftY;
    let y = numY - numX;
    if (y === 0 && x === 0) {
        return "Infinite solutions"
    }

    if (x === 0) {
        return "No solution"
    }

    return `x=${y/x}`
};