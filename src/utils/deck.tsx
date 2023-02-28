// type Suits = 'major' | 'cups' | 'wands' | 'swords' | 'pentacles';

import { gptDeck } from './gptDeck';

// interface Card {
//   suit: Suits;
//   rank: number;
// }

// const suits = ['cups', 'wands', 'swords', 'pentacles'];
// const values = [
//   'A',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   'Page',
//   'Knight',
//   'Queen',
//   'King',
// ];
// const majorArcana = [
//   'The Fool',
//   'The Magician',
//   'The High Priestess',
//   'The Empress',
//   'The Emperor',
//   'The Hierophant',
//   'The Lovers',
//   'The Chariot',
//   'Strength',
//   'The Hermit',
//   'Wheel of Fortune',
//   'Justice',
//   'The Hanged Man',
//   'Death',
//   'Temperance',
//   'The Devil',
//   'The Tower',
//   'The Star',
//   'The Moon',
//   'The Sun',
//   'Judgement',
//   'The World',
// ];

// export const createDeck = () => {
//   const deck = [...fullDeck];

//   return deck;
// };

export class Deck {
  //? shouldn't need a constructor unless passing in custom deck
  //   constructor(private deck: Card[]) {}

  //? initialise with a copy of fullDeck
  deck: Card[] = [...gptDeck];
  chosenCards: Card[] = [];

  //* Removes a random card from deck and adds to selected array
  public drawCard(): Card {
    // console.log('deck before', this.deck);

    const randomIndex = Math.floor(Math.random() * this.deck.length);
    const selectedCard = this.deck.splice(randomIndex, 1)[0];
    this.chosenCards.push(selectedCard);

    // console.log('selected', selectedCard);
    // console.log('deck after', this.deck);
    // console.log('removed', this.chosenCards);

    return selectedCard;
  }
}

export interface Card {
  title: string;
  arcana: string;
  image?: string;
  description: {
    upright: string;
    reversed: string;
  };
  link?: string;
}

