class Solution {
    productExceptSelf(nums) {
        const result = new Array(nums.length)

        let leftProduct = 1

        for (let i = 0; i < nums.length; i++) {
            result[i] = leftProduct
            leftProduct *= nums[i]
        }


        let rightProduct = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= rightProduct
            rightProduct *= nums[i]
        }

        return result
    }
}

module.exports = Solution
