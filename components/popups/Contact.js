import { FaGithub, FaAt, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

// function for contact information
class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      github: 'https://github.com/omar2535',
      email: 'omar2535@alumni.ubc.ca',
      twitter: 'https://twitter.com/Omar_2535',
      linkedin: 'https://www.linkedin.com/in/omar2535/'
    };
  }

  render(){
    return (
      <div>
        <style jsx>{`
        ul{ list-style: none; }
        #contact{ color: white; }
        h3{ text-align: center; }
        li{ font-size: 3em; }
        a:visited { text-decoration: none; color:white; }
        a:hover { text-decoration: none; color:gray; }
        a:focus { text-decoration: none; color:white; }
        a:hover, a:active { text-decoration: none; color:gray }
        a{ color: white; }
      `}</style>
        <div id='contact'>
          <h3>Contact Information</h3>
          <ul>
            <li><a rel='external' href={`mailto:${this.state.email}`}><FaAt /></a></li>
            <li><a rel='external' href={this.state.linkedin} target="_blank"><FaLinkedin /></a></li>
            <li><a rel='external' href={this.state.github} target="_blank"><FaGithub /></a></li>
            <li><a rel='external' href={this.state.twitter} target="_blank"><FaTwitterSquare /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;