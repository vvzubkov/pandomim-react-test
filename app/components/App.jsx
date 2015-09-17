(function (React, module, undefined) {
    var IdGrid      = require('./IdGrid.jsx');
    var IdWindow    = require('./IdWindow.jsx');

    module.exports = React.createClass({
        render: function () {
            return (
                <div>
                    <IdGrid />
                    <IdWindow />
                </div>
            )
        }
    });

}(React, module));
