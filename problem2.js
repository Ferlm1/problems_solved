const NUMS = [1,5,5,3,2,2,1];
const TARGET = 2;
const END_MESSAGE = 'Nothing left to sum'; 

function getIndexAddUptoTarget(nums, target) {
    let indexesAddUpToTarget = [];
    const hasOneNum = nums.length === 1;

    if(hasOneNum) {
        return END_MESSAGE;
    }

    const pivotIndex = nums.length;
    const pivotValue = nums.pop();

    const n1 = {
        index: pivotIndex - 1,
        num: pivotValue,
    };

    nums.forEach((num,index) => {
        const sum = n1.num + num;
        if(sum == target) {
            const n2 = {
                index,
                num,
            }
            indexesAddUpToTarget = [n1.index, n2.index];
        }
    });
    const isThereSolvedSum = indexesAddUpToTarget.length == 2;
    return isThereSolvedSum ? indexesAddUpToTarget : getIndexAddUptoTarget(nums, target);
}

console.log('getAddUpNums ', getIndexAddUptoTarget(NUMS, TARGET));
module.exports = getIndexAddUptoTarget;