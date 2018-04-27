const { decToRome } = require('./index')
const {romToDec} = require('./index')
const equal = require('assert').deepEqual

describe('', () => {
//----------------------------Part 1----------------------------------------
//These first 5 tests were for the part 1 of the coding challenge. I started by 
//simply identifying and returning the exact roman numerals. Then I went to 
//print the next largest Roman Numeral value below the dec value. Then I 
//decided to look at case where the roman numerals were some amount of 
//multiples of the dec input. When I thought about how to print the Roman 
//numerals that were created by putting the smaller Roman Numeral in 
//front, I realized an easy way to do it was to solve it the same way I solved 
//solved my first test: just add another if statement to check if the dec falls
//in that range. For the last and most complicated test I found that if i 
//subtracted the roman numeral for that place, I got a new int that I could 
//once again repeat the process on

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
	it('', () => { // Test if 540 return D - now DXL
	equal(decToRome(540),"DXL")}) 
	it('', () => { // Test if 9 return V - now IX
	equal(decToRome(9),"IX")}) 
	it('', () => { // Test if 4 return I - now IV
	equal(decToRome(4),"IV")}) 

//test wave 4 returns Roman Numeral n times wher n = the max times 
//nearest Roman Numeral value below divides dec number
//This is only necesary in the cases 1,10,100, and 1000
	it('', () => { // Test if 3000 return MMM
	equal(decToRome(3000),"MMM")}) 

	it('', () => { // Test if 2000 return MM
	equal(decToRome(2000),"MM")}) 

	it('', () => { // Test if 30 returns correct
	equal(decToRome(30),"XXX")})

    it('', () => { // Test if 200 return CC
	equal(decToRome(200),"CC")}) 
    
    it('', () => { // Test if 40 returns XXXX - now XL
	equal(decToRome(40),"XL")}) 

    it('', () => { // Test if 3 return III
	equal(decToRome(3),"III")}) 

    it('', () => { // Test if 8 return M - now VIII
	equal(decToRome(8),"VIII")}) 


//test wave 5 to account for values one tick below roman Numeral value 
//ex. 40 is XL, 90 is XC etc

    it('', () => { // Test if 900 returns CM
	equal(decToRome(900),"CM")}) 

    it('', () => { // Test if 90 return XC
	equal(decToRome(90),"XC")}) 

    it('', () => { // Test if 400 returns CD
	equal(decToRome(400),"CD")}) 

    it('', () => { // Test if 4 return IV
	equal(decToRome(4),"IV")}) 

//test wave 6 to append multiple values of roman numerals together to acound for
//the complete number
    it('', () => { // Test if 2945 return MMCMXLV
	equal(decToRome(2945),"MMCMXLV")}) 

    it('', () => { // Test if 197 return CXCVII
	equal(decToRome(197),"CXCVII")}) 

    it('', () => { // Test if 83 return LXXXIII
	equal(decToRome(83),"LXXXIII")}) 

    it('', () => { // Test if 17 return XVII
	equal(decToRome(17),"XVII")}) 

    it('', () => { // Test if 742 return DCCXLII
	equal(decToRome(742),"DCCXLII")}) 

//possible edge cases or known error cases:
//if dec = 0


//-----------------------PART 2-----------------------------------
//For these next round of tests for part 2 I am using some information I 
//learned from part 1 to come with a different approach. I know
//that Roman Numerals are read from left to right in decreaseing order
//of value. With this in mind I will structure my program value checking
//in decending order from the outset unlike in part 1

//first test if we can take input and return 1000
    it('', () => { // Test if M return 1000
	equal(romToDec("M"), 1000)}) 

//second wave tests given single Roman Numeral return proper char
    it('', () => { // Test if D return 500
	equal(romToDec("D"),500)}) 


    it('', () => { // Test if C return 100
	equal(romToDec("C"),100)}) 

//third wave tests, if given two digit roman Numeral with first digit < 
//second digit


    it('', () => { // Test if CM return 900
	equal(romToDec("CM"),900)}) 


    it('', () => { // Test if XC return 90
	equal(romToDec("XC"),90)}) 


    it('', () => { // Test if IX returns 9
	equal(romToDec("IX"),9)}) 

//Fourth wave tests, if given a Multiple of any duplicatable Roman Numeral
//Give the proper numerical value. 


    it('', () => { // Test if it returns 30
	equal(romToDec("XXX"),30)}) 


    it('', () => { // Test if II return 2
	equal(romToDec("II"),2)}) 


    it('', () => { // Test if CCCC return 400
	equal(romToDec("CCCC"),400)}) 

//Fifth wave tests, Testing with Any roman numeral to see if it can parse it correctly

    it('', () => { // Test if 8 return M
	equal(romToDec("MMDCCCLVI"),2856)}) 


    it('', () => { // Test if 8 return M
	equal(romToDec("XIX"),19)}) 


    it('', () => { // Test if 8 return M
	equal(romToDec("XLIX"),49)}) 


    it('', () => { // Test if 8 return M
	equal(romToDec("CMXLIX"),949)}) 


    it('', () => { // Test if 8 return M
	equal(romToDec("MDCCLVIII"),1758)}) 



//possible edge cases or known error cases:
//if Numerals are ever in an invalid order ex XM, IM
//Some numerals cannot be set up as doubles in certain context's ex CC
//if more than 3 Numerals in a row ex CCCC 



//with regard to errors I am trusting the user to input a valid Roman 
//Numeral and for the user to not try and convert 0
})
