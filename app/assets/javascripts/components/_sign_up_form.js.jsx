var SignUpForm = React.createClass({
    handleInputChange(ev) {
      // Get a deep clone of the component's state before the input change.
      var nextState = _.cloneDeep(this.state);

      //Update the state of the component
      nextState[ev.target.name] = ev.target.value;

      // Update the component's state with the new state
      this.setState(nextState);
    },

    getInitialState() {
      return {
        email: '',
        password: '',
        password_confirmation: '',
        name: ''
      };
    },

    handleRegistrationClick(e) {
      $.ajax({
        method: "POST",
        url: "/users.json",
        data: {
          user: {
            email: this.state.email,
            uid: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            name: this.state.name,
            provider: "email"
          },
          authenticity_token: Functions.getMetaContent("csrf-token")
        }
      })
      .done(function(data){
        location.reload();
      }.bind(this));
    },

    render() {
      return (
          <form>
              <h1>Sign Up Form</h1>
              <input type='text'
                name='name'
                placeholder='name'
                value={this.state.name}
                onChange={this.handleInputChange} />

              <input type='email'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleInputChange} />

              <input type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.handleInputChange} />

              <input type='password'
                name='password_confirmation'
                placeholder='re-type password'
                value={this.state.password_confirmation}
                onChange={this.handleInputChange} />

              <button onClick={this.handleRegistrationClick}>sign up</button>
          </form>
      )
    }
});