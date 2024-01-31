function solution(nums) {
    const maxSelect = nums.length / 2;
    const uniquePokemons = new Set(nums);
    const uniqueCount = uniquePokemons.size;

    return Math.min(uniqueCount, maxSelect);
}