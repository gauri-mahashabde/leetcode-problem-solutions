//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

const finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i].includes('++'))
            x += 1;
        else if(operations[i].includes('--'))
            x -= 1;
    }
    return x;
};