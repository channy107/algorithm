function solution(a, b, n) {
    let totalColas = 0;

    while (n >= a) {
        let newColas = Math.floor(n / a) * b; 
        totalColas += newColas; 
        n = n - (Math.floor(n / a) * a) + newColas; 
    }

    return totalColas;
}

// return 19
console.info(solution(2,1,20))
// return  9
console.info(solution(3,1,20))