// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// /////////////// ignore above this line ////////////////////

// function main() {
//     var t = parseInt(readLine());
//     var inversions = 0;
//     for(var a0 = 0; a0 < t; a0++){
//         var n = parseInt(readLine());
//         arr = readLine().split(' ');
//         arr = arr.map(Number);
        
//         mergeSort(arr, [], 0, t - 1);
//     }
    
//     function mergeSort(arr, temp, leftStart, rightEnd) {
//         if (leftStart >= rightEnd) return; 
//         var half = Math.floor((leftStart + rightEnd) / 2); 
//         mergeSort(arr, temp, leftStart, half); 
//         mergeSort(arr, temp, half + 1, rightEnd);
//         mergeHalves(arr, temp, leftStart, rightEnd);
//     }
    
//     function mergeHalves(arr, temp, leftStart, rightEnd) {
//         var size = rightEnd - leftStart + 1; 
//         var right = Math.ceil((leftStart + rightEnd) / 2); 
//         var leftEnd = right - 1;
//         var left = leftStart; 
//         var idx = leftStart;
        
//         while (left <= leftEnd && right <= rightEnd) {
//             console.log('iterating!')
//             if (arr[left] <= arr[right]) {
//                 temp[idx] = arr[left];
//                 left += 1;
//             } else {
//                 temp[idx] = arr[right];
//                 right += 1; 
//                 inversions += 1;
//             }
//             idx += 1;
//         }
//         console.log('temp', temp)
//         //dunno if this will work
//         temp[idx] = arr[idx]; 
//         console.log("temp2", temp)
//         var result = arr.slice(0, leftStart).concat(temp.slice(leftStart, rightEnd)).concat(arr.slice(rightEnd));
//         console.log('arr', arr)
//         arr = result;
//         console.log('result', result, 'arr', arr);
//         //return result;

//     }

// }
    
var mergeSort = function(arr) {
    if (arr.length >= 2) {
        var half = Math.floor(arr.length / 2);
        var left = arr.slice(0, half);
        var right = arr.slice(half);
        return mergeHalves(mergeSort(left), mergeSort(right));
    } else return arr;
}

var mergeHalves = function(left, right) {
    var result = [];
    var l = 0;
    var r = 0;
    
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l += 1;
        } else {
            result.push(right[r]);
            r += 1;
        }
    }
    
    return result.concat(left.slice(l)).concat(right.slice(r));
}

