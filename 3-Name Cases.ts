// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = ` `;
personName = prompt(`What's your name?`) || ``;
let lowercase : string = personName.toLowerCase();
let uppercase : string = personName.toUpperCase();
let titlecase : string = personName.split(` `).map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(``);

if(personName !== null && personName !== ``){
    alert(`Hello ${personName},Here are  your name in:
    lowercase:${lowercase}
    uppercase:${uppercase}
    titlecase:${titlecase}`)
}
else{
    alert(`Please fill your form!`)
}