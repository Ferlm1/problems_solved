const getIndexAddUptoTarget = require('./problem2');

test('Indexes which corresponding values add up to target', () => {
    const nums = [1,5,5,3,2,2,1];
    const target = 2;
    expect(getIndexAddUptoTarget(nums, target)).toStrictEqual([ 6, 0 ]);
});

test('Indexes which corresponding values add up to target', () => {
    const nums = [2,7,11,15];
    const target = 9;
    expect(getIndexAddUptoTarget(nums, target)).toStrictEqual([1,0]);
});

test('Indexes which corresponding values add up to target', () => {
    const nums = [3,2,4];
    const target = 6;
    expect(getIndexAddUptoTarget(nums, target)).toStrictEqual([2,1]);
});

test('Indexes which corresponding values add up to target', () => {
    const nums = [3,3];
    const target = 6;
    expect(getIndexAddUptoTarget(nums, target)).toStrictEqual([1,0]);
});

test('None numbs added up to target', () => {
    const nums = [3,2];
    const target = 6;
    expect(getIndexAddUptoTarget(nums, target)).toStrictEqual('Nothing left to sum');
});