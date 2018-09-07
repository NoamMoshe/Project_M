// ******************************************************************************************
// ***** Extensions

/*
 * Added support to Array. Sum up and return a property of an object held in an array.
 * 
 * Example:
 *   A[{Age:12},{Age:8}]  -> SumPropertyByName("Age") -> return "20"
 * 
 * Retrun value: 
 *   sum of the object property
 */
Array.prototype.SumPropertyByName = function (_prop) {
    var total = 0;
    for (var i = 0, len = this.length ; i < len ; ++i )
        total += this[i][_prop];

    return total;
}

