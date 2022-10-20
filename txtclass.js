class newString {
    constructor(mainstr) {
        this.mainstr = mainstr;
    }
    getindices(sub) {
        return Array.from(this.mainstr.matchAll(new RegExp(sub, 'g')), match => [match.index, match.index + sub.length]);
        // return Array.from(this.mainstr)
        //     .map((char, i) => (this.mainstr.substring(i, i + sub.length) === sub ? [i, i + sub.length] : null))
        //     .filter(x => (x != null));
    }
    capitalize() {
        // /^./ matches the first character of the string
        return this.mainstr.replace(/^./, (x => x.toUpperCase()));
    }
    maketitle() {
        // /\b[A-Za-z]/g matches a letter-like starting boundary character in a word
        return this.mainstr.replace(/\b[A-Za-z]/g, (x => x.toUpperCase()))

        // /^.|\s\w{1}/g -> matches the first character or a space followed by one letter-like character
        // return this.mainstr.replace(/^.|\s\w{1}/g, (x => x.toUpperCase()));
    }
    formatstr() {
        // /./g matches every letter of the string
        // /\S/ -> matches every character that is not a space
        return this.mainstr.replace(/\S/g, (x => x.toUpperCase() + " "));
    }
    removePunctuations() {
        // /[.,\/#!$%\^&\*;:{}=\-_`~()]/g matches every punctuation symbol in the string
        // return this.mainstr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").toLowerCase();

        // \W -> matches everything that is not a letter or a number
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