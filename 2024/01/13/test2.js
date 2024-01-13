function solution(N, stages) {
    let failureRate = [];
    for (let stage = 1; stage <= N; stage++) {
        const totalPlayers = stages.filter(s => s >= stage).length;
        const failurePlayers = stages.filter(s => s === stage).length;
        
        failureRate.push({ stage, rate: totalPlayers === 0 ? 0 : failurePlayers / totalPlayers });
    }
    
    failureRate.sort((a, b) => b.rate - a.rate || a.stage - b.stage);
    
    return failureRate.map(obj => obj.stage);
}

// return [3,4,2,1,5]
console.info(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
// return [4,1,2,3]
console.info(solution(4, [4,4,4,4,4]))
