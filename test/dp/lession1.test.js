import dp from '../../code/dp/lession1';

test('dp', ()=>{
    let arr = [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ];
    expect(dp(arr, 3, 3)).toBe(2);
})