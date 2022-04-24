
//Final view 

function myFunction() {
    var adult = document.getElementById("inputAdult").value ;
    var toDate = document.getElementById("inputToDate").value;
    var fromDate = document.getElementById("inputFromDate").value;
    var total = +adult * +(fromDate-toDate);
    document.getElementById("inputTotal").innerHTML = total;

}

function myFunction(){
    var adult= document.getElementById("inputAdult").value;
    var toDate= document.getElementById("inputToDate").value;
    var fromDate = document.getElementById("inputFromDate").value;
    const dateone=new date(d1);
    const datetwo=new date(d2);
    const time=Math.abs(datetwo-dateone);
    const days=Math.ceil(time/(1000*60*60*24));
    document.getElementById('inputTotal').value=1000*days*adult;
}


src="https://maps.googleapis.com/maps/api/js?key=c60345e170msh3ba019454a286afp1db6e3jsn281038817a0a&callback=initMap";

var image;
 function initMap() {
 image = new google.maps.Map(document.getElementById("map"), {
 center: { lat: -34.397, lng: 150.644 },
 zoom: 8
 });
 }