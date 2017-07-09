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
        var wisdom = this.refs.wisdom.value;
        var charisma = this.refs.charisma.value;

        $.ajax({
            url: '/api/v1/characters',
            type: 'POST',
            data: { character: {
                                name: name,
                                level: level,
                                char_class: class_name,
                                race: race,
                                background: background,
                                alignment: alignment,
                                strength: strength,
                                dexterity: dexterity,
                                constitution: constitution,
                                intelligence: intelligence,
                                wisdom: wisdom,
                                charisma: charisma,
                               }
                  },
            success: (response) => {
                console.log('create new character successful', response);
            }
        });
    },

    form() {
        return (
            <div>
                <h1>Create New Character</h1>

                <input ref='name' placeholder='Enter name' />
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
    },

    render() {
        return this.form();
    }
});