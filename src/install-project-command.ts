import { runCmd } from './utils/run-cmd';
import installTailwind from './install/install-tailwind';
import installStorybook from './install/install-storybook';
import installBootstrap from './install/install-bootstrap';

const installProject = async (projectName: string, options: any) => {
  console.log(options);
  const command = `npx create-react-app ${projectName} ${
    options.template ? '--template typescript' : ''
  }`;
  await runCmd(command);
  if (options.tailwind) {
    await installTailwind(projectName);
  }
  if (options.storybook) {
    await installStorybook(projectName);
  }
  if (options.bootstrap) {
    await installBootstrap(
      projectName,
      options.template === 'typescript' ? true : false
    );
  }
};

export default installProject;
