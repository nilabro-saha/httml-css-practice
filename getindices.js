function getindices(mainstr, sub) {
    return Array.from(mainstr)
        .map((char, i) => (mainstr.substring(i, i + sub.length) === sub ? [i, i + sub.length] : null))
        .filter(x => (x != null));
}

const text = "mississippi";
const searchstr = "ss";
const indices = getindices(text, searchstr);
console.log(indices);
console.log(text.slice(indices[0][0], indices[0][1])); // --> ss
console.log(text.slice(indices[1][0], indices[1][1])); // --> ss
