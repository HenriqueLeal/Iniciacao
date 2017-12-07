#include <Servo.h>
#include <SPI.h>
#include <Ethernet.h>

#define SERVO 7 
 
Servo s; 
int pos; 
int ledVermelho  =  6;
int ledVerde     = 3;
int ledAmarelo  = 2;
char caracter = 'n';

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
byte ip[] = { 192,168,0, 21 }; // ip do arduino
byte gateway[] = { 192,168,0, 1 }; // ip do roteador
byte subnet[] = { 255, 255, 255, 0 };
EthernetServer server(8080); // porta
 
void setup (){
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledVerde, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  s.attach(SERVO);
  s.write(65); 
  Ethernet.begin(mac, ip, gateway, subnet);
  server.begin();
  Serial.begin(9600);
}
 
void loop(){
       EthernetClient client = server.available();
       digitalWrite(ledAmarelo, HIGH);
       delay(300);
       digitalWrite(ledAmarelo, LOW);
       delay(300);  

       if(client){
  
      caracter = client.read();
      if(caracter == 'a'){
          digitalWrite(ledVerde, HIGH);
          for(pos = 65; pos < 180; pos++){
             s.write(pos);
             delay(40);
          }
          digitalWrite(ledVerde, LOW);
          delay(2000);
          digitalWrite(ledVermelho, HIGH); 
          for(pos = 180; pos >= 63; pos--){
             s.write(pos);
             delay(20);
          }
          digitalWrite(ledVermelho, LOW);
        }
    }
}
