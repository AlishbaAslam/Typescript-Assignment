// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Array of magician's names
const Magicians: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

function show_magicians(magicians: string[]): void {
    for (const megician of magicians) { 
        console.log(megician);    }
}

// call the function to show the magician's names
show_magicians(Magicians);