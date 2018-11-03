/**
 * Complete the function below.
 * DONOT MODIFY anything outside this function!
 */
function calculateRemainders(proportions, availableGrams) {

    // if one portion not available return availableGrams
    if (proportions.length>availableGrams.length || (Math.min(...availableGrams) < 0)) {
        return availableGrams;
    }
    
    //smallest edge should be less or equal max value of availableGrams
    let smallest = Math.max(...availableGrams);

    // compute smallest edge
    availableGrams.map((available, i) => {
        if (proportions[i]) {
            let itemCount = Math.floor(available / proportions[i]);
            smallest = itemCount < smallest ? itemCount : smallest;
        }
    });

    // compute remaining grams
    let results = availableGrams.map((gram, i) => {
        return proportions[i] ?
            gram - (proportions[i] * smallest)
            : gram;
    });
    
    return results;
}

module.exports = calculateRemainders;
/////////////// Do not modify anything below this line ////////////////////

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// let raw_input = '';

// process.stdin.on('data', function (data) {
//     raw_input += data;
// });

// process.stdin.on('end', () => {
//     return process.stdout.write(
//         calculateRemainders.apply(null, preparedData()).toString()
//     );

// });


// function preparedData() {
//     const
//         input = raw_input.split('\n'),
//         proportions = input[0].split(' ').map((i) => parseInt(i, 10)),
//         availableGrams = input[1].split(' ').map((i) => parseInt(i, 10));

//     return [proportions, availableGrams];
// }


