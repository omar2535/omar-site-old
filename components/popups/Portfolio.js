import Card from '../Card';

class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cards:[
        {
          title: 'Sample1',
          content: 'Sample 1',
          link: 'https://www.google.ca'
        },
        {
          title: 'Sample2',
          content: 'Sample 2',
          link: 'https://www.google.ca'
        },
        {
          title: 'Sample3',
          content: 'Sample 3',
          link: 'https://www.google.ca'
        },
        {
          title: 'Sample4',
          content: 'Sample 4',
          link: 'https://www.google.ca'
        },
        {
          title: 'Sample5',
          content: 'Sample 5',
          link: 'https://www.google.ca'
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