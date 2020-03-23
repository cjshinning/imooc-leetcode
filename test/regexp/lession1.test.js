import subLoopStr from '../../code/regexp/lession1';

test('subLoopStr', () => {
    expect(subLoopStr('abab')).toBe(true);
})
test('subLoopStr', () => {
    expect(subLoopStr('abababc')).toBe(false);
})