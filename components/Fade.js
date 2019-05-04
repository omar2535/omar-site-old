const uuidv1 = require('uuid/v1');
// fade in on component ready
class Fade extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      uuid: uuidv1()
    };
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  // defaults to 2 seconds timer
  retrieveTimer(){
    return this.props.timer ? `${this.props.timer}` : '2s';
  }

  render() {
    return (
      <div className={this.state.visible ? `fadeIn_${this.state.uuid}` : 'fadeOut'}>
        <style jsx>
          {`
          .fadeOut{
            opacity:0;
            transition: opacity 0.2s;
          }
          .fadeIn_${this.state.uuid}{
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