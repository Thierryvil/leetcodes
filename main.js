const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = __dirname

const challenges = fs.readdirSync(root, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(directory => fs.existsSync(path.join(root, directory, 'run.js')))

const failed = [];

for (const challenge of challenges) {
    console.log();
    console.log("=".repeat(60));
    console.log(challenge);
    console.log("=".repeat(60));

    const challengePath = path.join(root, challenge);

    const result = spawnSync(
        process.execPath,
        ["run.js"],
        {
            cwd: challengePath,
            stdio: "inherit",
        }
    );

    if (result.status !== 0) {
        failed.push(challenge);
    }
}

console.log();
console.log("=".repeat(60));

if (failed.length > 0) {
    console.log(`❌ ${failed.length} challenge(s) failed:`);

    for (const challenge of failed) {
        console.log(`  - ${challenge}`);
    }

    process.exit(1);
}

console.log(`✅ All ${challenges.length} challenges passed!`)