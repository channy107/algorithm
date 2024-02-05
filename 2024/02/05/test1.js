function solution(sequence, k) {
    let answer = [];
    let sum = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    
    while (end < sequence.length) {
        sum += sequence[end];
        
        while (sum >= k) {
            if (sum === k && (end - start) < minLength) {
                minLength = end - start;
                answer = [start, end]; 
            }
            sum -= sequence[start]; 
            start++;
        }
        
        end++; 
    }

    return answer;
}