//Q16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


//Q17-Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



let guest_list : string[] = ['Asfand','Hamza','Hassan','Ali'];

// for ( let i=0; i<guest_list.length; i++ ){

//     console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
// }

let absent_Guest : string = 'Asfand';

let new_Guest : string = 'Babar';

guest_list[0]= new_Guest ;

// for ( let i=0; i<guest_list.length; i++ ){

//     console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News!we find big table so we are inviting 3 more guests.');

guest_list.unshift('Haider');

guest_list.splice(2,0,'Faris');

guest_list.push('Fahad');

//Total 6 guests.

for ( let i=0; i<guest_list.length; i++ ){

    console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
}

//Sorry message for guests.

console.log('\nSorry we can not arrange big table,Only two peoples will be invited.');

//Only two guests are left.

while( guest_list.length>2 ){

    let remove_Guest = guest_list.pop();

    console.log( `Sorry Mr. ${remove_Guest}, You are not invited for dinner.`);

}

//Invitation message for two left guests.


for ( let i=0; i<guest_list.length; i++ ){

    console.log('Mr.' + guest_list[i] +'\n\nYou are still invited.\n\nPlease join us!\n\n')
}

//Now, no one has invited here.

guest_list.splice( 0, 2 );

console.log(guest_list);



