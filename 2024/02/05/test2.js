function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [];
    let visited = [...Array(rows)].map(() => Array(cols).fill(false));

    let startX, startY, goalX, goalY;
    board.forEach((row, i) => {
        row.split('').forEach((cell, j) => {
            if (cell === 'R') {
                startX = i;
                startY = j;
            } else if (cell === 'G') {
                goalX = i;
                goalY = j;
            }
        });
    });

    queue.push([startX, startY, 0]); 
    visited[startX][startY] = true;

    while (queue.length > 0) {
        let [x, y, count] = queue.shift();
        
        if (x === goalX && y === goalY) return count; 
        
        directions.forEach(([dx, dy]) => {
            let nx = x, ny = y;
            while (true) {
                nx += dx;
                ny += dy;
                if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || board[nx][ny] === 'D') {
                    nx -= dx;
                    ny -= dy;
                    break;
                }
            }
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        });
    }

    return -1;
}
