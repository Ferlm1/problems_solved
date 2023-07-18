const NUMS = [4,3,2,7,8,2,3,1];
const EMPTY_LIST_MESSAGE = 'zero numbers in the list';
const EMPTY_LENGTH = 0;

const orderNumsInEquivalentIndexValue = (nums) => {
    const orderedList = [];
    nums.forEach(num => {
        const equivalentIndexValue = num-1;
        orderedList[equivalentIndexValue] = num;
    });
    return orderedList;
}

const getNotIncludedNumbersInRange = (pushedNums, rangeLimit) => {
    const notIncludedNums = [];
    const initialIndex = 0;
    for (let i = initialIndex; i < rangeLimit; i++) {
        const emptyValue = !pushedNums[i]
        if (emptyValue) {
            const notIncludedNum = i + 1; 
            notIncludedNums.push(notIncludedNum); 
        }
    };
    return notIncludedNums;
} 

function getNumsInRangeDoNotIncluded (nums) {
    const lengthOfList = nums.length;
    const isEmptyList = lengthOfList === EMPTY_LENGTH;

    if (isEmptyList) {
        return EMPTY_LIST_MESSAGE;
    }

    const orderedNums = orderNumsInEquivalentIndexValue(nums);
    const NotIncludedNums = getNotIncludedNumbersInRange(orderedNums, lengthOfList);

    return NotIncludedNums;
};

const numsNotIncluded = getNumsInRangeDoNotIncluded(NUMS);
console.log('Nums not included: ', numsNotIncluded);
module.exports = getNumsInRangeDoNotIncluded;