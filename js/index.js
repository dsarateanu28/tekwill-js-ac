const checkDiff = () => {
    const numberValue = document.forms["diffNumber"]["number_1"].value;
    const result = numberValue > 13 ? ((numberValue - 13) * 2) : "Number is lower or equal than 13";
    document.getElementById("diffResult").innerHTML = "Result: " + result;
}

const checkNegativeNumber = () => {
    const number1stValue = document.forms["negativeNumber"]["number_1"].value;
    const number2edValue = document.forms["negativeNumber"]["number_2"].value;
    let result = "No negative elements";
    switch (true) {
        case number1stValue < 0 && number2edValue < 0 :
            result = "All elements are negative";
            break;
        case number1stValue < 0 :
            result = "First number is negative";
            break;
        case number2edValue < 0 :
            result = "Second number is negative";
            break;
    }
    document.getElementById("negativeResult").innerHTML = "Result: " + result;
}

const calculateNumber = () => {
    const attribute = document.activeElement.getAttribute('value');
    const number1stValue = document.forms["calcNumber"]["number_1"].value;
    const number2edValue = document.forms["calcNumber"]["number_2"].value;
    if (attribute === 'multiply') {
        const result = number1stValue * number2edValue;
        document.getElementById("3dResult").innerHTML = "Result: " + result;
        return;
    }
    const result = number1stValue / number2edValue;
    document.getElementById("3dResult").innerHTML = "Result: " + result;
}
