function solution(cards1, cards2, goal) {
    let cardOneIndex = 0, cardTwoIndex = 0; 

    for (let word of goal) {
        if (cardOneIndex < cards1.length && cards1[cardOneIndex] === word) {
            cardOneIndex++; 
        } else if (cardTwoIndex < cards2.length && cards2[cardTwoIndex] === word) {
            cardTwoIndex++;
        } else {
            return "No";
        }
    }
    return "Yes";
}

// "Yes"
console.info(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]))
// "No"
console.info(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))