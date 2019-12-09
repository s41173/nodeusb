const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let usb = require('usb');
let term = usb.findByIds(0x03f0, 0x02a);
interfaceId = 0;
 
// parse application/json
app.use(bodyParser.json());
 
app.get('/api/gate',(req, res) => {

    term.open();
    let xinterface = term.interface(interfaceId);
    // xinterface.claim();
    var endpoints = xinterface.endpoints;
    var outEndpoint = endpoints[0];
    outEndpoint.transferType = 2;
    outEndpoint.transfer(Buffer.from('a'), function (err) {
    //   console.log(err);
      if(err === undefined){ res.send(JSON.stringify({"status": 200, "response": "gate opened"})); }else{
        res.send(JSON.stringify({"status": 401, "response": err}));
      } 
    });
});
  
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});