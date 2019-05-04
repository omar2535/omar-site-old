const uuidv1 = require('uuid/v1');
// fade in on component ready
class Fade extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      name: props.name ? props.name : 'general'
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
      <div className={this.state.visible ? `fadeIn_${this.state.name}` : `fadeOut_${this.state.name}`}>
        <style jsx>
          {`
          .fadeOut_${this.state.name}{
            opacity:0;
            transition: opacity 0.2s;
          }
          .fadeIn_${this.state.name}{
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