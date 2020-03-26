import sort from '../../code/sort/lession4';

test('sort:input1', () => {
    expect(sort([1,2,0])).toBe(3);
})

test('sort:input2', () => {
    expect(sort([3,4,-1,1])).toBe(2);
})

test('sort:input3', () => {
    expect(sort([7,8,9,11,12])).toBe(1);
})

test('sort:input4', () => {
    expect(sort([1,2,3,4,5,6])).toBe(7);
})