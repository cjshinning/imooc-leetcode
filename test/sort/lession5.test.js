import sort from '../../code/sort/lession5';

test('input:1', ()=>{
    expect(sort([1,2,0])).toEqual([0,1,2]);
})