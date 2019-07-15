var CoreValues = require('./CoreValue/CoreValues');

var core_values = new CoreValues();
var numbers = [1,2,3,4,5,6];

if (core_values.filtering(numbers) == true) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}