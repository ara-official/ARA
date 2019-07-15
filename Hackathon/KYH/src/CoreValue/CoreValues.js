var Variance = require('./Variance');

function CoreValues() {
    this.values = [new Variance()];
}

CoreValues.prototype.filtering = function(numbers) {
    for (var i = 0; i < this.values.length; i++) {
        if (this.values[i].check(numbers) == false) {
            return false;
        }
    }
    return true;
}

CoreValues.prototype.setNextValues = function(deltaValue) {
    for (var i = 0; i < this.values.length; i++) {
        this.values[i].setNextValue(deltaValue);
    }
}

module.exports = CoreValues;