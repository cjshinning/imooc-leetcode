import Heap from '../../code/heap/lession1';

// test('Heap:1', ()=>{
//     let heap = new Heap([1,10,9,5,3,11]);
//     expect(heap.sort()).toEqual([1,3,5,9,10,11]);
// })

test('Heap:2', ()=>{
    let heap = new Heap('chcaa');
    expect(heap.toString()).toMatch(/ccaah|aacch/);
})