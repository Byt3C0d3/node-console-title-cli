# node-console-title-cli
CLI to set console title on Windows, Linux or OS/X in a cross-platform way

# Installation
## Prerequisites
windows-console-title is used underneath the covers. They use `node-gyp` for their build. This requires Python 2.7 (3.x.x support is lacking from their base gyp project).

If you get errors while installing this project that reference `node-gyp` you should install all necessary dependencies with these commands (powershell):
```powershell
npm install --global --production windows-build-tools
npm install --global node-gyp
```


```bash
npm install node-constole-title-cli
```

# Usage

If globally installed (not recommended):
```bash
npm run set-title My Task
```

Otherwise add to a script as any other command:
```json
"scripts": {
    "do-stuff": "set-title My Task && npm run do-more-stuff"
}
```

```
npm run do-stuff
```

```bash
# set title and force Windows mode
npx set-title -f win My Title
# set title and force ansi (linux/mac) mode
npx set-title -f ansi My Title
```



## Notes
I highly recommend using the [npm-run-all](https://www.npmjs.com/package/npm-run-all) package for a nicer experience:

```
"scripts": {
    "do-stuff": "run-s \"set-title My Task\" do-more-stuff"
}
```