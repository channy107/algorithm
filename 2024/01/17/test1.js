function solution(board, moves) {
    let stack = [];
    let answer = 0;

    moves.forEach(move => {
        for (let i = 0; i < board.length; i++) {
            const doll = board[i][move - 1];
            if (doll !== 0) {
                if (stack[stack.length - 1] === doll) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(doll);
                }
                board[i][move - 1] = 0;
                break;
            }
        }
    });

    return answer;
}

// return 4
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))