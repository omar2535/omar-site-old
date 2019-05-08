// class component for intro
class Intro extends React.Component{
  render(){
    return(
      <div className='Intro'>
        <style jsx>
          {`
          .Intro{
            text-align: center;
            color: white;
          }
          #profile-pict{
            width: 50%;
            height: auto;
            border-radius: 10em;
          }
          `}
        </style>
        <h1>Intro</h1>
        <img id='profile-pict' src="../../static/images/profile-pict.jpg" alt="Avatar"/>
        <p>
          Hi, my name is Omar. I am a programmer & student who loves
          to code in my spare time.
        </p>
      </div>
    )
  }
}

export default Intro;