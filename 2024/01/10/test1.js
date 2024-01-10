function solution(babbling) {
    const pattern = /(aya|ye|woo|ma)/;
    let answer = 0;

    babbling.forEach(word => {
        let isValid = true;
        let previousSound = "";
        let match = null;

        while (isValid && (match = pattern.exec(word))) {
            const currentSound = match[0];
            if (currentSound === previousSound || word !== currentSound + word.substring(currentSound.length)) {
                isValid = false;
                break;
            }
            previousSound = currentSound;
            word = word.substring(currentSound.length);
        }

        if (isValid && word === "") {
            answer++;
        }
    });

    return answer;
}

// 1
console.info(solution(["aya", "yee", "u", "maa"]))
// 2
console.info(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))