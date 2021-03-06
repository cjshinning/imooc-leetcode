// export default (arr) => {
//     if(arr.length < 2){
//         return 0;
//     }
//     // 排序
//     arr.sort();
//     let max = 0;
//     for(let i=0,tmp;i<arr.length-1;i++){
//         tmp = arr[i+1] - arr[i];
//         if(tmp > max){
//             max = tmp;
//         }
//     }
//     return max;
// }

// 冒泡排序
export default (arr) => {
    if(arr.length < 2) {
        return 0;
    }
    // 排序
    let len = arr.length-1;
    let max = 0;
    let space;
    for(let i=len;i>0;i--){
        for(let j=0,tmp;j<i;j++){
            tmp = arr[j];
            if(tmp > arr[j+1]){
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
        if(i<len){
            space = arr[i+1] - arr[i]
            if(space > max){
                max = space;
            }
        }
    }
    return Math.max(max, arr[1]-arr[0]);
}