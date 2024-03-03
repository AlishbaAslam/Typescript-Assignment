// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//Program written by:Alishba 
//Date: 18-2-2024

const personName : string =`    \n\tImran Khan\t\n  `;
console.log(personName);
const without_whitespace : string = personName.trim();
console.log(without_whitespace);

//fFirstly, I included some whitespace characters at the beginning and end of the name.
//Secondly, I wrote  name without whitspace. 