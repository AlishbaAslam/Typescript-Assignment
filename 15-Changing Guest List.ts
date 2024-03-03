//Q14-Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


//Q15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guest_list : string[] = ['Asfand','Hamza','Hassan','Ali'];

for ( let i=0; i<guest_list.length; i++ ){

    console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
}

let absent_Guest : string = 'Asfand';

let new_Guest : string = 'Babar';

guest_list[0]= new_Guest ;

for ( let i=0; i<guest_list.length; i++ ){

    console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);