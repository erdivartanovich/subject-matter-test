let calculateRemainders = require('./index');



test('case 1', () => {
    let a1 = [1, 2, 3];
    let a2 = [25, 18, 72];
    expect(calculateRemainders(a1, a2)).toEqual([16, 0, 45]);
});



test('case 2', () => {
    let a1 = [1, 2, 3];
    let a2 = [25, 19, 72];
    expect(calculateRemainders(a1, a2)).toEqual([16, 1, 45]);
});

test('case 3', () => {
    let a1 = [10, 2, 3];
    let a2 = [25, 72, 16];
    expect(calculateRemainders(a1, a2)).toEqual([5, 68, 10]);
});


test('case 4', () => {
    let a1 = [10, 3, 5];
    let a2 = [4 ,21, 42];
    expect(calculateRemainders(a1, a2)).toEqual([4, 21, 42]);
});


test('case 5', () => {
    let a1 = [10, 10, 10];
    let a2 = [1 ,1, 1];
    expect(calculateRemainders(a1, a2)).toEqual([1, 1, 1]);
});

test('case 6', () => {
    let a1 = [0, 10, 10];
    let a2 = [2 ,1, 1];
    expect(calculateRemainders(a1, a2)).toEqual([2, 1, 1]);
});


test('case 7', () => {
    let a1 = [0, 0, 0];
    let a2 = [2 ,1, 1];
    expect(calculateRemainders(a1, a2)).toEqual([2, 1, 1]);
});


test('case 8', () => {
    let a1 = [1, 2, 3];
    let a2 = [0 ,0, 0];
    expect(calculateRemainders(a1, a2)).toEqual([0, 0, 0]);
});

test('case 9', () => {
    let a1 = [1, 2, 3];
    let a2 = [0 ,1, 0];
    expect(calculateRemainders(a1, a2)).toEqual([0, 1, 0]);
});


test('case 10', () => {
    let a1 = [1, 3, 2];
    let a2 = [25 ,18, 72];
    expect(calculateRemainders(a1, a2)).toEqual([19, 0, 60]);
});

test('case 11', () => {
    let a1 = [1, 6, 2];
    let a2 = [25, 72, 18];
    expect(calculateRemainders(a1, a2)).toEqual([16, 18, 0]);
});

test('case 11', () => {
    let a1 = [1, 6, 2];
    let a2 = [25, 72, 18, 12];
    expect(calculateRemainders(a1, a2)).toEqual([16, 18, 0, 12]);
});

test('case 12', () => {
    let a1 = [1, 6, 2, 4];
    let a2 = [25, 72, 18];
    expect(calculateRemainders(a1, a2)).toEqual([25, 72, 18]);
});


test('case 13', () => {
    let a1 = [];
    let a2 = [];
    expect(calculateRemainders(a1, a2)).toEqual([]);
});

test('case 14', () => {
    let a1 = [1];
    let a2 = [];
    expect(calculateRemainders(a1, a2)).toEqual([]);
});


test('case 15', () => {
    let a1 = [];
    let a2 = [1];
    expect(calculateRemainders(a1, a2)).toEqual([1]);
});


test('case 16', () => {
    let a1 = [1];
    let a2 = [-1];
    expect(calculateRemainders(a1, a2)).toEqual([-1]);
});

test('case 16', () => {
    let a1 = [1, 1];
    let a2 = [10, 10];
    expect(calculateRemainders(a1, a2)).toEqual([0, 0]);
});

test('case 16', () => {
    let a1 = [1, 5];
    let a2 = [10, 10];
    expect(calculateRemainders(a1, a2)).toEqual([8, 0]);
});

test('case 17', () => {
    let a1 = [5, 5];
    let a2 = [10, 10];
    expect(calculateRemainders(a1, a2)).toEqual([0, 0]);
});

test('case 17', () => {
    let a1 = [5, 0];
    let a2 = [0, 10];
    expect(calculateRemainders(a1, a2)).toEqual([0, 10]);
});

test('case 17', () => {
    let a1 = [5, 1];
    let a2 = [10, 10];
    expect(calculateRemainders(a1, a2)).toEqual([0, 8]);
});

test('case 18', () => {
    let a1 = [5, 1];
    let a2 = [10, -1];
    expect(calculateRemainders(a1, a2)).toEqual([10, -1]);
});


