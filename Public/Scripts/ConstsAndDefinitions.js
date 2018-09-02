// *********************************************
// ***** Consts, Enums and defines

var Enums = {
    'VERSION': '0.0.1',
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

const CONSTS = Object.freeze( {
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

const TEXTS = Object.freeze( {
    'TAMHIL' : {
        'LINE': 'מסלול', 
        'INTERESTS': 'ריביות', 
        'SUM': 'סכום',     
        'YEARS': 'שנים',        
        'SUMֹֹ_TO_RETURN': 'סך החזר',
        'MONTHLY_RETURN': 'החזר חודשי',  
        'DISCLAIMER': '*הבהרה: אין לראות באמור לעיל משום המלצה לביצוע פעולות ו/או חוות דעת ו/או ייעוץ מכל סוג שהוא. המידע המוצג הינו לצרכי עזר בלבד ואינו מהווה תחליף לייעוץ פרטני בהתחשב בנתונים ובצרכים האישיים של כל אדם. כל הניתוח נעשה על סמך הנחות עתידיות על האינפלציה והריבית, ויתכנו הבדלים בין הסכומים המחושבים לאלו שיהיו בפועל. ככל שייעשה שימוש כלשהו במידע הנ"ל, הינכם עושים זאת על דעתכם ועל אחריותכם הבלעדית',       
        'TAMHIL_HAEDLINE': 'תמהיל משכנתא', 
        'TAMHIL_ANALYSIS_HAEDLINE': 'ניתוח משכנתא',  
        'TAMHIL_SUMMARY_HAEDLINE': 'סיכום תמהיל', 
        'TAMHIL_ASSUMPTIONS_HAEDLINE': 'הנחות בתמהיל', 
    },
})

const FINANCIAL_INSIGHTS = Object.freeze( {
    'NEGATIVE' : {
        'LOW_MONTHLY_RETURN': 'ההחזר החודשי קטן יחסית ליכולת הכלכלית', 
        'HIGH_MONTHLY_RETURN': 'ההחזר החודשי גדול יחסית ליכולת הכלכלית',     
        'LOW_SAVINGS_PERCENTAGE': 'אחוז חיסכון נמוך מדי',        
        'LOWֹֹֹ_SAVINGS_DURINGֹֹֹ_MORTGAGE': 'החיסכון נמוך מדי במהלך ההלוואה',     
    },
    'POSITIVE' : {
        'HIGH_SAVINGS_PERCENTAGE': 'אחוז חיסכון גבוה',    
        'HIGH_SAVINGS_DURINGֹֹֹ_MORTGAGE': 'חיסכון גבוה במהלך ההלוואה',          
        'RAINY_DAY_FUNDC': 'קרן ליום גשום',                
    },
    'ATTENTION' : {
        'FINANCE_STEP_CLOSENESS': 'בעוד סכום לא גבוה את עובר למדרגת מימון טובה יותר',    
    },
    'HEADLINES' : {
        'NEGATIVE': 'תובנות שליליות',  
        'POSITIVE': 'תובנות חיוביות',  
        'ATTENTION': 'לתשומת לבך',    
    },
})

