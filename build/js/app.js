(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(React) {
    var App = require('./components/App.jsx');

    var render = function() {
        React.render(React.createElement(App, {}), document.body);
    };

    render();

}(React));

},{"./components/App.jsx":2}],2:[function(require,module,exports){
(function (React, module, undefined) {
    var IdGrid      = require('./IdGrid.jsx');
    var IdWindow    = require('./IdWindow.jsx');

    module.exports = React.createClass({displayName: "exports",
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(IdGrid, null), 
                    React.createElement(IdWindow, null)
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
        render: function () {
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
        render: function () {
            return (
                React.createElement("div", {id: "window"}, 
                    React.createElement(Form, null), 
                    React.createElement(SmartForm, null)
                )
            )
        }
    });

}(React, module));
},{"./Form.jsx":3,"./SmartForm.jsx":6}],6:[function(require,module,exports){
(function (React, $, module, undefined) {


    module.exports = React.createClass({displayName: "exports",
        _handleClickUpdate: function () {

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
