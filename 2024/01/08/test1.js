function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let divisors = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                divisors++;
                if (j !== i / j) {
                    divisors++;
                }
            }
        }
        if (divisors > limit) {
            answer += power;
        } else {
            answer += divisors;
        }
    }

    return answer;
}

// 10
console.info(solution(5, 3, 2))
// 21
console.info(solution(10, 3, 2))