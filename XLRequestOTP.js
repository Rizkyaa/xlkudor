var req = require("request");
var url="https://my.xl.co.id"
var IMEI="512"+getTime()
var py1
var py2

log("NomorTelp","KodeSMS","ServiceID") // Jangan Hilangin ""

console.log("Tunggu Sebentar")
console.log("Jika Bisa Credit Saya ^_^ -Miners")

var headers = { 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language':'en-US,en;q=0.5',
    'Accept-Encoding':'gzip, deflate, br',
    'Content-Type' : 'application/json'
};
var headers2 = { 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language':'en-US,en;q=0.5',
    'Accept-Encoding':'gzip, deflate, br',
    'Content-Type' : 'application/json',
    'Referer': 'https://my.xl.co.id/pre/index1.html'
};
function getTime(){
var y=new Date()
var yy = y.getFullYear();
var m = y.getMonth();
var d = y.getDate();
var h = y.getHours();
var m = y.getMinutes();
var s = y.getSeconds();
return ''+yy+m+d+h+m+s
}

function getDate(){
var y=new Date()
var yy = y.getFullYear();
var m = y.getMonth();
var d = y.getDate();
return ''+yy+m+d
}

 function log(i,n,id){
 	py1= {
     Header:null,
     Body:{Header:{IMEI:IMEI,ReqID:getTime()},LoginValidateOTPRq:{msisdn:i,otp:n,headerRq:{channel:"MYXLPRELOGIN",requestDate:getDate(),requestId:getTime()}}},
    appVersion: "3.7.0",
    msisdn_Type:"P",
    platform: "04",
    sessionId:null,
    sourceName:"Chrome",
    screenName:"login.enterLoginOTP",
    packageRegUnreg: ""
 	}
 	req({uri:url+"/pre/LoginValidateOTPRq",method:"POST", json:py1, headers:headers}, function(e,h,b){
    reg(id,i,b.sessionId)
    console.log(b.sessionId)
    console.log("Sebentar Lagi!!!")
    })
 	}
 function reg(id,msi,sessionid){
 	function returne(i){
 		return i
 	}
py2={
	Header:null,
	Body:{Header:{IMEI:IMEI,ReqID:getTime()},HeaderRequest:{applicationID:"3",applicationSubID:"1",touchpoint:"MYXL",requestID:getTime(),msisdn:returne(msi),serviceID:returne(msi)},opPurchase:{msisdn:returne(msi),serviceid:returne(id)},XBOXRequest:{IMEI:IMEI,IMSI:"5"+getTime(),Shortcode:"mapps",Source:"mapps",Subscriber_Number:getTime(),Trans_ID:getTime(),requestName: "GetSubscriberMenuId"}}, 
	sessionId:returne(sessionid),
    appVersion: "3.7.0",
    msisdn_Type:"P",
    platform: "04",
    serviceId:returne(id),
    sourceName:"Chrome",
    screenName:"home.storeFrontReviewConfirm",
    packageRegUnreg: "Reg"
}
req({uri:url+"/pre/opPurchase",method:"POST", json:py2, headers:headers2}, function(e,h,b){if(b.gaUser==null){console.log("Failed")}else{console.log("Success")}})
}
