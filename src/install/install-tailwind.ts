import { promisifyWriteFs } from '../utils/promisifyFs';
import { runCmd } from '../utils/run-cmd';
import { writeFileAtTop } from '../utils/writeFileAtTop';

const installTailwind = async (projectName: string): Promise<void> => {
  await runCmd(
    `cd ${projectName} && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init`
  );
  await promisifyWriteFs(`${projectName}\\tailwind.config.js`, tailwindConfig);
  await writeFileAtTop(`${projectName}\\src\\index.css`, tailwindimport);
};

const tailwindimport = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n`;

const tailwindConfig = `module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

export default installTailwind;
