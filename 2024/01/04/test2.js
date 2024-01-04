function solution(s) {
    let answer = [];
    let lastSeen = {}; 

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (lastSeen.hasOwnProperty(char)) {
            let distance = i - lastSeen[char];
            answer.push(distance);
        } else {
            answer.push(-1);
        }
        lastSeen[char] = i;
    }

    return answer;
}

// [-1, -1, -1, 2, 2, 2]
console.log(solution("banana"));
// [-1, -1, 1, -1, -1, -1]
console.log(solution("foobar"));