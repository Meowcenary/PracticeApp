var NewItem = React.createClass({
    handleClick() {
        var name = this.refs.name.value;
        var description = this.refs.description.value;

        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: {
                           name: name,
                           description: description
                          }
                  },
            success: (response) => {
                console.log('create new item successful', response);
            }
        });
    },

    form() {
            return (
                <div>
                    <h1>Create New Item</h1>

                    <input ref='name' placeholder='Enter name' />
                    <input ref='description' placeholder='Enter description' />

                    <button onClick={this.handleClick}>Submit</button>
                </div>
            )
    },

    render() {
        return this.form();
    }
});