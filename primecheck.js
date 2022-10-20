var n = 30;
console.log(filterPrimes(n));

function filterPrimes(n) {
    list = Array(n).fill(true);
    list[0] = false;
    for (var i = 2; i <= n / 2; i++) {
        for (var j = 2; j * i <= n; j++) list[j * i - 1] = false;
    }
    return list
        .map((x, i) => i)
        .filter((x, i) => list[i])
        .map(x => x + 1);
}