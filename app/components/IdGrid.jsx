(function (React, module, undefined) {

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
                <div id="grid"></div>
            )
        }
    });

}(React, module));

