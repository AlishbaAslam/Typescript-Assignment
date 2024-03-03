//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages_List : string[] =['Urdu','English','Arabic','Chinese','Hindi']; 

console.log('Languages\n');

for ( let i=0; i<languages_List.length; i++ ){

    console.log(languages_List[i]);

}