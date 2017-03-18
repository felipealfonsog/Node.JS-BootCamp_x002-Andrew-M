var checkEmail = function(value) {
    try {
        check(value).isEmail();
        
    } catch (e) {
        return e.message; // invalid integer 
    }
    return value;
}

module.exports.checkEmail = checkEmail;


module.exports.checkEmail = checkEmail;


var checkData = require('./validation');

console.long("In testvalidation --> "+checkData.checkEmail("f.alfonso.go@gmail.com"));


var checkMinLenght = function(value ,len) {
    
    try {
        
        check(value, 'Please specify a minimum lenght of 1%'). len(len);
    } catch (e) {
        return e.message;
        
    }
    return value;
    
    
}




// end of the code in the interpretetion of me // Felipe. 
