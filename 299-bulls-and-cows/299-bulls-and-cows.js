/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
    let cows = 0;
    let bulls = 0;
    const occurrences = Array(10).fill(0);

    for (let i = 0; i < secret.length; i++) {
        const guessNumber = parseInt(guess[i]);
        const secretNumber = parseInt(secret[i]);
        
        if (secretNumber === guessNumber) {
            bulls++;
            continue
        }

        if(occurrences[secretNumber] < 0) {
            cows++;
        }
        
        if(occurrences[guessNumber] > 0) {
            cows++;
        }
        
        occurrences[secretNumber]++;
        occurrences[guessNumber]--;
    }
  
    return `${bulls}A${cows}B`;
}