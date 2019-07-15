var math = require('../Math');
var Policy = require('../Policy/Policy');

function Variance() {
    var policy = new Policy();
    this.range_start = math.getVariance([1,1,1,45,45,45]);
    this.range_end = this.range_start + policy.getPolicy('Variance').range_size;
    /* Policy 객체는 모든 Core Value에 대한 각각의 Policy를 관리한다.
       즉, 각각의 Core Value에 대해서 개별적인 Policy 객체가 존재해야 한다.
       그들은 Policy 객체의 getPolicy(Core Value 이름)에 의해 가져올 수 있다 */
    delete policy;
}

Variance.prototype.setNextValue = function(deltaValue) {
    var policy = new Policy();
    var vPolicy = policy.getPolicy('Variance');

    var next = vPolicy.getNextValue(deltaValue, this.range_start, this.range_end);
    this.range_start = next.range_start;
    this.range_end = next.range_end;
}

Variance.prototype.check = function(numbers) {
    numbers_variance = math.getVariance(numbers);
    if (numbers_variance < this.range_end
        && numbers_variance >= this.range_start) {
        return true;
    }
    return false;
}

module.exports = Variance;