(function(React) {
    var App = require('./components/App.jsx');

    var render = function() {
        React.render(React.createElement(App, {}), document.body);
    };

    render();

}(React));