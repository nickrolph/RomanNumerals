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
 /*
        //check the conents of the first letter and compare to second letter
        firstLet = x.substring(0,1)
        secLet = x.substring(1,2)
        lets = ""

        //this series of if's and else's checks if the first letter and second
        //letter are a special case that has a different value
        if((firstLet == "I" && (secLet == "V" || secLet == "X"))
            ||(firstLet == "X" && (secLet == "L" || secLet == "C"))
            ||(firstLet == "C" && (secLet == "D" || secLet == "M"))
            ){
            lets = x.substring(0,2)
        }
        else{
            lets = firstLet
        }
*/
        //this loop checks each possible Numeral and adds the value based
        //off the first letter(s)
        for(var i = 0;i <posNum.length;i++){
            //checks if posNum[i] is in x and if it is at the begenning of
            //the string
            console.log("WELL x is ", x)

            console.log("The value of the loop is "+ i + " and the value of posNum[i] is ", posNum[i])
            console.log("Hey there champ the value of the indexOf is ", x.indexOf(posNum[i]))

            if(x.indexOf(posNum[i]) === 0){
                //if it is we add the decimal value
                decVal = decVal + posDec[i]
            }
        console.log("WELL x is ", x)
        //we then make x the same string without that first numeral(s)
        x = x.substring(posNum[i].length,)
        } 
    }
    return decVal
}

module.exports = {
    decToRome,
    romToDec
}

