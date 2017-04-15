var nsrls = require('./index');

var testCasesString = [
    {
        input: 'whats up doc?',
        output: 'w1h1a1t1s1 1u1p1 1d1o1c1?1'
    },
    {
        input: 'aaaaaa',
        output: 'a6'
    }
];

var testCasesArray = [
    {
        input: 'whats up doc?',
        output: ["w", 1, "h", 1, "a", 1, "t", 1, "s", 1, " ", 1, "u", 1, "p", 1, " ", 1, "d", 1, "o", 1, "c", 1, "?", 1]
    },
    {
        input: 'aaaaaa',
        output: [ "a", 6 ]
    }
];

function runStringTestCases(testCase) {
    var expected = testCase.output;
    var actual = nsrls.runLengthStringOf(testCase.input);
    var output = 'expected: ' + expected + ', actual: ' + JSON.stringify(actual);
    console.log(output, expected === actual);
}

function runArrayTestCases(testCase) {
    var expected = testCase.output;
    var actual = nsrls.runLengthArrayOf(testCase.input);
    var output = 'expected: ' + JSON.stringify(expected) + ', actual: ' + JSON.stringify(actual);
    var okay = true;
    for(var i = 0; okay && i < expected.length; i++) {
        okay = expected[i] === actual[i];
    }
    console.log(output, okay);
}

var testCasesAnalyze = [
  {
    input: 'aaaaaa',
    output: {
      lengths: {
        old: 6,
        run: 2,
        diff: 4
      },
      strings: {
        old: 'aaaaaa',
        run: 'a5'
      },
      benefit: true
    }
  }
];

function runAnalyzeTestCases(testCase) {
  var expected = testCase.output;
  var actual = nsrls.analyze(testCase.input);
  var output = 'expected: ' + JSON.stringify(expected) + ', actual: ' + JSON.stringify(actual);
  console.log(output);
}

module.exports = function () {
    testCasesString.forEach(runStringTestCases);
    testCasesArray.forEach(runArrayTestCases);
    testCasesAnalyze.forEach(runAnalyzeTestCases);
};
