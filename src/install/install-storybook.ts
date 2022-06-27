import { runCmd } from '../utils/run-cmd';

const installStorybook = async (projectName: string): Promise<void> => {
  await runCmd(`cd ${projectName} && npx -p @storybook/cli sb init`);
};

export default installStorybook;
