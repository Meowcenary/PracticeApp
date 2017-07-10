//class to display the current character information in detail
var CharacterInformationSheet = React.createClass({
    render() {
        var character = this.props.character
        debugger;
        return <div>
            <Button onClick={this.props.returnToCharIndex}>Character Index</Button>
            <CharactersDetails character={character}/>
        </div>
    }
});