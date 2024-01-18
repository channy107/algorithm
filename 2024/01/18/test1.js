function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    const score = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === patterns[0][i % patterns[0].length]) score[0]++;
        if (answers[i] === patterns[1][i % patterns[1].length]) score[1]++;
        if (answers[i] === patterns[2][i % patterns[2].length]) score[2]++;
    }

    const maxScore = Math.max(...score);
    const answer = [];

    for (let i = 0; i < score.length; i++) {
        if (score[i] === maxScore) {
            answer.push(i + 1);
        }
    }

    return answer;
}

// return [1]
console.log(solution([1,2,3,4,5]))
// return [1,2,3]
console.log(solution([1,3,2,4,2]))