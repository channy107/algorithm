function solution(dartResult) {
    let scores = []; 
    let numberBuffer = ''; 

    for (let i = 0; i < dartResult.length; i++) {
        let char = dartResult[i];

        if (!isNaN(char)) {
            numberBuffer += char;
        } else {
            if (numberBuffer.length > 0) {
                scores.push(parseInt(numberBuffer)); 
                numberBuffer = ''; 
            }

            let len = scores.length;
            switch (char) {
                case 'S':
                    break; 
                case 'D':
                    scores[len - 1] **= 2; 
                    break;
                case 'T':
                    scores[len - 1] **= 3; 
                    break;
                case '*':
                    scores[len - 1] *= 2;
                    if (len > 1) scores[len - 2] *= 2; 
                    break;
                case '#':
                    scores[len - 1] *= -1; 
                    break;
            }
        }
    }

    return scores.reduce((acc, score) => acc + score, 0); 
}

// return 37
console.log(solution('1S2D*3T'));
// return 9
console.log(solution('1D2S#10S'));
// return 3
console.log(solution('1D2S0T'));
// return 23
console.log(solution('1S*2T*3S'));
// return 5
console.log(solution('1D#2S*3S'));
// return -4
console.log(solution('1T2D3D#'));
// return 59
console.log(solution('1D2S3T*'));