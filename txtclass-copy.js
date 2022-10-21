class newString {
    constructor(mainstr) {
        this.mainstr = mainstr;
    }
    getindices(sub) {
        return Array.from(this.mainstr.matchAll(new RegExp(sub, 'g')), m => [m.index, m.index + m[0].length]);
    }
    capitalize() {
        return this.mainstr.replace(/^./, (x => x.toUpperCase()));
    }
    maketitle() {
        return this.mainstr.replace(/\b[A-Za-z]/g, (x => x.toUpperCase()))
    }
    formatstr() {
        return this.mainstr.replace(/\S/g, (x => x.toUpperCase() + " "));
    }
    removePunctuations() {
        return this.mainstr.replace(/\W/g, " ").toLowerCase();
    }
}

var str = new newString("Hi! my name is Nilabro Saha.");
console.log(str.maketitle());
console.log(str.removePunctuations());

var str = new newString("mississippi mississippi");
console.log(str.getindices("ss"));
console.log(str.capitalize());
console.log(str.formatstr());