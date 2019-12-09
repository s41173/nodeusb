let usb = require('usb');
let term = usb.findByIds(0x046d, 0xc52b); // mouse logitech
// let term = usb.findByIds(0x2341, 0x0001); // arduino
// let term = usb.findByIds(0x03f0, 0x002a); // hp printer

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
var inEndpoint = endpoints[0];
// console.log("In endpoints adalah : ",InEndpoint);

inEndpoint.transferType = 3;
// inEndpoint.startStream(1, 64);
inEndpoint.transfer(64, function (error, data) {
    if (!error) {
        console.log(data);
    } else {
        console.log(error);
    }
});
inEndpoint.on('data', function (data) {
    console.log(data);
});
inEndpoint.on('error', function (error) {
    console.log(error);
});
