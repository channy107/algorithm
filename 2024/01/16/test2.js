function solution(numbers, hand) {
    let answer = '';
    const position = {1: [0, 0], 2: [0, 1], 3: [0, 2], 
                      4: [1, 0], 5: [1, 1], 6: [1, 2], 
                      7: [2, 0], 8: [2, 1], 9: [2, 2], 
                      '*': [3, 0], 0: [3, 1], '#': [3, 2]};
    let left = position['*'];
    let right = position['#'];

    numbers.forEach(num => {
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            left = position[num];
        } else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            right = position[num];
        } else {
            const distanceLeft = Math.abs(left[0] - position[num][0]) + Math.abs(left[1] - position[num][1]);
            const distanceRight = Math.abs(right[0] - position[num][0]) + Math.abs(right[1] - position[num][1]);
            
            if (distanceLeft < distanceRight || (distanceLeft === distanceRight && hand === 'left')) {
                answer += 'L';
                left = position[num];
            } else {
                answer += 'R';
                right = position[num];
            }
        }
    });

    return answer;
}

// return "LRLLLRLLRRL"
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
// return "LRLLRRLLLRR"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"))
// return "LLRLLRLLRL"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"))