export default (arr) => {
    // 用数组来实现堆栈结构，pop，push
    let result = [];
    // 表示上一轮的数据
    let prev1;
    // 表示上上轮的数据
    let prev2;
    // 对数组进行遍历，处理得分
    arr.forEach(item => {
        switch(item){
            case 'C':
                if(result.length){
                    result.pop();
                }
                break;
            case 'D':
                prev1 = result.pop();
                result.push(prev1, prev1*2);
                break;
            case '+':
                prev1 = result.pop();
                prev2 = result.pop();
                result.push(prev2, prev1, prev1+prev2);
                break;
            default:
                result.push(item*1);
        }
    })
    return result.reduce((total, num) => {return total + num});
}