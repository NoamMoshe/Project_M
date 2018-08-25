/*******************************************************/
/**** Logic ****/
 
var marketStateManager;


$(document).ready(function()
{ 
    console.log('Client DEBUG:: Page loaded START');

    //TODO - Get current market data from server and analyze it
    marketStateManager = new MarketStateManager();
    marketStateManager.Analyze();

}); 

 
function StartLogic() 
{ 
    console.log('Client DEBUG:: StartLogic FIRED');

    //UI test
    var mortgageTamhilVM = new MortgageTamhilVM(marketStateManager);
    mortgageTamhilVM.setDummyValuesDEBUG();
    
    //Genrate a Tamhil

    //Preset results to user
    mortgageTamhilVM.RefreshUI();
}









