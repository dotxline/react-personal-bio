import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      email: "",
      text: ""
    };
    this.valueChange = this.valueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  valueChange(event) {
    return this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let object = {
      subject: this.refs.subject.value,
      email: this.refs.email.value,
      text: this.refs.text.value
    }
    axios.post("/sent", object).then(function (response) {
    }).catch(function (error) {
      console.log(error);
    });

    this.setState({
      subject: "",
      email: "",
      text: ""
    })

    document.getElementById("contact-content").innerHTML = "<p id='message'>Your message has been sent! I'll get back to you as soon as possible.</p>"
  }

  componentDidMount() {
    let button = document.getElementById("button");
    button.onclick = (event) => {
      let warning = document.getElementById("warning")
      if (this.state.subject === "") {
        event.preventDefault();
        warning.innerText = "Please enter your name"
      } else if (this.state.email === "") {
        event.preventDefault();
        warning.innerText = "Email is required"
      }
      else if (this.state.text === "") {
        event.preventDefault();
        warning.innerText = "Text field cannot be blank"
      }
      if (this.state.subject === "" && this.state.email === "" && this.state.text === "") {
        event.preventDefault();
        warning.innerText = "Input fields are empty."

      }
    }
  }

  render() {
    return (
      <div id="contact-content">
        <h3>Contact</h3>
        <p>e-mail: parkjjustin@gmail.com</p>
        <p>Send me a message directly!</p>
        <form action="/" method="post" onSubmit={this.handleSubmit}>
          <div id="name-label">
            <input ref="subject" type="text" name="subject" placeholder="Name" value={this.state.subject} onChange={this.valueChange} />
          </div>
          <div id="email-label">
            <input ref="email" type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={this.valueChange} />
          </div>
          <div id="message-label">
            <textarea ref="text" type="text" id="text" name="text" placeholder="Message" value={this.state.text} onChange={this.valueChange}></textarea>
          </div>
          <input id="button" type="submit" value="Submit" />
        </form>
        <div id="warning"></div>
      </div>

    );
  }
};

export default Contact;