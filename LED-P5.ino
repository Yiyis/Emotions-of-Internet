
/*
 * Creation & Computation - Digital Futures, OCAD University
 * Instructors: Kate Hartman / Nick Puckett
 *
 * Yiyi Shao
 *
 * 
 */
   
  
  
  void setup() {
    Serial.begin(9600);   // initialize serial communications
    //Serial.setTimeout(10);  // set the timeout for parseInt
  }
  
  void loop() {      
    if (Serial.available()) {     // if there's serial data available
      int inByte = Serial.read(); // read it
        Serial.write(inByte);  // send it back out as raw binary data
        Serial.println(inByte);
        analogWrite(12, inByte);       // use it to set the LED brightness     
    }

  }
