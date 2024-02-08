
function checkName(name){ 
if( typeof(name) === 'string'){
const lowerCase = name.toLowerCase();
if(lowerCase.charAt(lowerCase.length - 1) === 'a' || lowerCase.charAt(lowerCase.length - 1) === 'y' || lowerCase.charAt(lowerCase.length - 1) === 'i' || lowerCase.charAt(lowerCase.length - 1) === 'e' || lowerCase.charAt(lowerCase.length - 1) === 'o'|| lowerCase.charAt(lowerCase.length - 1) === 'u' || lowerCase.charAt(lowerCase.length - 1) === 'w'  ){
return "Good Name"
}
else { return "Bad Name"}
}
else{
return "invalid" 
}

}


