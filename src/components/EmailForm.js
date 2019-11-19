import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <form
        id="signup-form"
        onSubmit={this.onSubmit}
        method="post"
        action="#"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <>
          <input type="hidden" name="bot-feild" value="email" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <div data-netlify-recaptcha="true" />
          <input type="submit" value="Get Notification" />
          <span className={`${message ? 'visible success' : ''} message`}>
            {message}
          </span>
        </>
      </form>
    );
  }
}

export default EmailForm;
