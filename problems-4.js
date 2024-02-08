function password(obj){
    if(!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')){
        return 'invalid'
    }
    let name = obj.name;
    let birth = obj.birthYear;
    let site = obj.siteName;
    let siteName = site.charAt(0).toUpperCase() + site.slice(1);
   if(isNaN(birth) || birth.toString().length !== 4){
    return 'invalid'
   }
    let allConcat = siteName.concat('#',name,'@',birth);
    return allConcat;

}

