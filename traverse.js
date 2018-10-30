function traverse(array, number) {
    if (array.length == 0) {
        return [];
    }
    else {

        for (let i = 0; i < array.length; i++) {
            if (array.includes(number)) {
                number = 2 * number;
            }
        }
        return number;
    }

}

console.log(traverse([], 2)); 