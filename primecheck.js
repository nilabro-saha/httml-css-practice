var n = 30;
console.log(filterPrimes(n));

function filterPrimes(n) {
    list = Array(n).fill(true);
    list[0] = false;
    for (var i = 2; i <= n / 2; i++) {
        for (var j = 2; j * i <= n; j++) list[j * i - 1] = false;
    }
    primelist = [];
    for (var i = 2; i <= n; i++) {
        if (list[i - 1]) primelist.push(i);
    }
    return primelist;
}