//John is struggling to know whether if He should wear shorts or pants on a given day. 
// Help him decide by writing a function called isShortsWeather. 

//It should accept a single number argument, which we will call temperature

//If temperature is greater than or equal to 75, return true. 
//Otherwise, return false.   

function isShortsWeather(temp){
    if (temp >= 75) {
        return true;
    } else if (temp < 75) {
        return false;
    }
    }