console.log("Expected: 102, recieved: ", calc("+ 5000 40000"));
console.log("Expected: 53, recieved:", calc("+ 5 (* 6 8)"));
console.log("Expected: 2, recieved: ",calc("/ 12 + 3 (- 9 6)"));
console.log("Expected: 4928, recieved:", calc("* (+ 425 23) - (14 * / 2 4 6)"));
console.log("Expected: undefined, recieved:", calc("+ 5 5 5"));
console.log("Expected: undefined, recieved:", calc("2 / 4"));
console.log("Expected: undefined, recieved:", calc("/ 10 * 5 + 4"));

function readNum(str: string) : number | undefined {
    let arr: number[] = [];
    let ch: string | undefined;

    for (let i = 0; i < str.length; i++) {
        ch = str[i];
        if (!Number.isNaN(parseInt(ch!))) {
            arr.push(+ch!);
            continue;
        }
        break;
    }
    if (arr.length == 0) return undefined;

    let num: number = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        num = num * 10 + arr[i]!;
    }

    return num;
}

function calc(expression: string | undefined) : number | undefined {
    if (expression) expression = expression.split('').reverse().join('');
    let stack:number[] = [];
    let ch: string | undefined;
    let num: number | undefined;

    while (expression) {
        num = readNum(expression);
        if (!Number.isNaN(num) && num !== undefined) {
            expression = expression.slice(num.toString().length) 
        } else {
            ch = expression[0]!;
            expression = expression.slice(1);
        }

        if (num) stack.push(num);
        if (ch!) handleChar(ch, stack);
    }

    let result: number | undefined = stack.pop();
    return (result && stack.length == 0) ? result : undefined;
}

function handleChar(ch: string | undefined, stack: number[]) : boolean {
    if (!ch) return false;

    let a: number | undefined;
    let b: number | undefined;

    switch (ch) {
        case '+': 
            a = stack.pop();
            b = stack.pop();
            stack.push(a! + b!);
            break;
        case '-':
            a = stack.pop();
            b = stack.pop();
            stack.push(a! - b!);
            break;
        case '*':
            a = stack.pop();
            b = stack.pop();
            stack.push(a! * b!);
            break;
        case '/':
            a = stack.pop();
            b = stack.pop();
            stack.push(a! / b!);
            break;
        default:
            break;
    }
    return true;
}
