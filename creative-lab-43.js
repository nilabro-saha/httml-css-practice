function selectEmail(text) {
    return Array.from(text.matchAll(/\w+@\w+[.]\w+([.]\w+)?/g))
        .map(m => m[0]);
}
function selectIpAddress(text) {
    var r = '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
    return Array.from(text.matchAll(new RegExp(`${r}[.]${r}[.]${r}[.]${r}`, 'g')))
        .map(m => m[0]);
}
function selectFloatingPoint(text) {
    return Array.from(text.matchAll(/[-+]?\d+[.]?\d*/g))
        .map(x => parseFloat(x))
}