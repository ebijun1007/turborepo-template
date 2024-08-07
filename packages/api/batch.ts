// @ts-ignore
const util = require("node:util");
// @ts-ignore
const exec = util.promisify(require("node:child_process").exec);

async function run() {
	// try {
	//   await exec(`npx wrangler d1 execute luden-store --command "UPDATE Item SET url = 'https://' || url WHERE url NOT LIKE 'https://%';" --remote`);
	//   console.log('URLs updated successfully');
	// } catch (error) {
	//   console.error('Error updating URLs:', error);
	// }
}

run();
