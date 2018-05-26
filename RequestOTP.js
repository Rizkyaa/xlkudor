var req = require("request");
var url="https://my.xl.co.id"
var py1
var py2

log("NomorTelp") // Jangan Hilangin ""

var headers = { 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language':'en-US,en;q=0.5',
    'Accept-Encoding':'gzip, deflate, br',
    'Content-Type' : 'application/json'
};
function getyhdmis(){
var y=new Date()
var yy = y.getFullYear();
var m = y.getMonth();
var d = y.getDate();
var h = y.getHours();
var m = y.getMinutes();
var s = y.getSeconds();
return ''+yy+m+d+h+m+s
}
 function log(i,n,id){
 	py1= {
     Header:null,
     Body:{Header:{IMEI:"512044125586969",ReqID:getyhdmis()},LoginSendOTPRq:{msisdn:i}}
 	}
 	req({uri:url+"/pre/LoginSendOTPRq",method:"POST", json:py1, headers:headers}, function(e,h,b){if(b.LoginSendOTPRs.headerRs.responseMessage){console.log("Sent!")
    }else{console.log("Error: "+e)}
    })
 	}
