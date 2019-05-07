import { FaGithub, FaAt, FaTwitterSquare, FaLinkedin, FaAddressBook } from "react-icons/fa";

// function for contact information
class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contact_methods: [
        {
          platform: 'github',
          info: 'https://github.com/omar2535',
          icon: FaGithub
        },
        {
          platform: 'gmail',
          info: 'mailto:omar2535@alumni.ubc.ca',
          icon: FaAt
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
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
        (<a style={{ fontSize: `3em`, padding: `1em`, paddingBottom: 0}} key={`${platform}-${info}`}
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
    console.log(this.state);
  }

  handleSubmit(event){

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
        #message-input{
          height: 30%;
        }
        #name-input, #email-input, #subject-input{
          width: 100%;
        }
        textarea{
          width: 100%;
          resize: vertical;
          height: 3em;
        }
        #contact-form{
          margin: 2em;
        }
      `}</style>
        <h1>Contact Information</h1>
        <p>Would you like to chat?</p>
        <form id = 'contact-form' onSubmit={this.handleSubmit}>
          <label>
            Name:
            <br />
            <input id='name-input' name="name" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input id='email-input' name="email" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Subject:
            <br />
            <input id='subject-input' name="subject" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Message:
            <br />
            <textarea rows="8" id='message-input' name="message" type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        <div className='contact-icons'> {this.createLinksToContacts()} </div>
      </div>
    )
  }
}

export default Contact;