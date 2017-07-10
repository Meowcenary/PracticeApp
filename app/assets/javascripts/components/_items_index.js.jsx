var ItemsIndex = React.createClass({
    componentDidMount() {
        console.log('ItemsIndex mounted');
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    },

    getInitialState() {
        return { items: [] }
    },

    handleDelete(id) {
        $.ajax({
            url: "/api/v1/items/" + id,
            type: 'DELETE',
            success(response) {
                console.log('successfully removed item')
            }
        });
    },

    handleEdit(id) {
        console.log(id);
    },

    render() {
        var items = this.state.items.map((item) => {
            return (
                    <div className="col-md-4 index-tile" key={item.id}>
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                        <button onClick={this.handleEdit.bind (this, item.id)}>Edit</button>
                        <button onClick={this.handleDelete.bind (this, item.id)}>Delete</button>
                    </div>
            )
        });

        return(
            <div className="container">
                <div className="col-lg-1 col-centered">
                    <h1>Items</h1>
                </div>
                <br/>
                <div className="row">
                    {items}
                </div>
            </div>
        )
    }
});