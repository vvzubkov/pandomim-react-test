(function (React, module, undefined) {
    var Form        = require('./Form.jsx');
    var SmartForm   = require('./SmartForm.jsx');

    module.exports = React.createClass({
        getInitialState: function() {
            return {data: {}};
        },
        componentDidMount: function () {

        },
        render: function () {
            var $grid = $("#grid");
            var $window = $("#window");

            var userDataSource = this.props.userDataSource;
            var userViewModel = this.props.userViewModel;

            kendo.bind($window, userViewModel);

            $window.kendoWindow({
                width: "600px",
                title: "Edit",
                modal: true,
                actions: [
                    "Close"
                ],
                close: function() {
                    userViewModel.startOver();
                }
            });

            return (
                <div id="window">
                    <Form />
                    <SmartForm userDataSource = {this.props.userDataSource} userViewModel = {this.props.userViewModel}/>
                </div>
            )
        }
    });

}(React, module));
