function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return 'Invalid Number'
    }
    const perTicket = 120;
    const totalTicketPrice = ticketSale * perTicket;
    const janitorCost = 500;
    const perLaunchCost = 50;
    const staph = 8;
    const totalStaphCost = perLaunchCost * staph;
    const totalCost = janitorCost + totalStaphCost;
    const totalEarn = totalTicketPrice - totalCost;
    return totalEarn;
}


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


function monthlySavings(earnMoney,liveCost){
            if(!Array.isArray(earnMoney) || typeof liveCost !== "number"){
                   return 'invalid'
               }
            let totalEarn = 0;
            for(const earning of earnMoney){
               totalEarn += earning;
            }
           
            let upto3000 =[];
           for(const earning of earnMoney){
               if(earning >= 3000){
              upto3000.push(earning);
               }
           }
             let totalTaxMoney = 0;
           for(const taxMoney of upto3000){
               totalTaxMoney += taxMoney;
           }
            const tax = totalTaxMoney * 20 / 100;
            const totalCost = tax + liveCost;
           
            const monthlySave = totalEarn - totalCost;
            if(monthlySave < 0){
               return "earn more"
            }else{
               return monthlySave;
            }
           
           }

