const {selectionSort, isSorted,InsertionSort, ShellSort} = require("./../utilities/sort");

module.exports = (array) => {
    ShellSort(array, true);
    console.log(array);
    console.log(isSorted(array, true));
};