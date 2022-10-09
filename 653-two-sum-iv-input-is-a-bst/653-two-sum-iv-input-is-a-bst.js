var findTarget = function(root, k) {
    if(root===null) return false;
    let stck = [root]; 
    let complement = {} 
    while(stck.length > 0){
        let cursor = stck.pop();
        if(complement[k - cursor.val]!==undefined) return true; 
        complement[cursor.val] = true; 
        if(cursor.right!==null){
            stck.push(cursor.right);
        }
        if(cursor.left!==null){
            stck.push(cursor.left);
        }
    }
    return false;
};