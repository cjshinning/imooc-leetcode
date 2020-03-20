export default (str) => {
    // 建立数据结构，堆栈，保存数据
    let r = [];
    // 给定任意一个子输入都返回第一个符合条件的字串
    let match = (str) => {
        let j = str.match(/^(0+|1+)/)[0];
        let o = (j[0] ^ 1).toString().repeat(j.length);
        let reg = new RegExp(`^(${j}${o})`);
        if(reg.test(str)){
            if(reg.test(str)){
                return RegExp.$1;
            }else{
                return '';
            }
        }
    }

    // 通过for循环控制程序允许的流程
    for(let i = 0, len = str.length - 1; i < len; i++){
        let sub = match(str.slice(i))
        if(sub) {
            r.push(sub);
        }
    }
    return r;
}