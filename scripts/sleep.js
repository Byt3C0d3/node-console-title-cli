const spawnSync = require('child_process').spawnSync;
spawnSync('timeout.exe', ['5'], { stdio: 'inherit', shell: true });