function solution(numbers) {
    const answer = [];
    const set = new Set();

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            set.add(numbers[i] + numbers[j]);
        }
    }

    answer.push(...Array.from(set).sort((a, b) => a - b));
    return answer;
}