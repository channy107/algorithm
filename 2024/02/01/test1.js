function solution(s) {
    return s.split(' ')
            .map(word => 
                word.split('')
                    .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
                    .join(''))
                    .join(' ');
}
