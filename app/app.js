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