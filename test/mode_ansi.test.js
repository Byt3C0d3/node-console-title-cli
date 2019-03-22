const { expect } = require("chai");
const CaptureStdOut = require('capture-stdout');

const setTitleAnsi = require('../lib/mode-ansi');

describe('mode-ansi', () => {
    let captureStdout = new CaptureStdOut();
    afterEach(() => {        
        captureStdout.clearCaptureText();
    });
    it('should send title wrapped in ansi sequence to stdout', () => {
        // Arrange
        const title = 'TEST 123';
        let capturedText = [];
        
        // Act
        captureStdout.startCapture();
       
        setTitleAnsi(title);
       
        capturedText = captureStdout.getCapturedText();       
        captureStdout.stopCapture();

        // Assert
        expect(capturedText).has.lengthOf(1);
        expect(capturedText[0]).to.be.eq('\x1b]2;TEST 123\x1b\x5c');
    });
});