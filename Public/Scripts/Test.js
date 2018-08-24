/*******************************************************/
/**** Logic ****/
 
$(document).ready(function()
{ 
    console.log('Client DEBUG:: Page loaded START');

    //Get current market data from server



}); 

 
function StartLogic() 
{ 
    console.log('Client DEBUG:: showSubmit START');

    

    //UI test
    var loanTakersInfo = new LoanTakersInfoModel();
    loanTakersInfo.setDummyValuesDEBUG();           //At this point we assume that we have all of the data.
    
    //Genrate a Tamhil

    //Preset results to user
    var mortgageTamhilVM = new MortgageTamhilVM(loanTakersInfo);
    mortgageTamhilVM.RefreshUI();

}









