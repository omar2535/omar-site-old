import Card from '../Card';

class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cards:[
        {
          title: 'Omar-site',
          content: `Omar\'s cool site that he made on a whim. The site
                    is still in the process of development.`,
          link: 'https://github.com/omar2535/omar-site'
        },
        {
          title: 'Stock Scraper API',
          content: `🥄 A scraper written in javascript which uses express and node to
                    bundle up data scraped from Yahoo Finance and serve it as a REST API.`,
          link: 'https://github.com/omar2535/stock-scraper'
        },
        {
          title: 'Element Replacer',
          content: '🔄 A fun little chrome extension to replace html elements.',
          link: 'https://github.com/omar2535/ElementReplacer'
        },
        {
          title: 'Memory Modifier',
          content: `💻 A collection of scripts which modifies the memory of 
                    video games at runtime. It features both external and internal
                    memory modification.`,
          link: 'https://github.com/omar2535/Reverse-Learngineering'
        },
        {
          title: 'Transit App',
          content: `🚇 A transit app built in class which pulls from the Vancouver Translink bus
                    and tells users where and when each bus is.`,
          link: 'https://github.com/omar2535/TransitApp'
        },
      ]
    };
  }

  // returns array of touples 
  // each touple contains information needed for a card component
  pairUpCards(){
    var index = 0;
    var pair = [];
    var accumulated = [];
    while(index < this.state.cards.length){
      pair.push(this.state.cards[index]);
      if(index % 2 == 1){
        accumulated.push(pair);
        pair = [];
      }
      index ++;
      if(index == this.state.cards.length && pair.length != 0)
        accumulated.push(pair);
    }
    return accumulated;
  }


  createCards() {
    var arrayOfCardInfoTuples = this.pairUpCards();
    var createdCardComponents = [];
    for(var i=0; i<arrayOfCardInfoTuples.length; i++){
      var currentCardTuple = arrayOfCardInfoTuples[i];
      createdCardComponents.push(this.createCardPairComponent(currentCardTuple[0], currentCardTuple[1], i));
    }
    return createdCardComponents;
  }


  // creates a card pair based on card inputs given & unique key to stop react from warning
  // should probably be moved into it's own component
  createCardPairComponent(cardOne, cardTwo, key){
    return(
      <div className='card-pair' key={key}>
        <style jsx>
          {`
            .card-pair{
              display: flex;
              justify-content: space-evenly;
            }
            @media screen and (max-width: 700px) {
              .card-pair{
                flex-direction: column;
                align-items: center;
              }
            }
          `}
        </style>
        {cardOne ? <Card id='firstCard' title={cardOne.title} content={cardOne.content} link={cardOne.link} /> : null}
        {cardTwo ? <Card id='secondCard' title={cardTwo.title} content={cardTwo.content} link={cardTwo.link} /> : null}
      </div>
    )
  }

  render(){
    return (
      <div id='portfolio'>
        <style jsx>{`
          h1{ text-align: center; }
          #portfolio{ color: white; }
        `}
        </style>
        <h1> Portfolio </h1>
        {this.createCards()}
      </div>
    )
  }
}

export default Portfolio;