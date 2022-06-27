import { Command } from 'commander';
import installProject from './install-project-command';
const program = new Command();

program
  .name('reactirator')
  .description('A wrapper around create-react-app to add extra-customizations.')
  .version('Alpha-0.0.1')
  .argument('<project-name>', 'The project name')
  .option(
    '--template <template-name>',
    'Chose typescript or add any available CRA templates to your project'
  )
  .option('--tailwind', 'Add tailwindcss to your project')
  .option('--storybook', 'Add storybook to your project')
  .option('--bootstrap', 'Add bootstrap to your project')
  .action((str: string, options: any) => {
    installProject(str, options);
  });

export default program;
