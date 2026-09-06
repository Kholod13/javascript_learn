// krestiki noliki

function showSpace(arr){
    console.log('Krestiki Noliki');

    // rules
    console.log('1 2 3\n4 5 6\n7 8 9\n');

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        if ((i+1) % 3 == 0){
            console.log(
                '\n'
            )
        }
    }
}
let arr = ['x', 'o', 'x', 'o','x', 'o', 'x','x', 'o',];
showSpace(arr);