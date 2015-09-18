(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(React) {
    var App = require('./components/App.jsx');

    var userDataSource = new kendo.data.DataSource({
        data: [
            {pk: "1", name: "Jone", email: "jone@example.ru", is_admin: true},
            {pk: "2", name: "Mary", email: "mary@example.ru", is_admin: false}
        ],
        schema: {
            model: { id: "pk" }
        }
    });

    var userViewModel = kendo.observable({
        pk: "",
        name: "",
        email: "",
        is_admin: false,
        startOver: function() {
            this.set("pk", "");
            this.set("name", "");
            this.set("email", "");
            this.set("is_admin", false);
        }
    });

    var render = function() {
        React.render(React.createElement(App, {userDataSource, userViewModel}), document.body);
    };

    render();

}(React));

},{"./components/App.jsx":2}],2:[function(require,module,exports){
(function (React, module, undefined) {
    var IdGrid      = require('./IdGrid.jsx');
    var IdWindow    = require('./IdWindow.jsx');

    module.exports = React.createClass({displayName: "exports",
        getInitialState: function() {
            return {userDataSource: {}};
        },
        componentDidMount: function () {
            this.setState({userDataSource: this.props.userDataSource});
        },
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(IdGrid, {userDataSource: this.state.userDataSource, userViewModel: this.props.userViewModel}), 
                    React.createElement(IdWindow, {userDataSource: this.state.userDataSource, userViewModel: this.props.userViewModel})
                )
            )
        }
    });

}(React, module));
},{"./IdGrid.jsx":4,"./IdWindow.jsx":5}],3:[function(require,module,exports){
(function (React, module, undefined) {

    module.exports = React.createClass({displayName: "exports",
        render: function () {
            return (
                React.createElement("form", null, 
                    React.createElement("fieldset", null, 
                        React.createElement("section", null, 
                            React.createElement("label", {className: "label"}, "Name"), 
                            React.createElement("label", {className: "input"}, 
                                React.createElement("input", {type: "text", className: "input", "data-bind": "value: name"})
                            )
                        ), 
                        React.createElement("section", null, 
                            React.createElement("label", {className: "label"}, "Email"), 
                            React.createElement("label", {className: "input"}, 
                                React.createElement("input", {type: "text", className: "input", "data-bind": "value: email"})
                            )
                        ), 

                        React.createElement("section", null, 
                            React.createElement("input", {type: "checkbox", name: "checkbox", "data-bind": "checked: is_admin"}), 
                            React.createElement("i", null), "Admin"
                        )
                    )
                )
            )
        }
    });

}(React, module));
},{}],4:[function(require,module,exports){
(function (React, module, undefined) {

    module.exports = React.createClass({displayName: "exports",
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

            $grid.kendoGrid({
                dataSource: userDataSource,
                height: 550,
                columns: [
                    { field: "name", title: "Name", template: "# if (is_admin) { # <strong>#= name #</strong> # } else { # #= name # # } #", width: "120px" },
                    { field: "email", title: "Email", width: "120px" },
                    { command: [
                        {
                            name: "userUpdate",
                            text: "Edit",
                            className: "ob-icon-only",
                            imageClass: "k-icon k-i-pencil",
                            click: function (e) {
                                // e.target is the DOM element representing the button
                                var tr = $(e.target).closest("tr"); // get the current table row (tr)
                                var data = this.dataItem(tr);
                                userViewModel.set("pk", data.pk);
                                userViewModel.set("name", data.name);
                                userViewModel.set("email", data.email);
                                userViewModel.set("is_admin", data.is_admin);

                                $window.data("kendoWindow").center();
                                $window.data("kendoWindow").open();
                            }
                        }
                    ], title: "&nbsp;", width: "130px" }],
                editable: "inline"
            });
            return (
                React.createElement("div", {id: "grid"})
            )
        }
    });

}(React, module));
},{}],5:[function(require,module,exports){
(function (React, module, undefined) {
    var Form        = require('./Form.jsx');
    var SmartForm   = require('./SmartForm.jsx');

    module.exports = React.createClass({displayName: "exports",
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
                React.createElement("div", {id: "window"}, 
                    React.createElement(Form, null), 
                    React.createElement(SmartForm, {userDataSource: this.props.userDataSource, userViewModel: this.props.userViewModel})
                )
            )
        }
    });

}(React, module));
},{"./Form.jsx":3,"./SmartForm.jsx":6}],6:[function(require,module,exports){
(function (React, $, module, undefined) {


    module.exports = React.createClass({displayName: "exports",
        _handleClickUpdate: function () {
            var $grid = $("#grid");
            var $window = $("#window");

            var userDataSource = this.props.userDataSource;
            var userViewModel = this.props.userViewModel;

            var dataItem = userDataSource.get(userViewModel.get("pk"));
            dataItem.set("name", userViewModel.get("name"));
            dataItem.set("email", userViewModel.get("email"));
            dataItem.set("is_admin", userViewModel.get("is_admin"));
            $window.data("kendoWindow").close();
        },
        _handleClickClose: function () {
            $("#window").data("kendoWindow").close();
        },
        render: function () {
            return (
                React.createElement("form", {className: "smart-form"}, 
                    React.createElement("footer", null, 
                        React.createElement("button", {id: "btn-edit-user", 
                                type: "button", 
                                className: "btn btn-primary", 
                                onClick: this._handleClickUpdate}, 
                            "Ok"
                        ), 
                        React.createElement("button", {type: "button", 
                                className: "btn btn-default", 
                                onClick: this._handleClickClose}, 
                            "Cancel"
                        )
                    )
                )
            )
        }
    });

}(React, jQuery, module));
},{}]},{},[1]);
