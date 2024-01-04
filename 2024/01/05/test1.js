function solution(s) {
    let answer = 0;
    
    while (s.length > 0) {
        let x = s.charAt(0);
        let countX = 0;
        let countNotX = 0;
        let index = 0;

        for (index = 0; index < s.length; index++) {
            if (s.charAt(index) === x) {
                countX++;
            } else {
                countNotX++;
            }

            if (countX === countNotX) {
                break;
            }
        }

        answer++;
        s = s.substring(index + 1);
    }

    return answer;
}

// 3
console.log(solution("banana"));
// 6
console.log(solution("abracadabra")); 
// 3
console.log(solution("aaabbaccccabba")); 