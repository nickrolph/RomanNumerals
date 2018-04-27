function decToRome(x) {
    romNum = ""
	if(x >= 1000){
        thous = Math.floor(x/1000)
        //for loop runs as many times as 1000 divides x
        for(var i = 0; i < thous; i++){
            //append a new M for each loop
            romNum = romNum + "M"
        }
        x = x - (thous * 1000)
	}
    if(x>=900){
        //return 900
        x = x - 900
        romNum = romNum + "CM"
    }
	if(x >= 500){
        x = x-500
		romNum = romNum + "D"
	}
    if(x>= 400){
        x = x - 400
        romNum = romNum + "CD"
    }
	if(x >= 100){
        hund = Math.floor(x/100)
        //for loop runs as many times as 100 divides x
        for(var i = 0; i < hund; i++){
            //append C for each loop
            romNum = romNum + "C"

        }
        x = x - (hund * 100)
	}
    if(x>=90){
        x = x - 90
        romNum = romNum + "XC"
    }
	if(x >= 50){
        x = x - 50
		romNum = romNum + "L"
	}
    if(x>=40){
        x = x - 40
        romNum = romNum + "XL"
    }
	if(x >= 10){
        ten = Math.floor(x/10)
        //for loopo runs as many times as 10 divides x
        for(var i = 0; i < ten; i++){
            //append X for each loop
            romNum = romNum + "X"
        }
		x = x - (ten * 10)
	}
    if(x >=9){
        x = x - 9
        romNum = romNum + "IX"
    }
	if(x >= 5){
        x = x-5
		romNum = romNum + "V"
	}
    if(x>= 4){
        x = x-4
        romNum = romNum + "IV"
    }
	if(x >= 1){
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
    decVal = 0
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

