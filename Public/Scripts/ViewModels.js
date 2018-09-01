// *********************************************
// *****  View Models classes

Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

function FormatSum(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2 + " ₪";
}

// *********************************************** MortgageTamhilModel class
// This entity represent

function MortgageTamhilVM (_marketStateMgr, _mortgageTamhilModel){
    this.Model = JSON.parse(JSON.stringify(_mortgageTamhilModel)); //Hard copy of model
    this.MarketStateMgr = JSON.parse(JSON.stringify(_marketStateMgr)); //Hard copy of model object
}

MortgageTamhilVM.prototype.RefreshUI = function(){
    console.log('Client DEBUG::MortgageTamhilVM::RefreshUI START');

    //this.generateHeadLineViewsUI();
    //this.generateFinancialInsightsUI();
    this.generateMortgageTamhilUI();

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

MortgageTamhilVM.prototype.generateMortgageTamhilUI = function(){
    
    var parnetDiv = '#MortgageTamhilView';
    var headLine = 'תמהיל משכנתא';
    var addedHeightToDivParnet = 400; //For headline 
    var content = "<h4 dir='RTL' style='margin-right:10px;'>" + headLine + "</h4>"

    //Add table
    content += "<table style='margin-right:10px;'>"
    
    //Add headline
    content += "<tr style='border-bottom: 2px solid black'>";
    content += "<th style='width:110px; text-align:right;' >"  + TEXTS.TAMHIL.LINE + "</th>";
    content += "<th style='width:110px; text-align:center;' >" + TEXTS.TAMHIL.INTERESTS + "</th>";
    content += "<th style='width:110px; text-align:center;' >" + TEXTS.TAMHIL.SUM + "</th>";
    content += "<th style='width:110px; text-align:center;' >" + TEXTS.TAMHIL.YEARS + "</th>";
    content += "<th style='width:110px; text-align:center;' >" + TEXTS.TAMHIL.SUMֹֹ_TO_RETURN + "</th>";
    content += "<th style='width:110px; text-align:center;' >" + TEXTS.TAMHIL.MONTHLY_RETURN + "</th>";
    content += "</tr>";
    
    //Add table line
    var mortgageLaneList = this.Model.MortgageLanesInfo.MortgageLaneList;
    for(i=0 ; i<mortgageLaneList.length ; ++i)
    {
        content += "<tr style='border-top: 1px solid black'>"
        content += "<td style='width: 100px; text-align:right;'>"  + mortgageLaneList[i].MortgageLaneUniqueData.Name + "</td>";
        content += "<td style='width: 60px;  text-align:center;'>" + mortgageLaneList[i].InterestTopLimit + "% - " + mortgageLaneList[i].InterestBottomLimit + "%" + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + FormatSum(mortgageLaneList[i].Sum) + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + mortgageLaneList[i].Duration + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + FormatSum(mortgageLaneList[i].TotalSumToReturn) + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + FormatSum(mortgageLaneList[i].MonthlyPayment) + "</td>";
        content += "</tr>";
    }
    content += "</table>"

    //Add table summary
    content += "<table style='margin-right:10px; border-top: 2px solid black'>"
    content += "<tr>";
    content += "<th style='width:110px; text-align:right;' ></th>";
    content += "<th style='width:110px; text-align:center;' ></th>";
    content += "<th style='width:110px; text-align:center;' >" + FormatSum(mortgageLaneList.sum("Sum")) + "</th>";
    content += "<th style='width:110px; text-align:center;' ></th>";
    content += "<th style='width:110px; text-align:center;' >" + FormatSum( mortgageLaneList.sum("TotalSumToReturn")) + "</th>";
    content += "<th style='width:110px; text-align:center;' >" + FormatSum(mortgageLaneList.sum("MonthlyPayment")) + "</th>";
    content += "</tr>";
    content += "</table>"

    //Add summary
    headLine = 'סיכום תמהיל';
    content += "<h4 dir='RTL' style='text-align:center;'>" + headLine + "</h4>"


    $(parnetDiv).append(content); 
    $(parnetDiv).height($(parnetDiv).height() + addedHeightToDivParnet); 
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

