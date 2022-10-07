var MyCalendarThree = function() {
    this.start = [];
    this.end = [];
};

MyCalendarThree.prototype.book = function(start, end) {
    this.start.push(start);
    sort(this.start);
    this.end.push(end);
    sort(this.end);
    
    let result = 0;
    let count = 0;
    let startIx = 0;
    let endIx = 0;
    
    while(endIx < this.end.length){
        if(this.start[startIx] < this.end[endIx]){
            count++;
            startIx++;
        }else{
            count--;
            endIx++;
        }
        result = Math.max(result, count);
    }
    return result;
    
};

function sort(arr){
    for(let i = arr.length - 1; i > 0; i--){
        if(arr[i] < arr[i-1]){
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }
}