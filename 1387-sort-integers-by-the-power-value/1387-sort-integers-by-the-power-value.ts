function getKth(lo: number, hi: number, k: number): number {
 let map = {}
    const helper = (n) => {
        if(n == 1) {
            return 0
        }
        if(map.hasOwnProperty(n)) {
            return map[n]
        }
        let t = 0
        if(n%2 == 0) t = helper(n/2)
        if(n%2 !== 0) t = helper(3*n + 1)
        map[n] = 1+t
        return t+1
    }
    let powerValues = []
    for(let i = lo; i <= hi; i++) {
        powerValues.push([i,helper(i)])
    }
    powerValues.sort((a,b) => {
        return a[1]-b[1] || a[0]-b[0]
    })
    return powerValues[k-1][0]
};