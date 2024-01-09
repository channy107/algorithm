function solution(ingredient) {
    let count = 0;
    let stack = [];

    for (let ing of ingredient) {
        stack.push(ing);
        if (
            stack[stack.length-1] === 1 &&
            stack[stack.length-2] === 3 &&
            stack[stack.length-3] === 2 &&
            stack[stack.length-4] === 1
        ) {
            count++;
            stack.splice(-4, 4);
        }
    }

    return count;
}

// return 2
console.info(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
// return  0
console.info(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))