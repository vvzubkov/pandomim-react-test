(function (React, module, undefined) {
    var Form        = require('./Form.jsx');
    var SmartForm   = require('./SmartForm.jsx');

    module.exports = React.createClass({
        render: function () {
            return (
                <div id="window">
                    <Form />
                    <SmartForm />
                </div>
            )
        }
    });

}(React, module));
