function solution(k, score) {
    let hallOfFame = [];
    let lowestScores = [];

    for (let i = 0; i < k && i < score.length; i++) {
        hallOfFame.push(score[i]);
        lowestScores.push(Math.min(...hallOfFame));
    }

    for (let i = k; i < score.length; i++) {
        hallOfFame.push(score[i]);
        hallOfFame.sort((a, b) => b - a);
        hallOfFame = hallOfFame.slice(0, k);
        lowestScores.push(hallOfFame[k - 1]);
    }

    return lowestScores;
}
// [10, 10, 10, 20, 20, 100, 100]
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); 
// [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); 
