//https://www.eclipse.org/paho/clients/js/



function HISTORIAL1(){
	
	message =new Paho.MQTT.Message("history");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
	console.log("history");
	
	
	
  
}

function HISTORIAL2(){
	
	message =new Paho.MQTT.Message("history2");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
	console.log("history2");
	
	
	
  
}

//variable global.
//var a = text.split(" ")[2]





// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
    client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "654hector1@gmail.com",
    password: "naruto798199429",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("654hector1@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "654hector1@gmail.com/kop";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
	  
	text=(message.payloadString);
	
	
	var a = text.split(" ")[0]
	console.log(a)
	
	if(a=="activado1"){
		document.getElementById("respuesta1").innerHTML = text;
				
	}
		if(a=="activado2"){
		document.getElementById("respuesta2").innerHTML = text;
				
	}

	
	//if(text=="0"){
	//	document.getElementById("respuesta1").innerHTML = "Desactivado";
				
	//}
	//if(text=="1"){
		
	//	document.getElementById("respuesta2").innerHTML = "Desactivado2";		
	//}
	if(a=="Historial"){
		
		document.getElementById("his3").innerHTML = text;
		console.log(text)
	}
		if(a=="Historial2"){
		
		document.getElementById("his4").innerHTML = text;
		console.log(text)
	}

	
	

  }
  
