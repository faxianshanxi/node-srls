
function Analysis (old, run) {
  var oldLength = old.length;
  var newLength = run.length;
  this.lengths = {
    old: oldLength,
    run: newLength,
    diff: oldLength - newLength
  };
  this.strings = {
    old: old,
    run: run
  };
  this.benefit = this.lengths.diff > 0 ? true : false;
}

module.exports = {
  Analysis: Analysis
};
