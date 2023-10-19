if (fromScale === toScale) {
    resultado = temperatura;
} else if (fromScale === "celsius") {
    if (toScale === "kelvin") {
        resultado = temperatura + 273.15;
    } else if (toScale === "fahrenheit") {
        resultado = (temperatura * 9/5) + 32;
    }
} else if (fromScale === "kelvin") {
    if (toScale === "celsius") {
        resultado = temperatura - 273.15;
    } else if (toScale === "fahrenheit") {
        resultado = (temperatura - 273.15) * 9/5 + 32;
    }
} else if (fromScale === "fahrenheit") {
    if (toScale === "celsius") {
        resultado = (temperatura - 32) * 5/9;
    } else if (toScale === "kelvin") {
        resultado = (temperatura - 32) * 5/9 + 273.15;
    }
}