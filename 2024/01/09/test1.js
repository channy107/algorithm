function addMiddleString(original, addString) {
    const midIndex = Math.floor(original.length / 2)
    return original.slice(0, midIndex) + addString + original.slice(midIndex)
}

function solution(food) {
    let answer = '';
    
    for (let i = 1; i < food.length; i++) {
        const addString = food[i] % 2 === 0 ? String(i).repeat(food[i]) : String(i).repeat(food[i]-1);

        answer = addMiddleString(answer, addString)
    }

    const result = addMiddleString(answer, '0');
    return result;
}

// "1223330333221"
console.info(solution([1, 3, 4, 6]))
// "111303111"
console.info(solution([1, 7, 1, 2]))