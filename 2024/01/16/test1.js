function solution(id_list, report, k) {
    let reports = {};
    id_list.forEach(id => reports[id] = new Set());

    let reportedCount = {};
    id_list.forEach(id => reportedCount[id] = 0);

    report.forEach(r => {
        let [reporter, reported] = r.split(' ');
        if (!reports[reporter].has(reported)) {
            reports[reporter].add(reported);
            reportedCount[reported]++;
        }
    });

    let bannedUsers = new Set();
    for (let id in reportedCount) {
        if (reportedCount[id] >= k) {
            bannedUsers.add(id);
        }
    }

    let answer = id_list.map(id => {
        return Array.from(reports[id]).filter(reported => bannedUsers.has(reported)).length;
    });

    return answer;
}

// return [2,1,1,0]
console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)); 
// return [0,0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); 