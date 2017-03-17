# node-srls
node string run length string

Do you want to get the run length of a string? Use this package.

[npm](https://www.npmjs.com/package/node-srls) | [github](https://github.com/faxianshanxi/node-srls)

## Usage

```
    npm install --save node-srls
    var runLengthLib = require('node-srls');
    var input = 'aaabbbb ccccccc     ';
    var runLength = runLengthLib.runLengthStringOf(input);
    console.log(runLength);
    // "a3b3 1c6 5"
    runLength = runLengthLib.runLengthArrayOf(input);
    console.log(JSON.stringify(runLength));
    // [ 'a', 3, 'b', 4, ' ', 1, 'c', 7, ' ', 5 ]
```

That's all folks;
