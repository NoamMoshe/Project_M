/* Class MortgageTamhilVM
 * 
 */


/*************************************/
/*** Public ***/

/*
 * Ctor
 */
function MortgageTamhilVM (_marketStateMgr, _mortgageTamhilModel){
    this.Model = JSON.parse(JSON.stringify(_mortgageTamhilModel)); //Hard copy of model
    this.MarketStateMgr = JSON.parse(JSON.stringify(_marketStateMgr)); //Hard copy of model object
}

/*
 * Load/Refresh the calculated Tamil results
 */
MortgageTamhilVM.prototype.RefreshUI = function(){
    console.log('Client DEBUG::MortgageTamhilVM::RefreshUI START');

    this.generateHeadLineViewsUI();
    this.generateFinancialInsightsUI();
    this.generateMortgageTamhilUI();

    var content = "<p dir='RTL'>" + TEXTS.TAMHIL.DISCLAIMER + "</p>";
    var parnetDiv = '#DisclaimerView';
    $(parnetDiv).append(content); 
    $(parnetDiv).height(70); 
    

    console.log('Client DEBUG::MortgageTamhilVM::    RefreshUI mortgage lanes'); 
};


/*************************************/
/*** Private ***/

MortgageTamhilVM.prototype.generateHeadLineViewsUI = function(){
    
    var parnetDiv = '#HeadLineView';
    var headLine = TEXTS.TAMHIL.TAMHIL_ANALYSIS_HAEDLINE;
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
    var headLine = TEXTS.TAMHIL.TAMHIL_HAEDLINE;
    var addedHeightToDivParnet = 400; //For headline 
    var content = "<h4 dir='RTL' style='margin-right:10px;'>" + headLine + "</h4>"

     //Add Tamhil table   
    content += this.generateTamhilTableStr();

    //Add Tamhil summary
    headLine = TEXTS.TAMHIL.TAMHIL_SUMMARY_HAEDLINE;
    content += "<h4 dir='RTL' style='margin-right:50px;'>" + headLine + "</h4>"
    content += "<ul>"
    content += "<li class='General'>" + this.generateTamhilSummary1() + "</li>";
    content += "<li class='General'>" + this.generateTamhilSummary2() + "</li>";   
    content += "</ul>"

    //Add Tamhil assumptions
    headLine = TEXTS.TAMHIL.TAMHIL_ASSUMPTIONS_HAEDLINE;
    content += "<h4 dir='RTL' style='margin-right:50px;'>" + headLine + "</h4>"
    content += "<ul>"
    content += "<li class='General'>" + 'TODO 3' + "</li>";
    content += "<li class='General'>" + 'TODO 4' + "</li>";
    content += "</ul>"

    $(parnetDiv).append(content); 
    $(parnetDiv).height($(parnetDiv).height() + addedHeightToDivParnet); 
};

MortgageTamhilVM.prototype.generateDynamicList = function(_headLine, _list, _parentDiv, _bulletStyle){

    if(_list.length > 0)
    {
        //Add table headline
        var addedHeightToDivParnet = 40; //For headline 
        var content = "<h4 dir='RTL' style='margin-right:10px;'>" + _headLine + "</h4><ul>"
         
        for(var i=0, MAX = _list.length ; i < MAX ; ++i)
        {
            content += "<li class='" + _bulletStyle + "'>" + _list[i] + "</li>";
            addedHeightToDivParnet += 20;
        }
        content += "</ul>";

        $(_parentDiv).append(content); 
        $(_parentDiv).height($(_parentDiv).height() + addedHeightToDivParnet); 
    }
};

/*
 * Added support to Array. Sum up and return a property of an object held in an array.
 * 
 * Example:
 *   formatValueToNis(1300000) -> return "₪ 1,300,000"
 * 
 * Retrun value: 
 *   A formatted string of the input integer
 */
MortgageTamhilVM.prototype.formatValueToNis = function (_nStr) {
    _nStr += '';
    var x = _nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) 
        x1 = x1.replace(rgx, '$1' + ',' + '$2');

    return x1 + x2 + " ₪";
}

MortgageTamhilVM.prototype.generateTamhilTableStr = function(){
    //Add table
    var content = "<table style='margin-right:50px;'>";
        
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
        content += "<tr style='border-top: 1px solid black'>";
        content += "<td style='width: 100px; text-align:right;'>"  + mortgageLaneList[i].MortgageLaneUniqueData.Name + "</td>";
        content += "<td style='width: 60px;  text-align:center;'>" + mortgageLaneList[i].InterestTopLimit + "% - " + mortgageLaneList[i].InterestBottomLimit + "%" + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + this.formatValueToNis(mortgageLaneList[i].Sum) + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + mortgageLaneList[i].Duration + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + this.formatValueToNis(mortgageLaneList[i].TotalSumToReturn) + "</td>";
        content += "<td style='width: 80px;  text-align:center;'>" + this.formatValueToNis(mortgageLaneList[i].MonthlyPayment) + "</td>";
        content += "</tr>";
    }
    content += "</table>";

    //Add table summary
    content += "<table style='margin-right:50px; border-top: 2px solid black'>";
    content += "<tr>";
    content += "<th style='width:110px; text-align:right;' ></th>";
    content += "<th style='width:110px; text-align:center;' ></th>";
    content += "<th style='width:110px; text-align:center;' >" + this.formatValueToNis(mortgageLaneList.SumPropertyByName("Sum")) + "</th>";
    content += "<th style='width:110px; text-align:center;' ></th>";
    content += "<th style='width:110px; text-align:center;' >" + this.formatValueToNis( mortgageLaneList.SumPropertyByName("TotalSumToReturn")) + "</th>";
    content += "<th style='width:110px; text-align:center;' >" + this.formatValueToNis(mortgageLaneList.SumPropertyByName("MonthlyPayment")) + "</th>";
    content += "</tr>";
    content += "</table>";

    return content;
};

MortgageTamhilVM.prototype.generateTamhilSummary1 = function()
{
    var s1 = ' על ';
    var s2 = ' עם החזר חודשי של ';   
    var s3 = ' תחזירו ';   

    var mortgageLaneList = this.Model.MortgageLanesInfo.MortgageLaneList;
    return s1 + this.formatValueToNis(mortgageLaneList.SumPropertyByName("Sum")) + 
           s2 + this.formatValueToNis(mortgageLaneList.SumPropertyByName("MonthlyPayment")) + 
           s3 + this.formatValueToNis(mortgageLaneList.SumPropertyByName("TotalSumToReturn"));
}

MortgageTamhilVM.prototype.generateTamhilSummary2 = function()
{
    var s1 = ' מתוך ה ';
    var s2 = ' שתחזירו לבנק ';    
    var s3 = ' הם עבור הריבית ';  
    var s4 = ' הם עבור ההצמדה ';  
    
    var mortgageLaneList = this.Model.MortgageLanesInfo.MortgageLaneList;
    var onlysum = this.formatValueToNis( parseInt(mortgageLaneList.SumPropertyByName("TotalSumToReturn")) - parseInt(mortgageLaneList.SumPropertyByName("Sum")));
   
    return s1 + onlysum + 
           s2 + this.formatValueToNis(mortgageLaneList.SumPropertyByName("TotalInterestSum")) +
           s3 + this.formatValueToNis(mortgageLaneList.SumPropertyByName("TotalHzmadaSum")) +
           s4;
}




