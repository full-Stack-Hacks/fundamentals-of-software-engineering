function rotationalCipher(input, rotationFactor) {
    // Define the ASCII codes for 'a', 'z', 'A', 'Z', '0', and '9'
    const aCharCode = 'a'.charCodeAt(0);
    const zCharCode = 'z'.charCodeAt(0);
    const ACharCode = 'A'.charCodeAt(0);
    const ZCharCode = 'Z'.charCodeAt(0);
    const zeroCharCode = '0'.charCodeAt(0);
    const nineCharCode = '9'.charCodeAt(0);

    // Initialize an empty string 'result' to store the result
    let result = '';

    // Iterate over each character in the input string
    for (let i = 0; i < input.length; i++) {
        // Get the ASCII code of the current character
        let charCode = input.charCodeAt(i);

        // If the character is a lowercase letter
        if (charCode >= aCharCode && charCode <= zCharCode) {
            // Calculate the new character code by adding the rotation factor and wrapping around within the range of lowercase letters
            charCode = ((charCode - aCharCode + rotationFactor) % 26) + aCharCode;
        } 
        // If the character is an uppercase letter
        else if (charCode >= ACharCode && charCode <= ZCharCode) {
            // Calculate the new character code by adding the rotation factor and wrapping around within the range of uppercase letters
            charCode = ((charCode - ACharCode + rotationFactor) % 26) + ACharCode;
        } 
        // If the character is a digit
        else if (charCode >= zeroCharCode && charCode <= nineCharCode) {
            // Calculate the new character code by adding the rotation factor and wrapping around within the range of digits
            charCode = ((charCode - zeroCharCode + rotationFactor) % 10) + zeroCharCode;
        }

        // Convert the new character code back to a string and append it to the result
        result += String.fromCharCode(charCode);
    }

    // Return the result
    return result;
}

console.log(rotationalCipher("Zebra-493?", 3)); // Output: "Cheud-726?"