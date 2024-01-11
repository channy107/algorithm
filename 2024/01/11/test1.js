function solution(number) {
    let answer = 0;
    const n = number.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

// return 2
console.info(solution([-2, 3, 0, 2, -5]))
// return 5
console.info(solution([-3, -2, -1, 0, 1, 2, 3]))
// return 0
console.info(solution([-1, 1, -1, 1]))