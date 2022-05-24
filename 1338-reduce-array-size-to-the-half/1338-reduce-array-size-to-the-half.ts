function minSetSize(arr: number[]): number {
let n = arr.length;
    let occurances = new Array(n+1).fill(0);
    let map = {};
    arr.forEach(n => {
        if(!map.hasOwnProperty(n)) map[n] = 0;
        map[n]++;
    })
    for(let k in map) {
        occurances[map[k]]++;
    }
    let removed = 0;
    let set = 0;
    let j = n;
    while(removed < n/2) {
        if(occurances[j] > 0) {
            removed += j;
            set++;
            occurances[j]--;
        } else {
            j--;
        }
    }
    return set;
};