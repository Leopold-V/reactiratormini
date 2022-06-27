import { promisifyWriteFs } from '../utils/promisifyFs';
import { runCmd } from '../utils/run-cmd';
import { writeFileAtTop } from '../utils/writeFileAtTop';

const installTailwind = async (fullPath: string): Promise<void> => {
  await runCmd(
    `cd ${fullPath} && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init`
  );
  await promisifyWriteFs(`${fullPath}\\tailwind.config.js`, tailwindConfig);
  await writeFileAtTop(`${fullPath}\\src\\index.css`, tailwindimport);
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
