(function (React, module, undefined) {
    var IdGrid      = require('./IdGrid.jsx');
    var IdWindow    = require('./IdWindow.jsx');

    module.exports = React.createClass({
        getInitialState: function() {
            return {userDataSource: {}};
        },
        componentDidMount: function () {
            this.setState({userDataSource: this.props.userDataSource});
        },
        render: function () {
            return (
                <div>
                    <IdGrid userDataSource = {this.state.userDataSource} userViewModel = {this.props.userViewModel}/>
                    <IdWindow userDataSource = {this.state.userDataSource} userViewModel = {this.props.userViewModel}/>
                </div>
            )
        }
    });

}(React, module));
