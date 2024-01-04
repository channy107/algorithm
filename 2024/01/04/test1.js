function solution(t, p) {
    let answer = 0;

    for (let i = 0; i <= t.length - p.length; i++) {
        let substring = t.substring(i, i + p.length);
        let substringValue = parseInt(substring);

        if (substringValue <= parseInt(p)) {
            answer += 1;
        }
    }
    
    return answer;
}

// 2
console.log(solution("3141592", "271"));
// 8
console.log(solution("500220839878", "7"));
// 3 
console.log(solution("10203", "15"));