/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.  */

function titleCase(stringText){
    return stringText.toLowerCase().split(" ").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' '); 
}

console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot

String.prototype.capitaliseFirstLetter = function(stringText){
    return stringText.split(" ").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(' '); 
}

/* capitaliseFirstLetter("HERE IS MY HANDLE HERE IS MY SPOUT") */

"HERE IS MY HANDLE HERE IS MY SPOUT".capitaliseFirstLetter("HERE IS MY HANDLE HERE IS MY SPOUT")

