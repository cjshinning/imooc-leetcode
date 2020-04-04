export default (arr) => {
    // 获取n的维度
    let vector = arr.length;
    // 垂直翻转
    for(let i=0,len=vector/2;i<len;i++){
        for(let j=0,tmp;j<vector;j++){
            tmp = arr[i][j];
            arr[i][j] = arr[vector-i-1][j];
            arr[vector-i-1][j] = tmp;
        }
    }
    // 对角线翻转
    for(let i=0;i<vector;i++){
        for(let j=0,tmp;j<i;j++){
            tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
        }
    }
    return arr;
}