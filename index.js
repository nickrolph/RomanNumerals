function decToRome(x) {
    //array of possible decimal values
    var posDec = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    //array of possible Numerals
    var posNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    //the final roman Numeral to be returned
    var romNum = ""
	//this for loop takes loops through each value of posDec so I don't
    //need an if statement for each
    for(var i = 0; i < posDec.length; i++){
        //this creates the base so we can deck if x is a multiple of a numeral
        var base = Math.floor((x/posDec[i]))
        //loops as many times as the base divides x
        for(var j = 0; j < base;j++){
            //appends the roman numeral for each time
            romNum = romNum + posNum[i]
        }
        x = x - (base * posDec[i])
    }
return romNum
}


function romToDec(x){
    //the final decimal value to be returned
    var decVal = 0
    //array of possible decimal values
    var posDec = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    //array of possible Numerals
    var posNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    
    while(x.length > 0){
        //this loop checks each possible Numeral and adds the value based
        //off the first letter(s)
        for(var i = 0;i <posNum.length;i++){
            //checks if posNum[i] is in x and if it is at the begenning of
            //the string
            if(x.indexOf(posNum[i]) === 0){
                //if it is we add the decimal value
                decVal = decVal + posDec[i]
                //we then make x the same string without that first numeral(s)
                x = x.substring(posNum[i].length,)
            }
       } 
    }
    return decVal
}

module.exports = {
    decToRome,
    romToDec
}

