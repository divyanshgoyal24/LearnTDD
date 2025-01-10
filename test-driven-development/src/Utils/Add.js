function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let numArray = [];

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiter = numbers[2];
        numbers = numbers.slice(4);
        numArray = numbers.split(delimiter).map(Number);
    } else {
        // Handle default case with commas and newlines
        numArray = numbers.replace(/\n/g, ',').split(',').map(Number);
    }

    // Check for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(', '));
    }

    return numArray.reduce((acc, curr) => acc + curr, 0);
}

export default add;
