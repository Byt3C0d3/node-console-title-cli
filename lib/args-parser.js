const yargs = require('yargs');

module.exports = 
    function getArgs(testArgs) {
        const parser = testArgs ? yargs(testArgs) : yargs;
        const args = 
            parser
                .option({
                    force: {
                        alias: 'f',
                        choices: ['win', 'ansi']
                    }
                })                
                .usage('set-title [-f <win|ansi>] <title>')
                .showHelpOnFail();
        return {
            title: args.argv._.join(' '),
            force: args.argv.force
        };
    }