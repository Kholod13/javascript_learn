//bubble sort | 1
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let stopper = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j + 1]];
                stopper = true;
            }
        }
        if (!stopper) {
            break;
        }
    }
    return arr;
}

// let arr = [10, 8, 9, 4,6, 10];
// console.log(arr, 'before');
// console.log(bubbleSort(arr), 'after');

//selection sort

function selectionSort(arr) {
    //for is working in entire length array / without last elem
    for (let i = 0; i < arr.length - 1; i++) {
        //create min index which one equal (i) - it's first element of second half array
        let minIdx = i;
        //for start working from first element +1 of second half array
        for (let j = i + 1; j < arr.length; j++) {
            //if fixed element is smaller then last element in second half so min index equal new value (j) - its index of element which one is smaller
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        //swap elements in array (process of sorting) so add new elem in first half of array
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // swap
    }
    //return fuction value
    return arr;
}

// let arr = [10, 8, 9, 4,6, 10];
// console.log(arr, 'before');
// console.log(selectionSort(arr), 'after');

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        //current element which we will move
        let current = arr[i];
        //left element of current
        let j = i - 1;
        //working when left element bigger than current and array not finished
        while (j >= 0 && arr[j] > current) {
            //looking for a slot for current element
            arr[j + 1] = arr[j];
            j--;
        }
        //put current element in right position
        arr[j+1] = current;
    }
    return arr;
}

let arr = [10, 8, 9, 4,6, 10];
console.log(arr, 'before');
console.log(insertionSort(arr), 'after');