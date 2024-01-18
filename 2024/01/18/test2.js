function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

// return "leo"
console.log(solution(["leo", "kiki", "eden"], 	["eden", "kiki"]))
// return "vinko"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))
// return "mislav"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))