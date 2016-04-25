var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var self = this;
        
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function (data) {
            var temp = data.main.temp;
            var name = data.name;

            self.setState({
                location: name,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            self.setState({
                isLoading: false,
                errorMessage: errorMessage.message
            });
        });
    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                  <ErrorModal message={errorMessage}/>
                );
            }
        }

        return(
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}

            </div>
        );
    }
});

module.exports = Weather;