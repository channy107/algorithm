function solution(keymap, targets) {
    const charMap = new Map();
    
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            const currentChar = keymap[i][j]
            if (charMap.has(currentChar)) {
                const pressCount = charMap.get(currentChar) > j + 1 ? j + 1 : charMap.get(currentChar)
                charMap.set(currentChar, pressCount);
            } else {
                charMap.set(currentChar, j+1);
            }
            
        }
    }
    

    const result = [];

    for (const target of targets) {
        let totalPresses = 0;
        let isPossible = true;

        for (const char of target) {
            if (charMap.has(char)) {
                totalPresses += charMap.get(char);
            } else {
                isPossible = false;
                break;
            }
        }

        result.push(isPossible ? totalPresses : -1);
    }

    return result;
}

// [9, 4]
console.info(solution(["ABACD", "BCEFD"], ["ABCD","AABB"]))
// [-1]
console.info(solution(["AA"], ["B"]))
// [4, 6]]
console.info(solution(["AGZ", "BSSS"], ["ASA","BGZ"]))