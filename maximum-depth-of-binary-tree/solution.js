class Soluction {
    maxDepth(root) {
        if (!root) {
            return 0
        }

        const left = this.maxDepth(root.left)
        const right = this.maxDepth(root.right)

        if (left > right) {
            return left + 1
        } else {
            return right + 1
        }
    }
}

module.exports = Soluction