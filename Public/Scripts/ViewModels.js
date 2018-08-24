// *********************************************
// *****  Classes

// ** This entity represent 
function MortgageTamhilVM (_model){

    this.Model = JSON.parse(JSON.stringify(_model)); //Hard copy of model object
}


MortgageTamhilVM.prototype.RefreshUI = function(){
    console.log('Client DEBUG::MortgageTamhilVM::RefreshUI START');
};
