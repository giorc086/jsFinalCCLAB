var city = 'Hanau';
var country = 'DL';
var APIKey = 'f3f7ad387ae1c963';

//loadWeather
var loadWeather = function(response){
  
  if(response.response.error){
    alert(response.response.error.description);
    return;
  };
  
  
  //console.log('The current weather in ' + thisCity + ' is ' + weather + ' with a temperature of ' + temp);
  
  var tempInt = Math.ceil(response.current_observation.temp_f);
  var widgetColor = getTempColor(134 - tempInt);

  console.log(widgetColor);

  $('body').animate({backgroundColor : widgetColor},2000);
};


var getTempColor = function(hue) {
  return 'hsl(' + hue + ', 100%, 85%)';
}

//getWeather function
var getWeather = function(){
  
  var thisURL = 'http://api.wunderground.com/api/' + APIKey + '/conditions/q/' + country + '/' + city + '.json' 
  
  $.ajax({
    url : thisURL,
    dataType : "jsonp",
    success : function(response){
      loadWeather(response);  
    }
  });
  
};


//init

var init = function(){

  console.log('What\'s the weather?');
       getWeather();
  
 
  
};


$( document ).ready(function(){
  
  init();
  
});

////////////////////////////////////////////////////////

  new Vivus('myDiv0', {
        duration: 400,
        file: 'mysvg/alphaFont1.svg',
        animTimingFunction: Vivus.EASE,
        type: 'oneByOne',
        start: 'autostart',
    }, myCallback);
  
  new Vivus('myDiv1', {
  		duration: 300,
        file: 'mysvg/alphaFont2.svg',
        animTimingFunction: Vivus.EASE,
        type: 'oneByOne',
        // start: 'autostart',
  }, myCallback);

    function myCallback() {
    	console.log("callback function called")
    }

