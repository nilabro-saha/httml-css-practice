var textmethods = {
    getindices: function (mainstr, sub) {
        return Array.from(mainstr)
            .map((char, i) => (mainstr.substring(i, i + sub.length) === sub ? [i, i + sub.length] : null))
            .filter(x => (x != null));
    },
    capitalize: function (str) {
        // /^./ is a regex to replace only the first character
        return str.replace(/^./, str.charAt(0).toUpperCase());
    },
    maketitle: function (str) {
        return Array.from(str.trim())
            .map((char, i, arr) => (i == 0 || arr[i - 1] === ' ') ? char.toUpperCase() : char)
            .join('');
    },
    formatstr: function (str) {
        return Array.from(str)
            .map(char => char.toUpperCase() + " ")
            .join('')
            .trim();
    }
}

module.exports = textmethods;