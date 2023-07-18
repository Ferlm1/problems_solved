const getNumsInRangeDoNotIncluded = require('./problem1');

test('Nums in the range [1, inputList length] who were not added in list', 
  () => {
    const inputList = [4,3,2,7,8,2,3,1];
    const expectedResult = [ 5, 6 ];
    expect(getNumsInRangeDoNotIncluded(inputList)).toStrictEqual(expectedResult);
});

test('Nums in the range [1, NUMS length] who does not appear in the list NUMS',
  () => {
    const inputList = [1,1];
    const expectedResult = [2];
    expect(getNumsInRangeDoNotIncluded(inputList)).toStrictEqual(expectedResult);
});

test('Nums in the range [1, NUMS length] who does not appear in the list NUMS',
  () => {
    const inputList = [1,1,1,1,1,1,1,1,1,1];
    const expectedResult = [2,3,4,5,6,7,8,9,10];
    expect(getNumsInRangeDoNotIncluded(inputList)).toStrictEqual(expectedResult);
});

test('Given an empty list, display a message',
  () => {
    const inputList = [];
    const expectedResult = 'zero numbers in the list'
    expect(getNumsInRangeDoNotIncluded(inputList)).toStrictEqual(expectedResult);
});