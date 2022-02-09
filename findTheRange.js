// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let smaller = 0
let larger = 0

for (let i = 0; i < array.length; i++) {
    if (smaller > array[i]) {
        smaller = array[i];
    }
    else if (larger < array[i]) {
        larger = array[i];
    }
}

console.log(smaller, larger)