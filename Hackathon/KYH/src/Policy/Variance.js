function Variance() {
    this.range_size = 1;
}

Variance.prototype.getNextValue = function(deltaValue, start, end, size) {
    var next_start = 1;
    var next_end = next_start + this.range_size;
    // HAS TO UPDATE
    return {
        range_start: next_start,
        range_end: next_end,
    };
}

module.exports = Variance;