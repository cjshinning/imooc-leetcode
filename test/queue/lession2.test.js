import leastInterval from '../../code/queue/lession2';

test('leastInterval', () => {
    expect(leastInterval(["A","A","A","B","B","B"], 2)).toBe(8);
    expect(leastInterval(["A","A","A","A","B","B","B","C","c"], 1)).toBe(9);
})