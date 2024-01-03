function convertDate(dateStr) {
    const [year, month, day] = dateStr.split('.').map(Number);
    return { year, month, day };
}

function calculateExpiry(date, months) {
    let { year, month, day } = date;
    let expiryYear = year;
    let expiryMonth = month + months;
    while (expiryMonth > 12) {
        expiryYear++;
        expiryMonth -= 12;
    }
    return { year: expiryYear, month: expiryMonth, day };
}

function solution(today, terms, privacies) {
    const todayDate = convertDate(today);

    const termDict = {};
    terms.forEach(term => {
        const [termType, duration] = term.split(' ');
        termDict[termType] = Number(duration);
    });

    const answer = [];
    privacies.forEach((privacy, index) => {
        const [collectionDateStr, termType] = privacy.split(' ');
        const collectionDate = convertDate(collectionDateStr);
        const expiryDate = calculateExpiry(collectionDate, termDict[termType]);
        if (expiryDate.year < todayDate.year || 
            (expiryDate.year === todayDate.year && expiryDate.month < todayDate.month) ||
            (expiryDate.year === todayDate.year && expiryDate.month === todayDate.month && expiryDate.day <= todayDate.day)) {
            answer.push(index + 1);
        }
    });

    return answer;
}
// [1, 3]
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])); 
// [1, 4, 5]
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])); 
