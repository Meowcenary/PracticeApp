var NewCharacter = React.createClass({
    handleClick() {
        var name = this.refs.name.value;
        var level = this.refs.level.value;
        var class_name = this.refs.class_name.value;
        var race = this.refs.race.value;
        var background = this.refs.background.value;
        var alignment = this.refs.alignment.value;
        var strength = this.refs.strength.value;
        var dexterity = this.refs.dexterity.value;
        var constitution = this.refs.constitution.value;
        var intelligence = this.refs.intelligence.value;
        var charisma = this.refs.charisma.value;
        console.log('success');
    },

    render() {
        return (
            <div>
                <h1>Create New Character</h1>

                <input ref='name' placeholder='Enter the name of the character' />
                <input ref='level' placeholder='Enter level' />
                <input ref='class_name' placeholder='Enter class' />
                <input ref='race' placeholder='Enter race' />
                <input ref='background' placeholder='Enter background' />
                <input ref='alignment' placeholder='Enter alignment' />
                <input ref='strength' placeholder='Enter strength' />
                <input ref='dexterity' placeholder='Enter dexterity' />
                <input ref='constitution' placeholder='Enter constitution' />
                <input ref='intelligence' placeholder='Enter intelligence' />
                <input ref='wisdom' placeholder='Enter wisdom' />
                <input ref='charisma' placeholder='Enter charisma' />

                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});