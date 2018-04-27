function decToRome(x) {
	if(x >= 1000){
		return "M"
	}
	if(x >= 500){
		return "D"
	}
	if(x >= 100){
		return "C"
	}
	if(x >= 50){
		return "L"
	}
	if(x >= 10){
		return "X"
	}
	if(x >= 5){
		return "V"
	}
	if(x >= 1){
		return "I"
	}

return "Not a Valid input"


}

module.exports = {
    decToRome
}

