// *********************************************
// *****  View Models classes

// *********************************************** MortgageTamhilModel class
// This entity represent

function MortgageTamhilVM (_marketStateMgr, _mortgageTamhilModel){
    this.Model = JSON.parse(JSON.stringify(_mortgageTamhilModel)); //Hard copy of model
    this.MarketStateMgr = JSON.parse(JSON.stringify(_marketStateMgr)); //Hard copy of model object
}

MortgageTamhilVM.prototype.RefreshUI = function(){
    console.log('Client DEBUG::MortgageTamhilVM::RefreshUI START');

    this.generateHeadLineViewsUI();
    this.generateFinancialInsightsUI();

    console.log('Client DEBUG::MortgageTamhilVM::    RefreshUI mortgage lanes'); 
};

MortgageTamhilVM.prototype.generateHeadLineViewsUI = function(){
    
    var parnetDiv = '#HeadLineView';
    var headLine = 'ניתוח משכנתא';
    var DELIMITER = '  -  ';   
    var addedHeightToDivParnet = 45; //For headline
    var info = this.Model.LoanTakersInfo.PersonalInfo;

    var content = "<h2 dir='RTL' style='margin-right:10px; text-align:center;'>" + headLine + "</h2>";

    var text = 'שם לקוח';
    content += "<p dir='RTL' style='margin-right:10px;'>" + text + DELIMITER + info.FirstName + " " + info.LastName + "</p>"; 
    addedHeightToDivParnet += 20;


    $(parnetDiv).append(content); 
    $(parnetDiv).height($(parnetDiv).height() + addedHeightToDivParnet); 
};

MortgageTamhilVM.prototype.generateFinancialInsightsUI = function(){
    
    var parnetDiv = '#FinancialInsightsView';

    //Add insights
    this.generateDynamicList(FINANCIAL_INSIGHTS.HEADLINES.POSITIVE, this.Model.FinancialInsights.PositiveList, parnetDiv, "Positive");
    this.generateDynamicList(FINANCIAL_INSIGHTS.HEADLINES.NEGATIVE, this.Model.FinancialInsights.NegativeList, parnetDiv, "Negative");
    this.generateDynamicList(FINANCIAL_INSIGHTS.HEADLINES.ATTENTION, this.Model.FinancialInsights.AttentionList, parnetDiv, "Attention");
};

MortgageTamhilVM.prototype.generateDynamicList = function(_headLine, _list, _parentDiv, _bulletStyle){

    if(_list.length > 0)
    {
        //Add table headline
        var addedHeightToDivParnet = 40; //For headline 
        var content = "<h4 dir='RTL' style='margin-right:10px;'>" + _headLine + "</h4><ul>"
         
        for(i=0 ; i < _list.length ; ++i)
        {
            content += "<li class='" + _bulletStyle + "'>" + _list[i] + "</li>";
            addedHeightToDivParnet += 20;
        }
        content += "</ul>";

        $(_parentDiv).append(content); 
        $(_parentDiv).height($(_parentDiv).height() + addedHeightToDivParnet); 
    }
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

