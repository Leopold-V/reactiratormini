import { runCmd } from "./utils/run-cmd"

const installProject = async (projectName: string, options: any) => {
    console.log(projectName);
    console.log(options);
    const command = `npx create-react-app ${projectName} ${options.typescript ? '--template typescript' : ''}`
    console.log(command);
    await runCmd(command);
}

export default installProject;