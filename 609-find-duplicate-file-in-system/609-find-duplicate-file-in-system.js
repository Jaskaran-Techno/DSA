/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
     let map={},ans=[]
     for(path of paths){
        let [root,...files] = path.split(' ');
        for(file of files){
            let [fileName,content] = file.split('(');
            if(map[content]){
                map[content].push(`${root}/${fileName}`)
            }
            else{
                map[content] = [`${root}/${fileName}`]
            }
        }
    }
   
    for(entry in map){
        if(map[entry].length>1){
            ans.push(map[entry]);
        }
    }
    return ans
};