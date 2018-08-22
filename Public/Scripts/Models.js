/*
 * Enums we use in our frontend
 */

var Enums = {
    'LoanTakers' : {
        'SOLE': 0,      
        'COUPLE': 1,       
    },
}


/*
 * Models we use in our frontend
 */

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
 
var FinancialInsights = {
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

var LoanTakersInfo = { 
    //Personal info
    'EmailAddress': 'example@.me',   //STRING
    'CurrCity': 'תל אביב',          //STRING
}