// Unchanged magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

/// Array of magician's names
const magicians: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

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
console.log("Original magicians:");
show_magicians(magicians);

// Make magicians great
make_great(magicians);

// Show updated magicians
console.log("\nGreat magicians:");
show_magicians(magicians);


function make_great2(magicians: string[]): string[] {
    const greatmagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatmagicians.push( ' the Great '   +  magicians[i]);
    }
    return greatmagicians;
  }
  
  const magicians3: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

  const greatmagicians2: string[] = make_great2(magicians3);

  console.log("\nunchanged");
  show_magicians(magicians3);
  
  console.log("\nmodified");
  show_magicians(greatmagicians2);
