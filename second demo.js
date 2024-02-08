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
   
   const earnMoney = [1000 , 2000 , 3000] ;
   const liveCost = 5400;
   const Savings = monthlySavings(earnMoney,liveCost);
   console.log(Savings);
   