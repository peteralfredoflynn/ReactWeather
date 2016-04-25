var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application build on React.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            < a href="https://facebook.github.io/react">React</a> is the Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> was used to get weather.
          </li>
        </ul>
      </div>
    );
};

module.exports = About;