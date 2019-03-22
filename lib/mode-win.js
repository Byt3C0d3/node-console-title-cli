const spawnSync = require('child_process').spawnSync;

module.exports = function setTitle(title) {
    spawnSync('cmd.exe', ['/C', `title ${title}`], { stdio: 'inherit', shell: true })
}