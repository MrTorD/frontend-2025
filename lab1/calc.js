"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    console.log(`Result is: ${calc(input)}`);
    rl.close();
});
function calc(expression) {
    if (expression)
        expression = expression.split('').reverse().join('');
    let stack = [];
    let ch;
    while (expression) {
        ch = expression[0];
        expression = expression.slice(1);
        let isSuccessed = true;
        (ch && !Number.isNaN(+ch)) ? stack.push(+ch) : isSuccessed = handleChar(ch, stack);
        if (!isSuccessed)
            return 'Wrong expression';
    }
    let result = stack.pop();
    if (result && stack.length == 0) {
        return result;
    }
    else {
        return 'Wrong expression';
    }
}
function handleChar(ch, stack) {
    if (!ch)
        return false;
    let a;
    let b;
    if (stack.length >= 2) {
        a = stack.pop();
        b = stack.pop();
    }
    else {
        return false;
    }
    switch (ch) {
        case '+':
            stack.push(a + b);
            break;
        case '-':
            stack.push(a - b);
            break;
        case '*':
            stack.push(a * b);
            break;
        case '/':
            stack.push(a / b);
            break;
        default:
            if (a)
                stack.push(a);
            if (b)
                stack.push(b);
            break;
    }
    return true;
}
//# sourceMappingURL=calc.js.map