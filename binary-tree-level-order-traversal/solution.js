class Solution {
    levelOrder(root) {
        const final = []

        if (!root) {
            return final
        }

        const queue = []

        queue.push(root)

        let index = 0

        while (index < queue.length) {
            const level = []
            const levelSize = queue.length - index

            for (let i = 0; i < levelSize; i++) {
                const node = queue[index]
                index++

                level.push(node.val)

                if (node.left) {
                    queue.push(node.left)
                }

                if (node.right) {
                    queue.push(node.right)
                }
            }

            final.push(level)
        }

        return final
    }
}

module.exports = Solution
