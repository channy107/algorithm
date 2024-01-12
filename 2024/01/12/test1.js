function solution(survey, choices) {
    const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    for (let i = 0; i < survey.length; i++) {
        const [disagreeType, agreeType] = survey[i].split('');
        const choice = choices[i];
        const score = choice > 4 ? choice - 4 : choice < 4 ? 4 - choice : 0;

        if (choice > 4) {
            scores[agreeType] += score;
        } else if (choice < 4) {
            scores[disagreeType] += score;
        }
    }

    let answer = '';
    answer += scores['R'] >= scores['T'] ? 'R' : 'T';
    answer += scores['C'] >= scores['F'] ? 'C' : 'F';
    answer += scores['J'] >= scores['M'] ? 'J' : 'M';
    answer += scores['A'] >= scores['N'] ? 'A' : 'N';

    return answer;
}

// return "TCMA"
console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
// return "RCJA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));