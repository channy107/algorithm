function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));

    let answer = n - realLost.length;

    realLost.forEach((lostStudent) => {
        const giveIndex = realReserve.findIndex(reserveStudent =>
            reserveStudent === lostStudent - 1 || reserveStudent === lostStudent + 1
        );
        if (giveIndex !== -1) {
            answer++;
            realReserve.splice(giveIndex, 1);
        }
    });

    return answer;
}

// return 5
console.log(solution(5, [4, 2], [3, 5]));