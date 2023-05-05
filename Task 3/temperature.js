function onConvert(){
    let degreeE1 = parseFloat(document.getElementById("degree").value);
    let typeE1 = document.getElementById("type").value;
    let result = 0;
    if(isNaN(degreeE1)){
        document.getElementById("num").textContent = "Please Enter Number";
    }
    else{
        document.getElementById("num").textContent = "";
    }

    if(typeE1 === "Celsius"){
        result = degreeE1 * 9/5 + 32;
    }
    else if(typeE1 === "Fahrenheit"){
        result = (degreeE1 - 32) * 5/9;
    }
    else if(typeE1 === "Kelvin"){
        result = degreeE1 - 273.15;
    }
    document.getElementById("result").value = result;
}