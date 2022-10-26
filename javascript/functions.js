function convertToFahrenheit(c) {
    return c * 9 / 5 + 32;
}
function convertToCelcius(f) {
    return 5 * (f - 32) / 9;
}
function isPrime(n) {
    list = Array(n).fill(true);
    list[0] = false;
    for (var i = 2; i <= n; i++) {
        for (var j = 2; j * i <= n; j++) list[j * i - 1] = false;
    }
    return list[n - 1];
}

// check out requirejs