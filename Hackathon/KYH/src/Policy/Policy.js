var Variance = require('./Variance');

function Policy() {
    this.policies = {
        'Variance' : new Variance(),
    };
}

Policy.prototype.getPolicy = function(name) {
    return this.policies[name];
}

module.exports = Policy;