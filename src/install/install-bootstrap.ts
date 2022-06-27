import { runCmd } from '../utils/run-cmd';
import { writeFileAtTop } from '../utils/writeFileAtTop';

const installBootstrap = async (
  projectName: string,
  withTypescript: boolean
): Promise<void> => {
  await runCmd(`cd ${projectName} && npm install bootstrap`);
  withTypescript
    ? await writeFileAtTop(
        `${projectName}\\src\\index.tsx`,
        "import 'bootstrap/dist/css/bootstrap.css';\n"
      )
    : await writeFileAtTop(
        `${projectName}\\src\\index.js`,
        "import 'bootstrap/dist/css/bootstrap.css';\n"
      );
};

export default installBootstrap;
