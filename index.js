const getArgs = require('./lib/args-parser');

const args = getArgs();
const mode = args.force || 
            (process.platform == 'win32' ? 'win' : 'ansi');
const title = args.title
try {        
    require('./lib/mode-' + mode)(title);    
} catch (err) {
    if(err.code === 'MODULE_NOT_FOUND') {
        console.log(`Mode '${mode}' not supported.`);
        process.exit(1);
    } else {
        throw err;
    }
}