class Solution {
    maxSubArray(nums) {
        let currentSum = nums[0]
        let maxSum = nums[0]

        for (let i = 1; i < nums.length; i++) {
            const num = nums[i]

            if (currentSum + num > num) {
                currentSum += num
            } else {
                currentSum = num
            }

            if (currentSum > maxSum) {
                maxSum = currentSum
            }
        }

        return maxSum
    }
}

module.exports = Solution
