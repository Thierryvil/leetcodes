const Solution = require("./solution");
const { assertEqual, TreeNode } = require('../util')

function run() {
    const solution = new Solution();

    const cases = [
        {
            root: new TreeNode(
                3,
                new TreeNode(9),
                new TreeNode(
                    20,
                    new TreeNode(15),
                    new TreeNode(7)
                )
            ),
            expected: 3,
        },
        {
            root: new TreeNode(
                1,
                null,
                new TreeNode(2)
            ),
            expected: 2,
        },
    ];

    cases.forEach((testCase, index) => {
        const result = solution.maxDepth(
            testCase.root,
        );

        assertEqual(
            result,
            testCase.expected,
            index + 1
        );
    });
}

run();