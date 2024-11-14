function groupBy(objList, property){
    let ans = {}
    for(let i = 0; i < objList.length; i++){
        let cur_obj = objList[i]
        if(property in cur_obj){
            let property_value = cur_obj[property]
            if(property_value in ans){
                ans[property_value].push(cur_obj)
            } else{
                ans[property_value] = [cur_obj]
            }
        }
    }
    return ans
}


const users = [
    { name: 'Alice', group: 'admin' },
    { name: 'Bob', group: 'user' },
    { name: 'Charlie', group: 'admin' },
];

console.log(groupBy(users, "group"))