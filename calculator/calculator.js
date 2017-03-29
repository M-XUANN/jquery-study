function addDigit(digit) {
        var resultField = document.getElementById("results");
        resultField.innerHTML += digit;
 
        return false;
    }
 
    function calculate() {
        var resultField = document.getElementById("results");
         
        resultField.innerHTML = eval(resultField.innerHTML);
 
        return false;
    }
 
    function reset() {
        var resultField = document.getElementById("results");
         
        resultField.innerHTML = "";
 
        return false;
    }