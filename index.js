function decToRome(x) {
    romNum = ""
	if(x >= 1000){
        //for loop runs as many times as 1000 divides x
        for(var i = 0; i < Math.floor((x/1000)); i++){
            //append a new M for each loop
            romNum = romNum + "M"
        }
		return romNum
	}
	if(x >= 500){
		return "D"
	}
	if(x >= 100){
        //for loop runs as many times as 100 divides x
        for(var i = 0; i < Math.floor((x/100)); i++){
            //append C for each loop
            romNum = romNum + "C"

        }
		return romNum
	}
	if(x >= 50){
		return "L"
	}
	if(x >= 10){
        //for loopo runs as many times as 10 divides x
        for(var i = 0; i < Math.floor((x/10)); i++){
            //append X for each loop
            romNum = romNum + "X"
        }
		return romNum
	}
	if(x >= 5){
		return "V"
	}
	if(x >= 1){
        //for loop runs as many times as 1 divides x
        for(var i = 0; i < Math.floor((x/1)); i++){
            //append I for each loop
            romNum = romNum + "I"
        }
		return romNum
	}

return "Not a Valid input"


}

module.exports = {
    decToRome
}

