function passwordValidator(password) {
    
    function checkLength(password) {
       return password.length >= 6 && password.length <= 10;
    }

    function onlyLettersAndNumbers(password) {
        return /^[A-Za-z0-9]+$/.test(password);
    }

    function atleastTwoDigits(password) {
        return (password.match(/\d/g) || []).length >=2;
    }

    if(!checkLength(password)) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if(!onlyLettersAndNumbers(password)) {
        console.log(`Password must consist only of letters and digits`);
    }

    if(!atleastTwoDigits(password)) {
        console.log(`Password must have at least 2 digits`);
    }

    if(checkLength(password) && onlyLettersAndNumbers(password) && atleastTwoDigits(password)) {
        console.log(`Password is valid`);
    }
}

passwordValidator(`mypass123`);