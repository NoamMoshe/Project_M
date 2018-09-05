/*******************************************************/
/**** Variables ****/

const PATH_TO_NODE_MODULES = (process.platform == 'win32') ? "C:/Windows/System32/node_modules/" : "";


/**** Modules ****/

var express = require(PATH_TO_NODE_MODULES + 'express');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'Private/Jade'));
app.set('view engine','jade');

if (process.platform == 'win32') {
    app.use(express.bodyParser());
}
else {
    var bodyParser = require('body-parser');
    app.use(bodyParser());
}

app.use(express.static(path.join(__dirname, 'Public')));

var DataBase = require('./Private/DB/DataBase.js');
DataBase.Initialize();


/*******************************************************/
/**** Events ****/

app.listen(app.get('port'), function() {
    console.log('Server DEBUG::app.js::');
    console.log('Server DEBUG::app.js:: STARTE (port ' + app.get('port') + ')');
});


/**** Routes ****/

app.get('/', function(req, res) {
    console.log('Server DEBUG::app.js::     Event "/" called');

    
    //Read data
    DataBase.GetAllTestDBData(function(rows)
    {
        // Re-direct to default page
        for (var i = 0, len = rows.length; i < len; ++i) 
        {
            console.log('Server DEBUG::app.js:: testDBData.users[' + i + '] = ' + rows[i].ID);
        }
    });
    
  
    res.render('View1', { user_name: "User", message: "Hello render1" });		  
});

app.get('/Page1', function(req, res) {
    console.log('Server DEBUG::app.js::     Event "/Page1" called');
    
    res.render('View1', { user_name: "User1", message: "Hello render1" });
});

app.get('/Page2', function(req, res) {
    console.log('Server DEBUG::app.js::     Event "/Page2" called');
    
    res.render('View1', { user_name: "User2", message: "Hello render2" });
});

