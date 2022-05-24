function arrayRankTransform(arr: number[]): number[] {
 let keys = 0;

    const ranks = [...arr].sort((a, b) => a - b).reduce((res, x) => {
        if (!res[x]) {
            res[x] = 1 + keys++;
        }
        
        return res;
    }, {});
    
    return arr.map(x => ranks[x]);
};