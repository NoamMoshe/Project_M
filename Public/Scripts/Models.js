// *********************************************
// *****  Enums & Consts we use in our frontend

var Enums = {
    'LoanTakers' : {
        'ERR': 0,        
        'SOLE': 1,      
        'COUPLE': 2,       
    },
    'FinancingGroup' : {
        'ERR': 0,        
        'NO_HOUSING': 1,      
        'IMPROVER': 2,
        'INVESTOR': 3,         
    },
}

const Consts = Object.freeze( {
    'LOANS' : {
         'LONETAKER_NO_AOUNT' : 0,
         'NO_FANILY' : 0,
         'LONETAKER_NO_AGE' : -1,
         'LONETAKER_AGE_MIN' : 18, 
         'LONETAKER_AGE_MAX' : 80,     
         'LONETAKER_INCOME_MIN' : 0, 
         'LONETAKER_INCOME_MAX' : 100000, 
         'LONETAKER_RENT_MIN' : 0, 
         'LONETAKER_RENT_MAX' : 20000,   
         'LONETAKER_CAPITAL_MIN' : 0, 
         'LONETAKER_CAPITAL_MAX' : 2000000,   
         'LONETAKER_MSAVINGS_MIN' : 0, 
         'LONETAKER_MSAVINGS_MAX' : 100000,   
    },
    'MONTHLYPAYMENT' : { 
        'MP_EMPTY' : -1,
        'MP_MIN' : 500, 
        'MP_MAX' : 80000,      
   },
   'MORTGAGESUM': { 
    'MS_EMPTY' : -1,
    'MS_MIN' : 300000, 
    'MS_MAX' : 30000000,      
    },
   'REALESTATE' : { 
    'RE_EMPTY' : -1,
    'RE_PRICE_MIN' : 100000, 
    'RE_PRICE_MAX' : 15000000, 
    'RE_SFOOT_MIN' : 10, 
    'RE_SFOOT_MAX' : 1000, 
    'RE_ROOMS_MIN' : 1, 
    'RE_ROOMS_MAX' : 50,          
    },
   
})


// *********************************************
// ***** Models we use in our frontend

var MortgageLaneModel = {
    'Sum': 100000,                   //UINT, in NIS, sum of money loaned from the bank in this lane
    'Duration': 10,                  //UINT, in Years, the duration of the loan in this lane
    'InterestTopLimit': 4.0,         //FLOOT, in percentage,
    'InterestBottomLimit': 1.0,      //FLOOT, in percentage
    'TotalSumToReturn': 150000,      //UINT, in NIS, total sum of money returned the bank in this lane
    'InitialMonthlyPayment':4000,    //UINT, in NIS
    'AverageMonthlyPayment':4000,    //UINT, in NIS 
    'WorstCaseMonthlyPayment':4000,  //UINT, in NIS  
  }
 
var FinancialInsightsModel = {
    'Negative' : {
        'A': 'תובנה שלילית 1',      //STRING 
        'B': 'תובנה שלילית 2',      //STRING   
        'C': 'תובנה שלילית 3',      //STRING     
        'D': 'תובנה שלילית 4',      //STRING    
    },

    'Positive' : {
        'A': 'תובנה חיובית 1',      //STRING    
        'B': 'תובנה חיובית 2',      //STRING   
        'C': 'תובנה חיובית 3',      //STRING     
        'D': 'תובנה חיובית 4',      //STRING     
    },
}

var MortgageTamhilModel = {
    'MortgageLaneList': [],          //List, 
    'NegativeInsightsList': [],      //List, 
    'PositiveInsightsList': [],      //List, 

    //Properties set by user
    'Sum': 100000,                   //UINT, in NIS, total sum of money loaned from the bank
    'TotalSumToReturn': 150000,      //UINT, in NIS, total sum of money returned the bank  
}

var LoanTakersInfoModel = { 
    'PersonalInfo' : {
        'EmailAddress': 'example@.me',                         //STRING
        'CurrCity': 'תל אביב',                                //STRING
        'NumOfCurrFamilyMembers': Consts.LOANS.NO_FAMILY,      //INT, 
        'NumOfExpectedFamilyMembers': Consts.LOANS.NO_FAMILY,  //INT,
    },
    'LoanInfo' : {
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
        'FixedExpenditure': Consts.LOANS.LONETAKER_NO_AOUNT,   //INT, in NIS, 
        'LoanTakerFinancingGroup': Enums.FinancingGroup.ERR,   //Enum

        'CurrRent': Consts.LOANS.LONETAKER_NO_AOUNT,           //INT, in NIS,
        'Capital': Consts.LOANS.LONETAKER_NO_AOUNT,            //INT, in NIS,
        'MonthlySavings': Consts.LOANS.LONETAKER_NO_AOUNT,     //INT, in NIS,
        'OutOfTheBlueIncome': Consts.LOANS.LONETAKER_NO_AOUNT,     //INT, in NIS,
    }
}