export const fullDeck: Card[] = [
  {
    title: '0 The Fool',
    arcana: 'major',
    image: '0-fool',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '1 The Magician',
    arcana: 'major',
    image: '1-magician',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '2 The High Priestess',
    arcana: 'major',
    image: '2-high-priestess',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '3 The Empress',
    arcana: 'major',
    image: '3-empress',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '4 The Emperor',
    arcana: 'major',
    image: '4-emperor',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '5 The Hierophant',
    arcana: 'major',
    image: '5-hierophant',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '6 The Lovers',
    arcana: 'major',
    image: '6-lovers',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '7 The Chariot',
    arcana: 'major',
    image: '7-chariot',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '8 Strength',
    arcana: 'major',
    image: '8-strength',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '9 The Hermit',
    arcana: 'major',
    image: '9-hermit',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '10 Wheel of Fortune',
    arcana: 'minor',
    image: '10-wheelof-fortune',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '11 Justice',
    arcana: 'major',
    image: '11-justice',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '12 The Hanged Man',
    arcana: 'major',
    image: '12-hanged-man',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '13 Death',
    arcana: 'major',
    image: '13-death',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '14 Temperance',
    arcana: 'major',
    image: '14-temperance',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '15 The Devil',
    arcana: 'major',
    image: '15-devil',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '16 The Tower',
    arcana: 'major',
    image: '16-tower',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '17 The Star',
    arcana: 'major',
    image: '17-star',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '18 The Moon',
    arcana: 'major',
    image: '18-moon',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '19 The Sun',
    arcana: 'major',
    image: '19-sun',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '20 Judgment',
    arcana: 'major',
    image: '20-judgment',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '21 The World',
    arcana: 'major',
    image: '21-world',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'King of Coins',
    arcana: 'minor',
    image: 'coins-king',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Queen of Coins',
    arcana: 'minor',
    image: 'coins-queen',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Knight of Coins',
    arcana: 'minor',
    image: 'coins-knight',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Page of Coins',
    arcana: 'minor',
    image: 'coins-page',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Ace of Coins',
    arcana: 'minor',
    image: 'coins-ace',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '2 of Coins',
    arcana: 'minor',
    image: 'coins2',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '3 of Coins',
    arcana: 'minor',
    image: 'coins3',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '4 of Coins',
    arcana: 'minor',
    image: 'coins4',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '5 of Coins',
    arcana: 'minor',
    image: 'coins5',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '6 of Coins',
    arcana: 'minor',
    image: 'coins6',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '7 of Coins',
    arcana: 'minor',
    image: 'coins7',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '8 of Coins',
    arcana: 'minor',
    image: 'coins8',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '9 of Coins',
    arcana: 'minor',
    image: 'coins9',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '10 of Coins',
    arcana: 'minor',
    image: 'coins10',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'King of Cups',
    arcana: 'minor',
    image: 'cups-king',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Queen of Cups',
    arcana: 'minor',
    image: 'cups-queen',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Knight of Cups',
    arcana: 'minor',
    image: 'cups-knight',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Page of Cups',
    arcana: 'minor',
    image: 'cups-page',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Ace of Cups',
    arcana: 'minor',
    image: 'cups-ace',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '2 of Cups',
    arcana: 'minor',
    image: 'cups2',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '3 of Cups',
    arcana: 'minor',
    image: 'cups3',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '4 of Cups',
    arcana: 'minor',
    image: 'cups4',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '5 of Cups',
    arcana: 'minor',
    image: 'cups5',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '6 of Cups',
    arcana: 'minor',
    image: 'cups6',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '7 of Cups',
    arcana: 'minor',
    image: 'cups7',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '8 of Cups',
    arcana: 'minor',
    image: 'cups8',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '9 of Cups',
    arcana: 'minor',
    image: 'cups9',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '10 of Cups',
    arcana: 'minor',
    image: 'cups10',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'King of Swords',
    arcana: 'minor',
    image: 'swords-king',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Queen of Swords',
    arcana: 'minor',
    image: 'swords-queen',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Knight of Swords',
    arcana: 'minor',
    image: 'swords-knight',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Page of Swords',
    arcana: 'minor',
    image: 'swords-page',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Ace of Swords',
    arcana: 'minor',
    image: 'swords-ace',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '2 of Swords',
    arcana: 'minor',
    image: 'swords2',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '3 of Swords',
    arcana: 'minor',
    image: 'swords3',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '4 of Swords',
    arcana: 'minor',
    image: 'swords4',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '5 of Swords',
    arcana: 'minor',
    image: 'swords5',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '6 of Swords',
    arcana: 'minor',
    image: 'swords6',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '7 of Swords',
    arcana: 'minor',
    image: 'swords7',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '8 of Swords',
    arcana: 'minor',
    image: 'swords8',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '9 of Swords',
    arcana: 'minor',
    image: 'swords9',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '10 of Swords',
    arcana: 'minor',
    image: 'swords10',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'King of Wands',
    arcana: 'minor',
    image: 'wands-king',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Queen of Wands',
    arcana: 'minor',
    image: 'wands-queen',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Knight of Wands',
    arcana: 'minor',
    image: 'wands-knight',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Page of Wands',
    arcana: 'minor',
    image: 'wands-page',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: 'Ace of Wands',
    arcana: 'minor',
    image: 'wands-ace',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '2 of Wands',
    arcana: 'minor',
    image: 'wands2',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '3 of Wands',
    arcana: 'minor',
    image: 'wands3',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '4 of Wands',
    arcana: 'minor',
    image: 'wands4',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '5 of Wands',
    arcana: 'minor',
    image: 'wands5',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '6 of Wands',
    arcana: 'minor',
    image: 'wands6',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '7 of Wands',
    arcana: 'minor',
    image: 'wands7',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '8 of Wands',
    arcana: 'minor',
    image: 'wands8',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '9 of Wands',
    arcana: 'minor',
    image: 'wands9',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
  {
    title: '10 of Wands',
    arcana: 'minor',
    image: 'wands10',
    description: {
      upright: '',
      reversed: '',
    },
    link: '',
  },
];
