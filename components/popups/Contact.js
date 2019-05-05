import { FaGithub } from "react-icons/fa";

function Contact(props){
  return(
    <div>
      <style jsx>{`
        ul{
         list-style: none;
        }
        #contact{
          color: white;
        }
        h3{
          text-align: center;
        }
        li{
          font-size: 3em;
        }
        a:visited { text-decoration: none; color:white; }
        a:hover { text-decoration: none; color:gray; }
        a:focus { text-decoration: none; color:white; }
        a:hover, a:active { text-decoration: none; color:gray }
      `}

      </style>
      <div id='contact'>
        <h3>Contact Information</h3>
        <ul>
          <li><a href="https://github.com/omar2535"><FaGithub /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;