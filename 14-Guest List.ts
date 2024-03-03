// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list : string[] = ['Asfand','Hamza','Hassan','Ali'];

for ( let i=0; i<guest_list.length; i++ ){

    console.log('Mr.' + guest_list[i] +'\n\nHaving you at our party will be a great honor.\n\nPlease join us!\n\n')
}