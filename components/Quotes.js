import quoteData from '../static/resources/quotes.json';

class Quotes extends React.Component{
  constructor(props) {
    super(props);
    this.chooseRandomQuote = this.chooseRandomQuote.bind(this);
    this.newQuote = this.newQuote.bind(this);
    this.state = {
      quotes: quoteData,
      chosen_quote: null,
      animation_delay: 0.5,
      quote_refresh_interval: 20
    };
  }
  componentDidMount() {
    let refreshInterval = this.state.quote_refresh_interval * 1000;
    if(this.state.chosen_quote){
      this.interval = setInterval(this.newQuote, refreshInterval);
    }else{
      this.chooseRandomQuote();
      this.interval = setInterval(this.newQuote, refreshInterval);
    }
  }

  newQuote(){
    document.getElementById('quote').style.opacity = 0;
    setTimeout(() => { 
      this.chooseRandomQuote();
      document.getElementById('quote').style.opacity = 1;
    }, this.state.animation_delay * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  chooseRandomQuote() {
    var random_quote_index = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    var quote_object = this.state.quotes[random_quote_index];
    this.setState({
      chosen_quote: (
        <p style={{fontSize: `1.5em`}}>
          <i>
            “{quote_object.quoteText}”
        </i>
          <br />
          - {quote_object.quoteAuthor? quote_object.quoteAuthor : `Unknown Author`}
        </p>
      )
    });
  }

  render(){
    return(
      <div id='quote'>
        <style jsx>
          {`
            #quote{
              transition: ${this.state.animation_delay}s;
              opacity: 1;
            }
          `}
        </style>
        {this.state.chosen_quote}
      </div>
    )
  }
}

export default Quotes;