function solution(new_id) {
    let answer = new_id.toLowerCase();
    
    answer = answer.replace(/[^\w.-]/g, '');

    answer = answer.replace(/\.{2,}/g, '.');
    
    answer = answer.replace(/^\.|\.$/g, '');
    
    if (answer.length === 0) {
        answer = 'a';
    }
    
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.$/, '');
    }
    
    while (answer.length <= 2) {
        answer += answer.charAt(answer.length - 1);
    }
    
    return answer;
}

// return "bat.y.abcdefghi"
console.info(solution("...!@BaT#*..y.abcdefghijklm"))
// return "z--"
console.info(solution("z-+.^."))
// return 	"aaa"
console.info(solution("=.="))
// return "123_.def"
console.info(solution("123_.def"))
// return "abcdefghijklmn"
console.info(solution("abcdefghijklmn.p"))