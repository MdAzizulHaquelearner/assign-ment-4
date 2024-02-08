function deleteInvalids(arrays){
if(!Array.isArray(arrays)){
    return 'Your input is Invalid Array'
}
const invalids = [];
for(const array of arrays){
if(typeof(array) === 'number' && !isNaN(array)){       
invalids.push(array) 
}
}
return invalids;
} 

