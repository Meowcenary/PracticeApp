var CharactersIndex = React.createClass({
    componentDidMount() {
        console.log('CharactersIndex mounted');
        $.getJSON('/api/v1/characters.json', (response) => { this.setState({ characters: response }) });
    },

    getInitialState() {
        return { characters: [] }
    },

    handleDelete(id) {
        $.ajax({
            url: "/api/v1/characters/" + id,
            type: 'DELETE',
            success(response) {
                console.log('successfully removed item')
            }
        });
    },

    render() {
        var characters = this.state.characters.map((character) => {
            return (
                <div className="col-md-6" key={character.id}>
                    <CharactersDetails character={character}/>
                    <button onClick={this.handleDelete.bind (this, character.id)}>Delete</button>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="col-lg-1 col-centered">
                    <h1>Characters</h1>
                </div>
                <div className="row">
                    {characters}
                </div>
            </div>
        )
    }
});