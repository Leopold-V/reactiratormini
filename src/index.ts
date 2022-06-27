import { Command } from 'commander';
import installProject from './install-project-command';
const program = new Command();

program
  .name('reactirator')
  .description('A wrapper around create-react-app to add extra-customizations.')
  .version('Alpha-0.0.1')
  .argument('<project>', 'The project name')
  .option('--typescript', 'Add typescript to your project')
  .option('--tailwind', 'Add tailwindcss to your project')
  .action((str: string, options: any) => {
    installProject(str, options);
  });

export default program;
