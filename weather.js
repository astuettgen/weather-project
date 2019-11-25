// sample url from open weather https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

//  my custom url - sauk - https://samples.openweathermap.org/data/2.5/weather?zip=53578,us&appid=fb2f1705a524eea914d7326b3d7baad4

// https://api.openweathermap.org/data/2.5/weather?zip=94040,us

//api key = fb2f1705a524eea914d7326b3d7baad4


$("#search_btn").click(function() {
    
   //variables for the open weather api url
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'fb2f1705a524eea914d7326b3d7baad4';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW){
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("condition:",responseFromOW.weather[0].description);
        
        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var description = responseFromOW.weather[0].description;
    });
    
});