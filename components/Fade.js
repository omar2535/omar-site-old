// fade in on component ready
class Fade extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  // defaults to 2 seconds timer
  retrieveTimer(){
    console.log(this.props);
    return this.props.timer ? `${this.props.timer}` : '2s';
  }

  render() {
    return (
      <div className={this.state.visible ? 'fadeIn' : 'fadeOut'}>
        <style jsx>
          {`
          .fadeOut{
            opacity:0;
            transition: opacity 0.2s;
          }
          .fadeIn{
            opacity:1;
            transition: opacity ${this.retrieveTimer()};
          }
          `}
        </style>
        {this.props.children}
      </div>
    )
  }
};

export default Fade;