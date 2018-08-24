// ******************************************************************************************
// ***** View classes

// *********************************************** MortgageLaneModel class
// This entity represent 
function MortgageLaneModel() { 
    this.Name = "";                       //STRING, name of lane
    this.Sum = 100000;                    //UINT, in NIS, sum of money loaned from the bank in this lane
    this.Duration = 10,                   //UINT, in Years, the duration of the loan in this lane
    this.InterestTopLimit = 4.0;          //FLOOT, in percentage,
    this.InterestBottomLimit = 1.0;       //FLOOT, in percentage
    this.TotalSumToReturn = 150000;       //UINT, in NIS, total sum of money returned the bank in this lane
    this.InitialMonthlyPayment = 4000;    //UINT, in NIS
    this.AverageMonthlyPayment = 4000;    //UINT, in NIS 
    this.WorstCaseMonthlyPayment = 4000;  //UINT, in NIS 
    
    //TODO - lane info, positive, negtive, grade, etc
};
 


// *********************************************** LoanTakersInfoModel class
// This entity represent 
function LoanTakersInfoModel() { 

    this.PersonalInfo  = {
        'FirstName': '',                                       //STRING
        'LastName': '',                                        //STRING
        'EmailAddress': 'example@.me',                         //STRING
        'CurrCity': 'תל אביב',                                //STRING
        'NumOfCurrFamilyMembers': Consts.LOANS.NO_FAMILY,      //INT, 
        'NumOfExpectedFamilyMembers': Consts.LOANS.NO_FAMILY,  //INT,
    };

    this.LoanInfo = {
        'LoanTaker': Enums.LoanTakers.ERR,                     //Enum
        'LoanTaker1Age': Consts.LOANS.LONETAKER_NO_AGE,        //INT, 
        'LoanTaker2Age': Consts.LOANS.LONETAKER_NO_AGE,        //INT, 
        'MonthlyPayment': Consts.MONTHLYPAYMENT.MP_EMPTY,      //INT,
        'MortgageSum': Consts.MORTGAGESUM.MS_EMPTY,            //INT,
        'RealEstatePrice': Consts.REALESTATE.RE_EMPTY,         //INT,
        'RealEstateSqureFoot':Consts.REALESTATE.RE_EMPTY,      //INT,
        'RealEstateRooms':Consts.REALESTATE.RE_EMPTY,          //INT,
        'LoanTaker1Income': Consts.LOANS.LONETAKER_NO_AOUNT,   //INT, in NIS, income netto 
        'LoanTaker2Income': Consts.LOANS.LONETAKER_NO_AOUNT,   //INT, in NIS, income netto 
        'FixedExpenditure': Consts.LOANS.LONETAKER_NO_AOUNT,   //INT, in NIS, Regurly amount of money payed
        'LoanTakerFinancingGroup': Enums.FinancingGroup.ERR,   //Enum
        'CurrRent': Consts.LOANS.LONETAKER_NO_AOUNT,           //INT, in NIS,
        'Capital': Consts.LOANS.LONETAKER_NO_AOUNT,            //INT, in NIS,
        'MonthlySavings': Consts.LOANS.LONETAKER_NO_AOUNT,     //INT, in NIS,
        'OutOfTheBlueIncome': Consts.LOANS.LONETAKER_NO_AOUNT, //INT, in NIS,
    };
}

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
// This entity represent 
function MortgageTamhilModel() {
    this.MortgageLanes = {}; 
    this.FinancialInsights = { 'NegativeList' : [], 'PositiveList' : [], 'AttentionList': [] };

    this.LoanTakersInfo = new LoanTakersInfoModel();
}