var n = 10;
var fiblist = [];
fiblist[0] = 0;
fiblist[1] = 1;
for (var i = 2; i < n; i++) {
    fiblist[i] = fiblist[i - 1] + fiblist[i - 2];
}
console.log(fiblist);