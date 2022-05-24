function minimumAbsDifference(arr: number[]): number[][] {
let min = Number.MAX_VALUE;
    let result = [];
    arr = arr.sort((a,b) => a-b);
    for(let i = 1; i < arr.length;i++){
        let diff = arr[i] - arr[i-1];
        if(diff < min){
            min = diff;
            result = [[arr[i-1], arr[i]]];
        }else if(diff == min){
            result.push([arr[i-1], arr[i]])
        }
    }
    return result
};