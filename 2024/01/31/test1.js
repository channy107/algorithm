function solution(bandage, health, attacks) {
    let [t, x, y] = bandage;
    let currentHealth = health;
    let continuousSuccess = 0;
    let attackIndex = 0;

    for (let time = 0; ; time++) {
        if (attackIndex < attacks.length && time === attacks[attackIndex][0]) {
            currentHealth -= attacks[attackIndex][1];
            attackIndex++;
            continuousSuccess = 0;
            if (currentHealth <= 0) return -1;
        } else {
            if (currentHealth < health) {
                currentHealth = Math.min(health, currentHealth + x);
                continuousSuccess++;
            }

            if (continuousSuccess >= t) {
                currentHealth = Math.min(health, currentHealth + y);
                continuousSuccess = 0; 
            }
        }

        if (attackIndex >= attacks.length && continuousSuccess === 0) {
            break;
        }
    }

    return currentHealth;
}
