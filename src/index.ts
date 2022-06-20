const { Command } = require('commander');
const program = new Command();

program
  .name('reactirator')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str: string, options: any) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });



module.exports = program;