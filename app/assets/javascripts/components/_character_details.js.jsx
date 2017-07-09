var CharactersDetails = React.createClass({
    render() {
        character = this.props.character

        return <div>
            <br/>
            <h2>Name: {character.name}</h2>
            <h2>Level: {character.level}</h2>
            <h3>Class: {character.char_class}</h3>
            <h3>Race: {character.race}</h3>
            <br/>
            <p>Background: {character.background}</p>
            <p>Alignment: {character.alignment}</p>
            <p>Strength: {character.strength}</p>
            <p>Dexterity: {character.dexterity}</p>
            <p>Constitution: {character.constitution}</p>
            <p>Intelligence: {character.intelligence}</p>
            <p>Wisdom: {character.wisdom}</p>
            <p>Charisma: {character.charisma}</p>
            <br/>
        </div>
    }
});