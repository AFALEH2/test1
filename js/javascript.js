var city_code = 307302;
var api_key = "iKFq9L2IpKNcAe1io5o1523bzdt7NmgR"; //developer.accuweather api key codigo ciudad 
var language = "es-es";
var metric = "true";
var datos_url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/307302?apikey=iKFq9L2IpKNcAe1io5o1523bzdt7NmgR&language=es-es&metric=true";
var local_datos_url = "tiempo.json"; // url tiempo automaticamente

$.getJSON(local_datos_url, function(data) {
    console.log(data);
    for(n=0; n<data["DailyForecasts"].length; n++){
    document.getElementById("headline").innerHTML = data["Headline"]["Text"]; //frase de tiempo que sale por defecto
    document.getElementById("date"+n).innerHTML = data["DailyForecasts"][n]["Date"].substring(5,10); //fecha: dia y mes 
    document.getElementById("icon"+n).innerHTML = "<img class=test src=images/icons/"+data["DailyForecasts"][n]["Day"]["Icon"]+".png>"; //icono del tiempo
    document.getElementById("phrase"+n).innerHTML = data["DailyForecasts"][n]["Day"]["IconPhrase"]; //estado del dia
    document.getElementById("maximum"+n).innerHTML =  "Max" + " "+  data["DailyForecasts"][n]["Temperature"]["Maximum"]["Value"]  +  "ºC" + " " + " | "; //temperaura max
    document.getElementById("minimum"+n).innerHTML =  "Min" + " " +  data["DailyForecasts"][n]["Temperature"]["Minimum"]["Value"]  + "ºC"; //temperatura min

}
});


  