var Main = React.createClass({
    componentDidMount() {
        console.log('Component mounted');
    },

    getInitialState() {
        return {
                active_pane: 'characters_index'
               }
    },

    activePane() {
        if(this.state.active_pane === 'characters_index') {
            return  <CharactersIndex />
        } else if(this.state.active_pane === 'new_character_form') {
            return <NewCharacter />
        }
    },

    toggleNewCharacterFormActive() {
        this.setState({
            active_pane: 'new_character_form'
        })
    },

    toggleCharactersIndexActive() {
        this.setState({
            active_pane: 'characters_index'
        })
    },

    render() {
        return  <div>
                    <button onClick={this.toggleNewCharacterFormActive}>Add Character</button>
                    <button onClick={this.toggleCharactersIndexActive}>Character Index</button>
                    <br/>
                    {this.activePane()}
                </div>
    }
});
