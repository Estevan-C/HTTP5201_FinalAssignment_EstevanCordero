import { expect } from 'chai';

const myChaiString = "Hello World";

describe('Test Chai', () => {
    describe('myChaiString', () => {
        it('should be a string', () => {
            expect(myChaiString).to.be.an('string');
        });
    });
});