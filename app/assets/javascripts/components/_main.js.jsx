var Main = React.createClass({
    componentDidMount() {
        console.log('Main mounted');
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
        } else if(this.state.active_pane === 'items_index') {
            return <ItemsIndex />
        } else if(this.state.active_pane === 'new_item_form') {
            return <NewItem/>
        }
    },

    navButtons() {
        return <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand">Game Manager</a>
                    <button onClick={this.selectActivePane.bind(this, 'new_character_form')}>Add Character</button>
                    <button onClick={this.selectActivePane.bind(this, 'characters_index')}>Character Index</button>
                    <button onClick={this.selectActivePane.bind(this, 'new_item_form')}>Add Item</button>
                    <button onClick={this.selectActivePane.bind(this, 'items_index')}>Items Index</button>
                </div>
                <ul class="nav navbar-nav">
                </ul>
            </div>
        </nav>
    },

    selectActivePane(pane_name) {
        this.setState({
            active_pane: pane_name
        })
    },

    render() {
        return  <div>
                    {this.navButtons()}
                    <br/>
                    {this.activePane()}
                </div>
    }
});
