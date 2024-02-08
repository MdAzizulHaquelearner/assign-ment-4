
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
 