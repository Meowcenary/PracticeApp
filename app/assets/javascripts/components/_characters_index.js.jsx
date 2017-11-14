// var CharactersIndex = React.createClass({
//     componentDidMount() {
//         console.log('CharactersIndex mounted');
//         $.getJSON('/api/v1/characters.json', (response) => { this.setState({ characters: response }) });
//     },
//
//     getInitialState() {
//         return { characters: [] }
//     },
//
//     getCharacters() {
//         $.getJSON('/api/v1/characters.json', (response) => { this.setState({ characters: response }) });
//     },
//
//     handleDelete(id) {
//         $.ajax({
//             url: "/api/v1/characters/" + id,
//             type: 'DELETE',
//             success(response) {
//                 console.log('successfully removed character');
//             }
//         });
//     },
//
//     deleteAll() {
//         $.ajax({
//             url: "/api/v1/characters/delete_all",
//             type: 'PUT',
//             success(response) {
//                 console.log('successfully removed all characters')
//             }
//         })
//     },
//
//     handleEdit(id) {
//         console.log(id);
//     },
//
//     handleInfoSheet(id) {
//         var character = this.findCharacterById(id);
//
//         this.setState({
//             character: character,
//             characters: []
//         })
//     },
//
//     get_char_ids() {
//         char_ids = []
//         for (index in this.state.characters) {
//             character = this.state.characters[index];
//             char_ids.push(character.id)
//         }
//
//         return char_ids
//     },
//
//     findCharacterById(id) {
//         for (index in this.state.characters) {
//             character = this.state.characters[index]
//             console.log(character);
//             if (character.id == id) {
//                 return character;
//             }
//         }
//
//         return null;
//     },
//
//     returnToCharactersIndex() {
//         this.getCharacters();
//     },
//
//     render() {
//         var characters = this.state.characters.map((character) => {
//             return (
//                 <div className="col-md-4 index-tile" key={character.id}>
//                     <CharactersDetails character={character} />
//                     <button onClick={this.handleEdit.bind (this, character.id)}>Edit</button>
//                     <button onClick={this.handleDelete.bind (this, character.id)}>Delete</button>
//                     <button onClick={this.handleInfoSheet.bind (this, character.id)}>Info Sheet</button>
//                 </div>
//             )
//         });
//
//         if (this.state.character != null) {
//             var character_info_sheet = <CharacterInformationSheet character={this.state.character} returnToCharIndex={this.returnToCharactersIndex}/>
//         }
//
//         return(
//             <div className="container-fluid">
//                 <div className="col-lg-1 col-centered">
//                     <h1>Characters</h1>
//                 </div>
//                 <div className="row">
//                     {characters}
//                     {character_info_sheet}
//                 </div>
//             </div>
//         )
//     }
// });
