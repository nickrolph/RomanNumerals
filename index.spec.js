const { decToRome } = require('./index')
const equal = require('assert').deepEqual

describe('', () => {

//test wave 1 for 1
    it('', () => { // Test if 1 return I
	equal(decToRome(1),"I")}) 
    
//test wave 2 for returns of exact Roman Numerals
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

//test wave 3 to return nearest roman numeral below dec value
	it('', () => { // Test if 1000 return M
	equal(decToRome(1000),"M")})
	it('', () => { // Test if 3000 return M - now MMM
	equal(decToRome(3000),"MMM")}) 
	it('', () => { // Test if 200 return C - now CC
	equal(decToRome(200),"CC")}) 
	it('', () => { // Test if 540 return D
	equal(decToRome(540),"D")}) 
	it('', () => { // Test if 9 return V
	equal(decToRome(9),"V")}) 
	it('', () => { // Test if 4 return I - now IIII
	equal(decToRome(4),"IIII")}) 

//test wave 4 returns Roman Numeral n times wher n = the max times 
//nearest Roman Numeral value below divides dec number
	it('', () => { // Test if 3000 return MMM
	equal(decToRome(3000),"MMM")}) 

	it('', () => { // Test if 2000 return MM
	equal(decToRome(2000),"MM")}) 

	it('', () => { // Test if 30 returns correct
	equal(decToRome(30),"XXX")})

    it('', () => { // Test if 200 return CC
	equal(decToRome(200),"CC")}) 
    
    it('', () => { // Test if 40 returns XXXX
	equal(decToRome(40),"XXXX")}) 

    it('', () => { // Test if 3 return III
	equal(decToRome(3),"III")}) 

    it('', () => { // Test if 8 return M
	equal(decToRome(8),"V")}) 






 




 


})
