function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let matchCount = 0;
    let zeroCount = lottos.filter(num => num === 0).length;

    lottos.forEach(lotto => {
        if (win_nums.includes(lotto)) {
            matchCount++;
        }
    });

    let maxRank = rank[matchCount + zeroCount];
    let minRank = rank[matchCount];

    return [maxRank, minRank];
}

// return [3, 5]
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
// return [1, 6]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
// return [1, 1]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
