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
        a:visited { text-decoration: none; color:red; }
        a:hover { text-decoration: none; color:blue; }
        a:focus { text-decoration: none; color:yellow; }
        a:hover, a:active { text-decoration: none; color:black }
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