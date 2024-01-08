function solution(k, m, score) {
    score.sort((a, b) => b - a);

    let answer = 0;

    for (let i = 0; i < score.length; i += m) {
        if (i + m > score.length) break;

        let minScore = score[i + m - 1];

        answer += minScore * m;
    }
    return answer;
}

// return 8
console.info(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]))
// return  33
console.info(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))