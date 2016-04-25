var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2b358135426609b29e8b85ba13c7401f&units=imperial';

//2b358135426609b29e8b85ba13c7401f

module.exports = {
  getTemp: function(location) {
    //encodes for the url plain-text --> browser
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(
        function(res){
          if (res.data.cod && res.data.message) {
              throw new Error(res.data.message);
          } else {
              return res.data;
          }
        }, function(res) {
          throw new Error(res.data.message);
      });
    }
};
