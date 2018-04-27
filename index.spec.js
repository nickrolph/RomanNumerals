const { decToRome } = require('./index')
const equal = require('assert').deepEqual

describe('', () => {
    it('', () => { // Test if 1 return I
	equal(decToRome(1),"I")}) 
    it('', () => { // Test if 5 return V
	equal(decToRome(5),"V")}) 
    it('', () => { // Test if 10 return X
	equal(decToRome(10),"X")}) 
    it('', () => { // Test if 50 return L
	equal(decToRome(50),"L")}) 
    it('', () => { // Test if 100 return C
	equal(decToRome(100),"C")}) 
    it('', () => { // Test if 500 return D
	equal(decToRome(500),"D")}) 
    it('', () => { // Test if 1000 return M
	equal(decToRome(1000),"M")}) 
})
