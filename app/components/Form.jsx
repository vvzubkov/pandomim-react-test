(function (React, module, undefined) {

    module.exports = React.createClass({
        render: function () {
            return (
                <form>
                    <fieldset>
                        <section>
                            <label className="label">Name</label>
                            <label className="input">
                                <input type="text" className="input" data-bind="value: name"/>
                            </label>
                        </section>
                        <section>
                            <label className="label">Email</label>
                            <label className="input">
                                <input type="text" className="input" data-bind="value: email"/>
                            </label>
                        </section>

                        <section>
                            <input type="checkbox" name="checkbox" data-bind="checked: is_admin"/>
                            <i></i>Admin
                        </section>
                    </fieldset>
                </form>
            )
        }
    });

}(React, module));
