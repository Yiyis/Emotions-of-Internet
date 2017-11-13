/*
 * Creation & Computation - Digital Futures, OCAD University
 * Instructors: Kate Hartman / Nick Puckett
 *
 * Yiyi Shao
 *
 * Example code from: http://tronixstuff.com/2014/11/25/tutorial-l298n-dual-motor-controller-modules-and-arduino/
 */

//L293D
//Motor A
int motorPin1  = 9;  // Pin 14 of L293
int motorPin2  = 10;  // Pin 10 of L293

void setup(){
    Serial.begin(9600); 
    //Set pins as outputs
    pinMode(motorPin1, OUTPUT);
    pinMode(motorPin2, OUTPUT);

}
    //Motor Control - Motor A: motorPin1,motorpin2 & Motor B: motorpin3,motorpin4

void loop()
{
 if (Serial.available()) { // if there's serial data available
  // read it
    int inData = Serial.read();
    //Serial.write(inData);   // send it back out as raw binary data
    //Serial.println(inData);
    analogWrite(motorPin1, inData);//Based on the value to turn on and off, Pin1 HIGH & Pin2 LOW means on
    analogWrite(motorPin2, LOW);//this must be in low in order to make water pump wokring, Pin1 LOW & Pin2 LOW means off
    delay(100); 
 }
