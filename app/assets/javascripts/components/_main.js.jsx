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

    selectActivePane(pane_name) {
        this.setState({
            active_pane: pane_name
        })
    },

    render() {
        return  <div>
                    <button onClick={this.selectActivePane.bind(this, 'new_character_form')}>Add Character)1</button>
                    <button onClick={this.selectActivePane.bind(this, 'characters_index')}>Character Index</button>
                    <br/>
                    {this.activePane()}
                </div>
    }
});
