var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

//i am starting with an array of numbers and a target
    //iterate over numbers array
        //for each number, iterate over the rest of the numbers array
            //on each iteration, add the 2 current numbers together and check if they equal the target
            //if they do equal the target, return an array of those two numbers
//i need to return an array containing the 2 numbers from the given array that add up to the target
