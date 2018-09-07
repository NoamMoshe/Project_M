/* FormatManager
 * 
 */


/*************************************/
/*** Public ***/

var FormatManager = {
    
    /*
    * Added support to Array. Sum up and return a property of an object held in an array.
    * 
    * Example:
    *   StrToNis(1300000) -> return "₪ 1,300,000"
    */
    StrToNis: function (_str) {
        _str += '';
        var x = _str.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
    
        while (rgx.test(x1)) 
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    
        return x1 + x2 + " ₪";
    },

    StrToPercentage: function (_str) {
        return _str + "%";
    },
}