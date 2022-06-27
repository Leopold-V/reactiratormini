import { runCmd } from "./utils/run-cmd";
import installTailwind from "./install/install-tailwind";

const installProject = async (projectName: string, options: any) => {
  console.log(projectName);
  console.log(options);
  const command = `npx create-react-app ${projectName} ${
    options.typescript ? "--template typescript" : ""
  }`;
  await runCmd(command);
  if (options.tailwind) {
    await installTailwind(projectName);
  }
};

export default installProject;
