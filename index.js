function decToRome(x) {
    //array of possible decimal values
    posDec = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    //array of possible Numerals
    posNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    //the final roman Numeral to be returned
    romNum = ""
	if(x >= posDec[0]){
        thous = Math.floor(x/posDec[0])
        //for loop runs as many times as 1000 divides x
        for(var i = 0; i < thous; i++){
            //append a new M for each loop
            romNum = romNum + "M"
        }
        x = x - (thous * posDec[0])
	}
    if(x>= posDec[1]){
        //add 900
        x = x - posDec[1]
        romNum = romNum + "CM"
    }
	if(x >= posDec[2]){
        //add 500
        x = x- posDec[2]
		romNum = romNum + "D"
	}
    if(x>= posDec[3]){
        //add 400
        x = x - posDec[3]
        romNum = romNum + "CD"
    }
	if(x >=  posDec[4]){
        hund = Math.floor(x/ posDec[4])
        //for loop runs as many times as 100 divides x
        for(var i = 0; i < hund; i++){
            //append C for each loop
            romNum = romNum + "C"

        }
        x = x - (hund *  posDec[4])
	}
    if(x>= posDec[5]){
        //add 90 
        x = x - posDec[5]
        romNum = romNum + "XC"
    }
	if(x >= posDec[6]){
        //add 50
        x = x - 50
		romNum = romNum + "L"
	}
    if(x>= posDec[7]){
        //add 40
        x = x - posDec[7]
        romNum = romNum + "XL"
    }
	if(x >= posDec[8]){
        ten = Math.floor(x/ posDec[8])
        //for loopo runs as many times as 10 divides x
        for(var i = 0; i < ten; i++){
            //append X for each loop
            romNum = romNum + "X"
        }
		x = x - (ten * posDec[8])
	}
    if(x >= posDec[9]){
        //add 9
        x = x - posDec[9]
        romNum = romNum + "IX"
    }
	if(x >= posDec[10]){
        //add 5
        x = x- posDec[10]
		romNum = romNum + "V"
	}
    if(x>=  posDec[11]){
        //add 4
        x = x - posDec[11]
        romNum = romNum + "IV"
    }
	if(x >=  posDec[12]){
        //for loop runs as many times as 1 divides x
        for(var i = 0; i < x; i++){
            //append I for each loop
            romNum = romNum + "I"
        }
		x = x -x
	}
return romNum
}


function romToDec(x){
    //the final decimal value to be returned
    decVal = 0
    //array of possible decimal values
    posDec = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    //array of possible Numerals
    posNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    
    while(x.length >0){
        //check the conents of the first letter and compare to second letter
        
        firstLet = x.substring(0,1)
        secLet = x.substring(1,2)
        lets = ""

        if((firstLet == "I" && (secLet == "V" || secLet == "X"))
            ||(firstLet == "X" && (secLet == "L" || secLet == "C"))
            ||(firstLet == "C" && (secLet == "D" || secLet == "M"))
            ){
            lets = x.substring(0,2)
        }
        else{
            lets = firstLet
        }
        if(lets === "M"){
            decVal = decVal + 1000
        }
        if(lets === "CM"){
            decVal = decVal + 900
        }
        if(lets === "D"){
            decVal=decVal+ 500
        }
        if(lets=== "CD"){
            decVal=decVal+ 400 
        }
        if(lets==="C"){
            decVal=decVal+ 100
        }
        if(lets==="XC"){
            decVal=decVal+ 90
        }
        if(lets==="L"){
            decVal=decVal+ 50
        }
        if(lets==="XL"){
            decVal = decVal+40     
        }
        if(lets==="X"){
            decVal=decVal+ 10
        }
        if(lets==="IX"){
            decVal=decVal+ 9
        }
        if(lets==="V"){
            decVal=decVal+ 5
        }
        if(lets==="IV"){
            decVal=decVal+ 4
        }
        if(lets==="I"){
            decVal=decVal+ 1
        }
        x = x.substring(lets.length,)
    }
    return decVal

}
module.exports = {
    decToRome,
    romToDec
}

