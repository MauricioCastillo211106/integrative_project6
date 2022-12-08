#include <FirebaseESP32.h>
#include <WiFi.h>
#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

//include de los sensores
#include <Wire.h> 
#include <DHT.h>
#include <OneWire.h>                
#include <DallasTemperature.h>

//Conexion wifi y claves de la database
//host de la base de datos
#define FIREBASE_HOST "https://prue-database-default-rtdb.firebaseio.com"
//key de la base de datos
#define FIREBASE_AUTH "QUR5SPqBAcP9F4lBdsFf8oTpX5MWCf0HPDm3F2nt"
//nombre de la red a la que se conectara 
#define WIFI_SSID "CGA2121_hSwNgPs"
#define WIFI_PASSWORD "DXbqnfDPyXKaNj4c7w"
//Define FirebaseESP32 data object
#define USER_EMAIL "acces@hotmail.com"
#define USER_PASSWORD "contraseña"
#define API_KEY "AIzaSyAkp8m_eoum4D5GqRS9wsagNS8JaDTajJ4"
FirebaseData firebaseData;
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
//direccion a al que apuntara el post? al chile no se xd sigue el tutorial
String path = "/"; //datos 

//definicion sensores
#define DHTPIN 4
#define DHTTYPE DHT11
#define echo 18
#define trigger 5
#define LIGHT_SENSOR_PIN 36
OneWire ourWire(3);   
DallasTemperature sensors(&ourWire);
DHT dht(DHTPIN, DHTTYPE);

float h;
long tim;
long d;
float t;
int sensorValue;

unsigned long sendDataPrevMillis = 0;

unsigned long count = 0;
void setup(){
  //setup sensores
  dht.begin();
  sensors.begin();
  pinMode(echo,INPUT);
  pinMode(trigger,OUTPUT);
  digitalWrite(trigger,LOW);
  
  //setup conexion del esp al wifi y conexion a la base de datos
  Serial.begin(115200);
 WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  Serial.printf("Firebase Client v%s\n\n", FIREBASE_CLIENT_VERSION);
  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  config.database_url = FIREBASE_HOST;
  config.token_status_callback = tokenStatusCallback; // see addons/TokenHelper.h

  Firebase.begin(&config, &auth);

  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
}

void loop(){
  //sensores
  temperatura();
  humedad();
  distancia();
  luminocidad();
  
  //escribir datos en la dataBase
  Firebase.setString(firebaseData,path+"tem/temperatura", t);
  Firebase.setString(firebaseData,path+"hum/humedad", h);
  Firebase.setString(firebaseData,path+"dis/distancia", d);
  Firebase.setString(firebaseData,path+"lum/luminosidad", sensorValue);
  Serial.print(t);
  Serial.print(sensorValue);
  Serial.print(h);
  Serial.print(d);


  delay(1*15*1000);
}

void humedad(){ 
  // Leemos la humedad relativa
  h = dht.readHumidity();
}

void distancia(){
  digitalWrite(trigger,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger,LOW);

  tim = pulseIn(echo,HIGH);
  d = tim/59;
}

void temperatura(){
  sensors.requestTemperatures();
  t = dht.readTemperature();  
}

void luminocidad(){
  sensorValue = analogRead(LIGHT_SENSOR_PIN);
}