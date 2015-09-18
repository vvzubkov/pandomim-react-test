(function (React, $, module, undefined) {


    module.exports = React.createClass({
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
                <form className="smart-form">
                    <footer>
                        <button id="btn-edit-user"
                                type="button"
                                className="btn btn-primary"
                                onClick={this._handleClickUpdate}>
                            Ok
                        </button>
                        <button type="button"
                                className="btn btn-default"
                                onClick={this._handleClickClose}>
                            Cancel
                        </button>
                    </footer>
                </form>
            )
        }
    });

}(React, jQuery, module));
