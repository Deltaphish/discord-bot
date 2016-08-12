var Discord = require("discord.js");
var request = require("request");

var userName = "Your bots username"
var password = "Your bots password"

var bat = " nananananananananananananananananananananananananana, Batman, nananananananananananananananananananananananananana Batman";




var mybot = new Discord.Client();

mybot.on("message", function(message) {
	
	if(message.content.includes("#420")){
	var mes = "https://youtu.be/rnS-05XoXs4";
	mybot.sendMessage(message.channel,mes);
	}
	
	if(message.content.includes("#invite")){
		var mes = "User "+message.author+" wants people to play "+ message.content.substring(7)+" With him , her, or apache attack helicopter";
		mybot.sendMessage(message.channel,mes,{tts:true});
	}
	
	if(message.content.includes("#batman")){
		mybot.sendMessage(message.channel,bat,{tts:true});
	}
	
	if(message.content.includes('ä') && message.content.includes("#lol")  || message.content.includes('ö') && message.content.includes("#lol")  || message.content.includes('å') && message.content.includes("#lol") ){
		mybot.sendMessage(message.channel,"The alafabet does not have the letters ä,å or ö",{tts:true});
	}
    else if(message.content.includes("#lol")) {
		var temp = message.content.substring(5);
		console.log(temp);
		request("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/"+temp+"?api_key=333368e6-27a7-4af0-b1c7-d4597dd621e5",function(error,response,body){
		if(response.statusCode != 200 && !error){
		console.log("nop");
		mybot.sendMessage(message.channel,"User not found",{tts:true});
		}
		else{
		console.log("Name: " + response.statusCode);
		console.log("Address: " + "https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/"+temp+"?api_key=333368e6-27a7-4af0-b1c7-d4597dd621e5");
		var datax = JSON.parse(body);
		var name = temp.replace(/\s/g, '')
		name = name.toLowerCase();
		var id = String(datax[name]["id"]);
		console.log("ID: " + id);
		request("https://euw.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/EUW1/"+id+"?api_key=333368e6-27a7-4af0-b1c7-d4597dd621e5",function(error,response,body){
			if(!error && response.statusCode == 200){
				var data = JSON.parse(body);
				var milliseconds = (new Date).getTime();
				console.log(data["gameStartTime"]);
				var time = milliseconds - data["gameStartTime"];
				time = Math.floor(time/1000/60);
				
				
				
				mybot.sendMessage(message.channel,"time: "+time+" min",{tts:true});
			}
			else{
				console.log("fuck");
				console.log("Stats: " + response.statusCode);
				mybot.sendMessage(message.channel,"The summoner is not playing now",{tts:true});				
			}
		});
		}
		});
		console.log("pong");


		console.log("breaking...");
		}

});

console.log("Server Started");
mybot.login(userName,password);

