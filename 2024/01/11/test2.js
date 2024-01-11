function solution(X, Y) {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);

    for (let x of X) {
        countX[parseInt(x)]++;
    }
    for (let y of Y) {
        countY[parseInt(y)]++;
    }

    let answer = '';
    for (let i = 9; i >= 0; i--) {
        const common = Math.min(countX[i], countY[i]);
        answer += i.toString().repeat(common);
    }

    if (!answer) {
        return "-1";  
    }
    if (answer[0] === '0') {
        return "0"; 
    }
    return answer;
}

// return "-1"
console.info(solution("100", "2345"))
// return "0"
console.info(solution("100", "203045"))
// return "10"
console.info(solution("100", "123450"))
// return "321"
console.info(solution("12321", "42531"))
// return "552"
console.info(solution("5525", "1255"))