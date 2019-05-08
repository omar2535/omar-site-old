/**
 * 
 * @param {props} props to give 
 */
const Card = function(props){
  return(
    <div className = 'card'>
      <style jsx>{`
        .card{
          border-style: solid;
          border-width: 2px;
          border-color: white;
          border-radius: 5px;
          width: 70%;
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
          transform: scale(1.05);
        }
        .content{
          overflow-wrap: break-word;
        }
      `}</style>
      <a href={props.link} target="_blank"><h2>{props.title}</h2></a>
      <hr />
      <div className='content'>
        <p>{props.content}</p>
      </div>
    </div>
  )
};

export default Card;