function assertEqual(actual, expected, caseNumber) {
    const assert = require("node:assert");

    const normalize = (value) => {
        if (Array.isArray(value)) {
            return value.map(item => item === 0 ? 0 : item);
        }

        return value === 0 ? 0 : value;
    };

    try {
        assert.deepStrictEqual(
            normalize(actual),
            normalize(expected)
        );

        console.log(`✅ Case ${caseNumber}`);
    } catch (error) {
        console.log(`❌ Case ${caseNumber}`);
        console.log(`   Expected: ${JSON.stringify(expected)}`);
        console.log(`   Received: ${JSON.stringify(actual)}`);

        process.exitCode = 1;
    }
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

module.exports = { assertEqual, TreeNode }