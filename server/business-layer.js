var express = require('express');
var cors = require('cors');
var mongoClient = require('mongodb').MongoClient;

var app = express();

// app.get('/',(request,response) => {
//     response.send("<h2>API HOME</h2>");
// });

app.get('/connect',(request,response) => {
    mongoClient.connect('mongodb://127.0.0.1:27017')
    .then(() =>{
        response.send('Connected with Mongodb Server Successfully');
    })
    .catch((error) =>{
        console.log(error)
    })
});




// app.get('/products',(request,response) => {
//     response.send([{Name:'TV',Price:6630},{Name:'Mobile',Price:56000}]);
// });


// app.get('/details/:id/:name',(request,response) => {
//     response.send(`
//     Id: ${request.params.id} <br>
//     Name: ${request.params.name}
//     `);
// });

// post request
// app.post('/addProducts',(request,response) => {
//     response.send('Post -insert data');
// });


// update request
// app.put('/updateProducts',(request,response) => {
//     response.send('Update -insert data');
// });

// remove request
// app.delete('/removeProducts',(request,response) => {
//     response.send('Remove -insert data');
// });


// app.get('*',(request,response) => {
//     response.send('Requested Path Not Found');
// });



app.listen(5000);
console.log(`server started : http://127.0.0.1:5000`);