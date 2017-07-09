var CharactersIndex = React.createClass({
    componentDidMount() {
        console.log('Component mounted');
        $.getJSON('/api/v1/characters.json', (response) => { this.setState({ characters: response }) });
    },

    getInitialState() {
        return { characters: [] }
    },

    render() {
        var characters = this.state.characters.map((character) => {
            return (
                <div key={character.id}>
                    <CharactersDetails character={character}/>
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