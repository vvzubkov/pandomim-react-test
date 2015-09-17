(function (React, $, module, undefined) {


    module.exports = React.createClass({
        _handleClickUpdate: function () {

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
