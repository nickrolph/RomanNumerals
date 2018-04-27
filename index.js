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
    //parse string to check if has duplicate letters
    while(x.length >0){
        firstLet = x.substring(0,1)
        if(firstLet === "M"){
            return 1000
        }
        if(firstLet === "CM"){
            return 900
        }
        if(firstLet === "D"){
            return 500
        }
        if(firstLet=== "CD"){
            return 400 
        }
        if(firstLet==="C"){
            return 100
        }
        if(firstLet==="XC"){
            return 90
        }
        if(firstLet==="L"){
            return 50
        }
        if(firstLet==="XL"){
        
        }
        if(firstLet==="X"){
            return 10
        }
        if(firstLet==="IX"){
            return 9
        }
        if(firstLet==="V"){
            return 5
        }
        if(firstLet==="IV"){
            return 4
        }
        if(firstLet==="I"){
            return 1
        }
        x = x.substring(1,)
    }

}
module.exports = {
    decToRome,
    romToDec
}

