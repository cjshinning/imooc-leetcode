import sort from '../../code/sort/lession3';

test('sort:input1', () => {
    expect(sort([3,6,9,1])).toBe(3);
})

test('sort:input2', () => {
    expect(sort([10])).toBe(0);
})

test('sort:input3', () => {
    expect(sort([1,16,19,13])).toBe(12);
})