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
                <div key={character.id}>
                    <CharactersDetails character={character}/>
                    <button onClick={this.handleDelete.bind (this, character.id)}>Delete</button>
                </div>
            )
        });

        return(
            <div>
                <h1>Characters</h1>
                {characters}
            </div>
        )
    }
});