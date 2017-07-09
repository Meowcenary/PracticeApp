var Main = React.createClass({
    componentDidMount() {
        console.log('Component mounted');
    },

    render() {
        return  <div>
                    <NewCharacter />
                    <CharactersIndex />
                </div>
    }
});
