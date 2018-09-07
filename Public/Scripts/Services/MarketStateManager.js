/* Class MarketStateManager
 * This class hold all the information regarding the current state of the market
 */

 
/*************************************/
/*** Public ***/

/*
 * Ctor
 */
function MarketStateManager (){
    this.CurrPrimeRate = 1.5 + 0.1;    
    this.ExpectedPrimeRateIn1Year = 1.5 + 0.25;
    this.ExpectedPrimeRateIn5Year = 1.5 + 2.25;
}

MarketStateManager.prototype.Analyze = function(){
    console.log('Client DEBUG::MarketStateManager::Analyze Analyzing market');

    //Analyze prime rates
    console.log('Client DEBUG::MarketStateManager::Analyze     Analyze prime rates');
};


/*************************************/
/*** Private ***/

