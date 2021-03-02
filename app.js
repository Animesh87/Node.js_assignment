const express = require("express");
const fetch = require("node-fetch");

const app = express()

app.use(express.static("public"));
app.set("view engine" , "ejs");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.get("/" , function(req,res){
	let data;
	fetch("https://api.wazirx.com/api/v2/tickers")
    	.then(res => res.json())
    	.then(text => data = text)
    	.then(() => {
    	     key = Object.keys(data);
             console.log(data[key[0]])
    	     res.render("index" , {content : data , item : key});
    	})
})


    



app.listen(port , function(){
	console.log("server is running successfully.");
})