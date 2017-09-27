var Main = React.createClass({
    componentWillMount() {
        //this is the current root and entry point which isn't great, but works for now
        $.getJSON('/auth/is_signed_in.json', (response) => {
            this.setState({signed_in: response.signed_in});
            if(response.signed_in == true) {
                console.log('signed in')
            } else {
                console.log('not signed in')
            }
        });
    },

    componentDidMount() {
        // if(this.state.signed_in === false) {
        //     this.state.active_pane = 'sign_in_form'
        // }

        console.log('Main mounted');
    },

    getInitialState() {
        return {
                active_pane: 'characters_index',
                signed_in: null
               }
    },

    activePane() {
        if(this.state.signed_in === true) {
            if(this.state.active_pane === 'characters_index') {
                return  <CharactersIndex />
            } else if(this.state.active_pane === 'new_character_form') {
                return <NewCharacter />
            } else if(this.state.active_pane === 'items_index') {
                return <ItemsIndex />
            } else if(this.state.active_pane === 'new_item_form') {
                return <NewItem />
            }
        } else {
                if(this.state.active_pane === 'sign_up_form') {
                    return <SignUpForm />
                } else {
                    return <SignInForm selectActivePane={this.selectActivePane}/>
                }
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
