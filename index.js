function shouldLoop(i, length) {
    // We are checking for equality
    // since the last element is not tested
    // and recorded.
    return i <= length;
}

function runLengthArrayOf(input) {
    var charArray = input.split('');
    var runArray = [];
    var i = 1;
    var prev = charArray[0];
    var count = 1;
    var length = charArray.length
    while(shouldLoop(i, length)) {
        var curr = charArray[i];
        if(curr === prev) {
            count++;
        } else {
            runArray.push(prev);
            runArray.push(count);
            count = 1;
        }
        prev = curr;
        i++;
    }
    return runArray;
}
function runLengthStringOf(input) {
    return runLengthArrayOf(input).join('');
}

module.exports = {
    runLengthStringOf: runLengthStringOf,
    runLengthArrayOf: runLengthArrayOf
};
