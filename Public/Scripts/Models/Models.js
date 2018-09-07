// ******************************************************************************************
// ***** View classes

// *********************************************** MortgageLaneUniqueData class
// This entity represent 

/*
 * Ctor
 */
function MortgageLaneUniqueData(_name, _saving, _risk, _flexibility,_negativeList,_positiveList ) { 

    this.Name = _name;                                 //STRING, name of lane
    this.Saving = _saving;                             //INT
    this.Risk = _risk;                                 //INT
    this.Flexibility = _flexibility;                   //INT
    this.Negative = _negativeList;                     //List of string  
    this.Positive = _positiveList;                     //List of string      
}


// *********************************************** MortgageLane class
// This entity represent 

/*
 * Ctor
 */
function MortgageLane(_mortgageLaneUniqueData) { 
    
    this.Sum = 100000;                    //UINT, in NIS, sum of money loaned from the bank in this lane
    this.Duration = 10,                   //UINT, in Years, the duration of the loan in this lane
    this.InterestTopLimit = 4.0;          //FLOOT, in percentage,
    this.InterestBottomLimit = 1.0;       //FLOOT, in percentage
    this.TotalSumToReturn = 150000;       //UINT, in NIS, total sum of money returned the bank in this lane
    this.TotalHzmadaSum = 75000;          //UINT, in NIS, total sum of money returned due to Hzmada
    this.TotalInterestSum = 75000;        //UINT, in NIS, total sum of money returned due to Interest
    this.MonthlyPayment = 4000;           //UINT, in NIS
    this.MaxMonthlyPayment = 4666;        //UINT, in NIS 

    this.MortgageLaneUniqueData = _mortgageLaneUniqueData;     //Obj
};


// *********************************************** MortgageLanesInfoModel class
// This entity represent 

/*
 * Ctor
 */
function MortgageLanesInfoModel(_name) { 
    
    this.MortgageLaneList = [];
    this.IsWithMaslolZamood = false;                //BOOL, is one of the lanes Zamod the consumer price index 
    this.ConsumerPriceIndex = 2;                    //FLOOT, in percentage,
};
 
/*
 * Insert dummy values to MortgageLanesInfoModel object
 */
MortgageLanesInfoModel.prototype.setDummyValuesDEBUG = function(){

    var uniqueData;
    
    uniqueData = new MortgageLaneUniqueData("פריים",3,5,5,[],[]);
    var prime = new MortgageLane(uniqueData);
    this.MortgageLaneList.push(prime);

    uniqueData = new MortgageLaneUniqueData("קבועה צמודה",3,3,1,[],[]);
    var KvoaZmoda = new MortgageLane(uniqueData);
    this.MortgageLaneList.push(KvoaZmoda);
    this.IsWithMaslolZamood = true;

    uniqueData = new MortgageLaneUniqueData("משתנה צמודה כל 5",3,2,3,[],[]);  
    var MistanaKol5LoZmoda = new MortgageLane(uniqueData);
    this.MortgageLaneList.push(MistanaKol5LoZmoda);
}


// *********************************************** LoanTakersInfoModel class
// This entity represent 

/*
 * Ctor
 */
