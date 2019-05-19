// class component for intro
class Intro extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      intro: ` Hi there! I'm Omar. I am a student at the University of British Columbia
               pursuing a degree in Physics and Computer Science.
               On my free time, I love to code and learn about a variety of subjects such as investing
               and interesting scientific topics. I also love to listen to podcasts and audio books. 
               Take a look around!`
    };
  }

  render(){
    return(
      <div className='intro'>
        <style jsx>
          {`
          .intro{
            text-align: center;
            color: white;
          }
          #profile-pict{
            width: 50%;
            height: auto;
            border-radius: 10em;
          }
          #intro-text{
            font-size: 2vw;
          }
          `}
        </style>
        <h1>Intro</h1>
        <img id='profile-pict' src="../../static/images/profile-pict.jpg" alt="Avatar"/>
        <p id='intro-text'>
          {this.state.intro}
        </p>
      </div>
    )
  }
}

export default Intro;