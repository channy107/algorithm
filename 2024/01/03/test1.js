function shiftChar(c, skip, index) {
    if (skip.includes(c)) return c;

    let pos = c.charCodeAt(0) - 'a'.charCodeAt(0);

    for (let i = 0; i < index; ) {
        pos = (pos + 1) % 26;
        
        if (!skip.includes(String.fromCharCode(pos + 'a'.charCodeAt(0)))) i++;
    }

    return String.fromCharCode(pos + 'a'.charCodeAt(0));
}

function solution(s, skip, index) {
    return s.split('').map((c) => shiftChar(c, skip, index)).join('');
}

// "happy"
console.info(solution("aukks", "wbqd", 5))