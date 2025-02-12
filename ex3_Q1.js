function convertTemperature(){
    let celsius = document.getElementById("celsius").value;
    console.log("Celsius input:", celsius); 
    if (celsius === "") {
        alert("Please enter a temperature in celcius");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Fahrenheit output:", fahrenheit);
    document.getElementById('fahrenheit').innerHTML = fahrenheit.toFixed(2) + "F";
}