function LoanTakersInfoModel() { 

    this.PersonalInfo  = {
        'FirstName': '',                                       //STRING
        'LastName': '',                                        //STRING
        'EmailAddress': 'example@.me',                         //STRING
        'CurrCity': 'תל אביב',                                //STRING
        'NumOfCurrFamilyMembers': CONSTS.LOANS.NO_FAMILY,      //INT, 
        'NumOfExpectedFamilyMembers': CONSTS.LOANS.NO_FAMILY,  //INT,
    };

    this.LoanInfo = {
        'LoanTaker': Enums.LoanTakers.ERR,                     //Enum
        'LoanTaker1Age': CONSTS.LOANS.LONETAKER_NO_AGE,        //INT, 
        'LoanTaker2Age': CONSTS.LOANS.LONETAKER_NO_AGE,        //INT, 
        'MonthlyPayment': CONSTS.MONTHLYPAYMENT.MP_EMPTY,      //INT,
        'MortgageSum': CONSTS.MORTGAGESUM.MS_EMPTY,            //INT,
        'RealEstatePrice': CONSTS.REALESTATE.RE_EMPTY,         //INT,
        'RealEstateSqureFoot':CONSTS.REALESTATE.RE_EMPTY,      //INT,
        'RealEstateRooms':CONSTS.REALESTATE.RE_EMPTY,          //INT,
        'LoanTaker1Income': CONSTS.LOANS.LONETAKER_NO_AOUNT,   //INT, in NIS, income netto 
        'LoanTaker2Income': CONSTS.LOANS.LONETAKER_NO_AOUNT,   //INT, in NIS, income netto 
        'FixedExpenditure': CONSTS.LOANS.LONETAKER_NO_AOUNT,   //INT, in NIS, Regurly amount of money payed
        'LoanTakerFinancingGroup': Enums.FinancingGroup.ERR,   //Enum
        'CurrRent': CONSTS.LOANS.LONETAKER_NO_AOUNT,           //INT, in NIS,
        'Capital': CONSTS.LOANS.LONETAKER_NO_AOUNT,            //INT, in NIS,
        'MonthlySavings': CONSTS.LOANS.LONETAKER_NO_AOUNT,     //INT, in NIS,
        'OutOfTheBlueIncome': CONSTS.LOANS.LONETAKER_NO_AOUNT, //INT, in NIS,
    };
}

/*
 * Insert dummy values to LoanTakersInfoModel object
 */
LoanTakersInfoModel.prototype.setDummyValuesDEBUG = function(){
    this.PersonalInfo.FirstName = "ישראל";
    this.PersonalInfo.LastName = "ישראלי";

    this.LoanInfo.LoanTaker = Enums.LoanTakers.COUPLE;
    this.LoanInfo.LoanTaker1Age = 32;
    this.LoanInfo.LoanTaker2Age = 30;
    this.LoanInfo.MonthlyPayment = 5000;
    this.LoanInfo.MortgageSum = 1000000;
    this.LoanInfo.RealEstatePrice = 1600000;
    this.LoanInfo.RealEstateSqureFoot = 100;
    this.LoanInfo.RealEstateRooms = 4;
    this.LoanInfo.LoanTaker1Income = 14500;
    this.LoanInfo.LoanTaker2Income = 6000;
    this.LoanInfo.FixedExpenditure = 2000;
    this.LoanInfo.LoanTakerFinancingGroup = Enums.FinancingGroup.NO_HOUSING;
    this.LoanInfo.Capital = 4000;
    this.LoanInfo.MonthlySavings = 3000;
};


// *********************************************** MortgageTamhilModel class
// This entity represent all the data & Meta data about the loan

/*
 * Ctor
 */
function MortgageTamhilModel() {
    this.FinancialInsights = { 'NegativeList' : [], 'PositiveList' : [], 'AttentionList': [] };

    this.LoanTakersInfo = new LoanTakersInfoModel();
    this.MortgageLanesInfo = new MortgageLanesInfoModel(); 
}

/*
 * Insert dummy values to MortgageTamhilModel object
 */
MortgageTamhilModel.prototype.setDummyValuesDEBUG = function(){

    var personalNote = "בלה בלה בלה";
    this.FinancialInsights.NegativeList.push(FINANCIAL_INSIGHTS.NEGATIVE.LOW_MONTHLY_RETURN + "; " + personalNote);
    this.FinancialInsights.NegativeList.push(FINANCIAL_INSIGHTS.NEGATIVE.HIGH_MONTHLY_RETURN);   
    this.FinancialInsights.NegativeList.push(FINANCIAL_INSIGHTS.NEGATIVE.LOW_SAVINGS_PERCENTAGE);

    this.FinancialInsights.PositiveList.push(FINANCIAL_INSIGHTS.POSITIVE.HIGH_SAVINGS_PERCENTAGE);
    this.FinancialInsights.PositiveList.push(FINANCIAL_INSIGHTS.POSITIVE.HIGH_SAVINGS_DURINGֹֹֹ_MORTGAGE);   
    this.FinancialInsights.PositiveList.push(FINANCIAL_INSIGHTS.POSITIVE.RAINY_DAY_FUNDC);

    this.FinancialInsights.AttentionList.push(FINANCIAL_INSIGHTS.ATTENTION.FINANCE_STEP_CLOSENESS);

    this.LoanTakersInfo.setDummyValuesDEBUG();
    this.MortgageLanesInfo.setDummyValuesDEBUG();
};

