//Q15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


//Q16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest_list : string[] = ['Asfand','Hamza','Hassan','Ali'];

// for ( let i=0; i<guest_list.length; i++ ){

//     console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
// }

let absent_Guest : string = 'Asfand';

let new_Guest : string = 'Babar';

guest_list[0]= new_Guest ;

for ( let i=0; i<guest_list.length; i++ ){

    console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News!we find big table so we are inviting 3 more guests.');

guest_list.unshift('Haider');

guest_list.splice(2,0,'Faris');

guest_list.push('Fahad');

for ( let i=0; i<guest_list.length; i++ ){

    console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
}


