var SignInForm = React.createClass({
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
        password: ''
      };
    },

    handleSignInClick(e) {
      $.ajax({
        method: "POST",
        url: "/users/sign_in.json",
        data: {
          user: {
            email: this.state.email,
            password: this.state.password
          },
          authenticity_token: Functions.getMetaContent("csrf-token")
        }
      })
      .done(function(data){
        location.reload();
      }.bind(this));
    },

    render() {
      return (<div>
        <form>
            <input type='email'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this._handleInputChange} />
            <input type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={this._handleInputChange} />
             <button onClick={this.props.selectActivePane('sign_up_form')} label={'Dick'}/>
            <input type='submit' onClick={this._handleSignInClick} defaultValue='login' />
        </form>
      </div>
      )
    }
});
