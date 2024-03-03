// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Array of magician's names
const Magicians: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

function show_magicians(magicians: string[]): void {
    for (const megician of magicians) { 
        console.log(megician);    }
}

// Function to make magicians great
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

// Show original magicians
console.log("Original Magicians:");
show_magicians(Magicians);

// Make magicians great
make_great(Magicians);

// Show updated magicians
console.log("\nGreat Magicians:");
show_magicians(Magicians);
