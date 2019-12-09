let usb = require('usb');
// let term = usb.findByIds(0x046d, 0xc52b); // mouse logitech
// let term = usb.findByIds(0x2341, 0x0001); // arduino
let term = usb.findByIds(0x03f0, 0x002a); // hp printer

interfaceId = 0;
// term = usb.findByIds(0x03f0, 0x022a);
// console.log("Device List : ",usb.getDeviceList());

term.open();
// console.log('Term interface adalah : ',term.interface(interfaceId));
let xinterface = term.interface(interfaceId);
xinterface.claim();
// console.log("interface adalah : ",xinterface.endpoints);
var endpoints = xinterface.endpoints;
// console.log("Endpoints adalah : ",endpoints);
var outEndpoint = endpoints[0];
// console.log("Out endpoints adalah : ",outEndpoint);

// var buf = Buffer.from('a');
// var len = buf.write("a");
// // console.log(len);
// outEndpoint.transferType = 3;
// outEndpoint.transfer(len, function (err) {
//    console.log(err);
// });

outEndpoint.transferType = 2;
outEndpoint.transfer(Buffer.from('a'), function (err) {
     console.log(err); 
   });
