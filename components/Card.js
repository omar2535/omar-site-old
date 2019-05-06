/**
 * 
 * @param {props} props to give 
 */
const Card = function(props){
  return(
    <div className = 'card'>
      <style jsx>{`
        .card{
          border-style: dotted;
          border-width: 2px;
          border-color: white;
          border-radius: 5px;
          width: 45%;
          height: auto;
          transition: 0.1s;
          margin: 10px;
        }
        hr{
          margin-top: 0px;
          margin-bottom: 0px;
          opacity: 0;
        }
        h2{
          text-align: center;
          margin-top: 0px;
          margin-bottom: 0px;
          overflow-wrap: break-word;
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 gray;
        }
        .content{
          overflow-wrap: break-word;
        }
      `}</style>
      <h2>{props.title}</h2>
      <hr />
      <div className='content'>
        <p>{props.content}</p>
        <a href={props.link}>{props.link}</a>
      </div>
    </div>
  )
};

export default Card;