import { equal } from 'assert';
 
// just make a simple string test
// not included in dist
const myArray = [1, 2, 3];
const string = "This is a string test";

describe('Test Mocha', () => {
        describe('myArray', () => {
            it('should not contain the number 4', () => {
                equal(myArray.indexOf(4), -1);
            });
        });
        describe('string', () => {
            it('Make the string upper case', () => {
                string.toUpperCase();
            });
        });
});