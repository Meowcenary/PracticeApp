// var NewCharacter = React.createClass({
//     handleClick() {
//         var name = this.refs.name.value;
//         var level = this.refs.level.value;
//         var class_name = this.refs.class_name.value;
//         var race = this.refs.race.value;
//         var background = this.refs.background.value;
//         var alignment = this.refs.alignment.value;
//         var strength = this.refs.strength.value;
//         var dexterity = this.refs.dexterity.value;
//         var constitution = this.refs.constitution.value;
//         var intelligence = this.refs.intelligence.value;
//         var wisdom = this.refs.wisdom.value;
//         var charisma = this.refs.charisma.value;
//
//         $.ajax({
//             url: '/api/v1/characters',
//             type: 'POST',
//             data: { character: {
//                                 name: name,
//                                 level: level,
//                                 char_class: class_name,
//                                 race: race,
//                                 background: background,
//                                 alignment: alignment,
//                                 strength: strength,
//                                 dexterity: dexterity,
//                                 constitution: constitution,
//                                 intelligence: intelligence,
//                                 wisdom: wisdom,
//                                 charisma: charisma,
//                                }
//                   },
//             success: (response) => {
//                 console.log('create new character successful', response);
//             }
//         });
//
//         this.clear_input();
//     },
//
//     clear_input() {
//         this.refs.name.value="";
//         this.refs.level.value="";
//         this.refs.class_name.value="";
//         this.refs.race.value="";
//         this.refs.background.value="";
//         this.refs.alignment.value="";
//         this.refs.strength.value="";
//         this.refs.dexterity.value="";
//         this.refs.constitution.value="";
//         this.refs.intelligence.value="";
//         this.refs.wisdom.value="";
//         this.refs.charisma.value="";
//     },
//
//     form() {
//         return (
//             <div>
//                 <h1>Create New Character</h1>
//                 <div className='cold-md-4'>
//                     <input ref='name' placeholder='Enter name' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='level' placeholder='Enter level' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='class_name' placeholder='Enter class' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='race' placeholder='Enter race' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='background' placeholder='Enter background' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='alignment' placeholder='Enter alignment' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='strength' placeholder='Enter strength' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='dexterity' placeholder='Enter dexterity' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='constitution' placeholder='Enter constitution' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='intelligence' placeholder='Enter intelligence' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='wisdom' placeholder='Enter wisdom' />
//                 </div>
//                 <div className='cold-md-4'>
//                     <input ref='charisma' placeholder='Enter charisma' />
//                 </div>
//
//                 <button onClick={this.handleClick}>Submit</button>
//             </div>
//         )
//     },
//
//     render() {
//         return this.form();
//     }
// });
