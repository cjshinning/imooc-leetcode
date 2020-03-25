export default (arr) => {
    // 进行升序排序
    arr.sort((a,b) => a-b);
    // 声明一个空数组用来村粗奇偶排序后的数组
    let r = [];
    // 记录奇数、偶数位下标
    let odd = 1;
    let even = 0;
    arr.forEach(item => {
        if(item % 2 === 1){
            r[odd] = item;
            odd += 2;
        }else if(item % 2 === 0){
            r[even] = item;
            even += 2;
        }
    })
    return r;
}