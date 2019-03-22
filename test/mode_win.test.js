const { expect } = require("chai");
const sinon = require('sinon');


describe('mode-win', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
    });
    it('should spawn a call to cmd with title set', () => {
        // Arrange
        const title = 'TEST 123';
        const spawnStub = sandbox.stub(require('child_process'), 'spawnSync')
            .returns({
                pid: 1,
                output: [],
                stdout: new Buffer(0),
                stderr: new Buffer(0),
                status: 0,
                signal: null,
                error: null
            });
        const setTitleWin = require('../lib/mode-win');
        // Act
        setTitleWin(title);
       
        // Assert
        sinon.assert.calledWithExactly(spawnStub,
            'cmd.exe', 
            ['/C', 'title TEST 123'], 
            { stdio: 'inherit', shell: true });
    });
});