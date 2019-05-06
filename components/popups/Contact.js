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
        (<li style={{ fontSize: `3em`}} key={`${platform}-${info}`}>
          <a rel='external' target="_blank" href={info}><Icon /></a>
        </li>)
      )
    }
    return created_links;
  }

  render(){
    return (
      <div id='contact'>
        <style jsx>{`
        ul{ list-style: none; }
        #contact{ color: white; }
        h1{ text-align: center; }
        li{ font-size: 3em; }
      `}</style>
        <h1>Contact Information</h1>
        <ul>
          {this.createLinksToContacts()}
        </ul>
      </div>
    )
  }
}

export default Contact;