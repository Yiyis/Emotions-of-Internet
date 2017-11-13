/*
 * Creation & Computation - Digital Futures, OCAD University
 * Instructors: Kate Hartman / Nick Puckett
 *
 * Yiyi Shao
 *
 * 
 */

var aiokey = "5dfdebe645474fb8a6716e87af215e5e";
var userName = "yiyi11";
var channelName = "Twitter";

var pollingRate = 2500;
var lastCheck = 0;

var incomingVal1;
var currentVal1;

var serial;                            // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411';// fill in your serial port name here
var inData;                            // for incoming serial data

var currentVal1;

var spot = {
  x: 100,
  y: 50
}; // set up variable for the position of ellipse and rectamgles

var col = {
  r: 0,
  g: 0,
  b: 255
};// set up variable for the color of ellipse and rectamgles


function setup()
{
 createCanvas(windowWidth, windowHeight);
serial = new p5.SerialPort();    // make a new instance of the serialport library
serial.on('data', serialEvent);  // callback for when new data arrives
serial.on('error', serialError); // callback for errors
serial.open(portName);           // open a serial port
}


function iftttCheck(uName, key)
{
var checkURL = ("https://io.adafruit.com/api/groups/"+uName+"/receive.json?x-aio-key="+key);
loadJSON(checkURL,newData);
}


function serialEvent() {
  // read a byte from the serial port:
  var incomingData = serial.read();
  // store it in a global variable:
  inData = incomingData;
}


function draw(){

  if (currentVal1 == 0){
 //image(img,10,10);
  col.b = random(100,255);
  col.r = random(100,255);
  col.g = (0);
  spot.x = random(0,windowWidth);
  spot.y = random(0,windowHeight);
  fill(col.r, col.g, col.b, 100);
  noStroke();
  rect(spot.x, spot.y, 24, 24);//Happy. Draw random pink rectangles on the canvas
  serial.write(0);//turn off the lED
  }
  else {
  col.b = random(100,255);
  col.r = 0;
  col.g = random(100,150);
  spot.x = random(0,windowWidth);
  spot.y = random(0,windowHeight);
  fill(col.r, col.g, col.b, 100);
  noStroke();
  ellipse(spot.x, spot.y, 24, 24);//Sad. Draw random blue ellipses on the canvas
  serial.write(255);//turn on the LED
}


 if(millis()-lastCheck>=pollingRate)
 {
  iftttCheck(userName,aiokey,channelName);
  lastCheck=millis();
 }
}


function newData(incomingData)
{
  currentVal1 = (incomingData.feeds[0].last_value);
  console.log(currentVal1);
}


function serialError(err) {
  //println('Something went wrong with the serial port. ' + err);
}