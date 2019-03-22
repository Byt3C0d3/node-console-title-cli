const { expect } = require("chai");
const sinon = require('sinon');
const parser = require('../lib/args-parser');
const CaptureStdOut = require('capture-stdout');


describe('args-parser', () => {
    let sandbox;
    let captureStdout = new CaptureStdOut();
    
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
        captureStdout.clearCaptureText();
        captureStdout.stopCapture();
    });

    it('should set title', () => {
        // Arrange
        const testArgs = ['hi'];
        
        // Act
        const args = parser(testArgs);
       
        // Assert
        expect(args.title).to.equal('hi');
    });

    it('should set mode to win when forced', () => {
        // Arrange
        const testArgs = ['-f', 'win', 'hi'];
        
        // Act
        const args = parser(testArgs);
        
        // Assert
        expect(args.force).to.equal('win');
    });

    it('should set mode to ansi when forced', () => {
        // Arrange
        const testArgs = ['-f', 'ansi', 'hi'];
        
        // Act
        const args = parser(testArgs);
        // Assert
        expect(args.force).to.equal('ansi');
    });  
});