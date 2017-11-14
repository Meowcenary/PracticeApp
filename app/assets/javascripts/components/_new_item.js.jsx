// var NewItem = React.createClass({
//     handleClick() {
//         var name = this.refs.name.value;
//         var description = this.refs.description.value;
//
//         $.ajax({
//             url: '/api/v1/items',
//             type: 'POST',
//             data: { item: {
//                            name: name,
//                            description: description
//                           }
//                   },
//             success: (response) => {
//                 console.log('create new item successful', response);
//             }
//         });
//     },
//
//     clear_input() {
//         this.refs.name.value = "";
//         this.refs.description.value = "";
//     },
//
//     form() {
//             return (
//                 <div>
//                     <h1>Create New Item</h1>
//                     <div className='cold-md-4'>
//                         <input ref='name' placeholder='enter name' />
//                     </div>
//                     <div className='cold-md-4'>
//                         <input ref='description' placeholder='enter description' />
//                     </div>
//
//                     <button onClick={this.handleClick}>Submit</button>
//                 </div>
//             )
//     },
//
//     render() {
//         return this.form();
//     }
// });
