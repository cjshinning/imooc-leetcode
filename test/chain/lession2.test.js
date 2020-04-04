import isCircle, {NodeList} from '../../code/chain/lession2';

test('isCircle1', () => {
    let head = new NodeList([6,1,2,5,7,9]);
    head.next.next.next.next.next.next = head.next;
    expect(isCircle(head)).toBe(true);
})

test('isCircle2', () => {
    let head = new NodeList([6,1,2,5,7,9]);
    expect(isCircle(head)).toBe(false);
})