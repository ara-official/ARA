var getAverage = function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

var getVariance = function (numbers) {
    var sum = 0;
    var average = getAverage(numbers)
    
    for (var i = 0; i < numbers.length; i++) {
        sum += (numbers[i] - average) * (numbers[i] - average);
    }
    return sum / numbers.length
}

exports.getAverage = getAverage;
exports.getVariance = getVariance;