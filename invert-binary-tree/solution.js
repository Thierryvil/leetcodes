class Solution {
    invertTree(root) {
        if (!root) {
            return root
        }

        const { left, right } = root

        root.left = right;
        root.right = left

        this.invertTree(root.left)
        this.invertTree(root.right)

        return root
    }
}

module.exports = Solution
