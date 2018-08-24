/*******************************************************/
/**** Variables ****/

const PATH_TO_NODE_MODULES = (process.platform == 'win32') ? "C:/Windows/System32/node_modules/" : "";

var __dbHandle;


/**** Modules ****/

var path = require('path');
var sqlite3 = require(PATH_TO_NODE_MODULES + 'sqlite3').verbose(); 


/*******************************************************/
/**** Public ****/

module.exports.Initialize = function Initialize()
{
    console.log('Server DEBUG::DataBase::');
    console.log('Server DEBUG::DataBase::Initialize():: STARTED');
    
 	__dbHandle = new sqlite3.Database(path.join(__dirname, 'TestDB'));

	__dbHandle.serialize(function() {
        console.log('Server DEBUG::DataBase::     Successfuly connected to sqlite db...');
	});
}


module.exports.GetAllTestDBData = function GetAllTestDBData(callback)
{
	__dbHandle.all('SELECT * FROM TestDB', function(err, rows) 
	{
		if (err)
		{
			console.log(err);
		}
		else
		{
			callback(rows);
		}
	}
)}


/*******************************************************/
/**** Private ****/

