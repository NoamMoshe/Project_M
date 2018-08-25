// *********************************************
// *****  View Models classes

// *********************************************** MortgageTamhilModel class
// This entity represent

function MortgageTamhilVM (_marketStateMgr, _mortgageTamhilModel){
    this.Model = JSON.parse(JSON.stringify(_marketStateMgr)); //Hard copy of model
    this.MarketStateMgr = JSON.parse(JSON.stringify(_marketStateMgr)); //Hard copy of model object
}

MortgageTamhilVM.prototype.RefreshUI = function(){
    console.log('Client DEBUG::MortgageTamhilVM::RefreshUI START');
};


// *********************************************** MarketStateManager class
// This entity represent

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

