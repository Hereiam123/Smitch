import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  renderAuthButton() {
    if (this.state.isSignedIn == null) {
      return <div>I don't know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>You are signed in</div>;
    } else {
      return <div>You are not signed in</div>;
    }
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
