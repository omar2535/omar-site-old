import { FaGithub, FaEnvelope, FaTwitterSquare, FaLinkedin, FaAddressBook } from "react-icons/fa";

// function for contact information
class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contact_methods: [
        {
          platform: 'gmail',
          info: 'mailto:omar2535@alumni.ubc.ca',
          icon: FaEnvelope
        },
        {
          platform: 'github',
          info: 'https://github.com/omar2535',
          icon: FaGithub
        },
        {
          platform: 'twitter',
          info: 'https://twitter.com/Omar_2535',
          icon: FaTwitterSquare
        },
        {
          platform: 'linkedin',
          info: 'https://www.linkedin.com/in/omar2535/',
          icon: FaLinkedin
        },
      ],
      contact_email: 'omar2535@alumni.ubc.ca'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // creates list elements for links to contact information
  createLinksToContacts(){
    let created_links = [];
    for(var i=0; i<this.state.contact_methods.length; i++){
      var current = this.state.contact_methods[i];
      var platform = current.platform;
      var info = current.info;
      var Icon = current.icon || FaAddressBook
      created_links.push(
        (<a style={{ fontSize: `3em`, margin: `1em`, paddingBottom: 0}} key={`${platform}-${info}`}
          rel='external' target="_blank" href={info}>
          <Icon />
        </a>)
      )
    }
    return created_links;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    var mail = document.createElement("a");
    var body = `Name: ${this.state.name} %0D%0AMessage: ${this.state.message} %0D%0AReturn email: ${this.state.email} %0D%0A`;
    mail.href = `mailto:${this.state.contact_email}?subject=${this.state.subject}&body=${body}`;
    mail.click();
    document.getElementById('contact-form').reset();
  }

  render(){
    return (
      <div id='contact'>
        <style jsx>{`
        ul { list-style: none; }
        #contact { color: white;}
        h1 { text-align: center; }
        p { text-align: center; }
        li{ font-size: 3em; }
        .contact-icons{
          bottom: 0;
        }
        #message-input:focus{
          background-color: white;
        }
        #name-input:focus{
          background-color: white;
        }
        #email-input:focus{
          background-color: white;
        }
        #subject-input:focus{
          background-color: white;
        }
        #message-input{
          height: 30%;
          background-color: rgb(211,211,211);
        }
        #name-input, #email-input, #subject-input{
          width: 100%;
          background-color: rgb(211,211,211);
        }
        textarea{
          width: 100%;
          resize: vertical;
          height: 3em;
        }
        #contact-form{
          margin: 2em;
        }
        .submit-button {
          -moz-box-shadow:inset 0px -3px 7px 0px #29bbff;
          -webkit-box-shadow:inset 0px -3px 7px 0px #29bbff;
          box-shadow:inset 0px -3px 7px 0px #29bbff;
          background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #2dabf9), color-stop(1, #0688fa));
          background:-moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
          background:-webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
          background:-o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
          background:-ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
          background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
          filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa',GradientType=0);
          background-color:#2dabf9;
          -moz-border-radius:3px;
          -webkit-border-radius:3px;
          border-radius:3px;
          border:1px solid #0b0e07;
          display:inline-block;
          cursor:pointer;
          color:#ffffff;
          font-family:Arial;
          font-size:15px;
          padding:9px 23px;
          text-decoration:none;
          text-shadow:0px 1px 0px #263666;
        }
        .submit-button:hover {
          background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0688fa), color-stop(1, #2dabf9));
          background:-moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
          background:-webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
          background:-o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
          background:-ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
          background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
          filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);
          background-color:#0688fa;
        }
        .submit-button:active {
          position:relative;
          top:1px;
        }
        .submit-button:focus {
          outline: 0 !important;
        }
        input{
          margin-bottom: 1em;
          height: 1.5em;
        }
        #contact{
          fontSize: 2vw
        }

      `}</style>
        <h1>Contact Information</h1>
        <p>Got a question or simply want to chat?</p>
        <form id = 'contact-form'>
          <label>
            Name *
            <br />
            <input id='name-input' name="name" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email Address *
            <br />
            <input id='email-input' name="email" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Subject *
            <br />
            <input id='subject-input' name="subject" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Message *
            <br />
            <textarea rows="8" id='message-input' name="message" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br/>
          <button className='submit-button' onClick={this.handleSubmit}>Submit</button>
        </form>
        <div className='contact-icons'> {this.createLinksToContacts()} </div>
      </div>
    )
  }
}

export default Contact;