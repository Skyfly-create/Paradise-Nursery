import bunnyEars from '../Data/Cactus/BunnyEars.webp';
import PinkEaster from '../Data/Cactus/PinkEaster.webp';
import Succulent from '../Data/Cactus/Succulent.webp';
import Anemone from '../Data/groundcover/Anemone.jpg';
import Bakain from '../Data/groundcover/Bakain.webp';
import CommonBamboo  from '../Data/Hedgeplants/Common-Bamboo.jpg';
import Leylandcypress  from '../Data/Hedgeplants/Leyland-cypress.jpg';
import RoundCactus  from '../Data/Hedgeplants/RoundCactus.webp';


const products = [
  {
    id: 1,
    name: "Bunny Ears Cactus",
    category:"Cactus",
    price: 15.99,
    description: "A unique cactus variety with bunny ear-shaped pads.",
    imageUrl: bunnyEars,
  },
  {
    id: 2,
    name: "Pink Easter",
    category:"Cactus",
    price: 22.50,
    description: "Lorem ipsum dolor sit amet,.",
    imageUrl: PinkEaster,
  },
  {
    id: 3,
    name: "Succulent",
    category:"Cactus",
    price: 20.00,
    description: "Lorem ipsum dolor sit amet.",
    imageUrl: Succulent,
  },
  
  {
    id: 4,
    name: "Anemone",
    category:"Ground Cover",
    price: 12.00,
    description: "Lorem ipsum dolor sit amet.",
    imageUrl: Anemone,
  },
  {
    id: 5,
    name: "Bakain",
    category:"Ground Cover",
    price: 14.00,
    description: "Lorem ipsum dolor sit amet.",
    imageUrl: Bakain,
  },
  
  {
    id: 6,
    name: "Common-Bamboo",
    category:"Hedgeplants",
    price: 14.00,
    description:"Lorem ipsum dolor sit amet.",
    imageUrl: CommonBamboo,
  },
  {
    id: 7,
    name: "Ley-land-cypress",
     category:"Hedgeplants",
    price: 14.00,
    description: "Lorem ipsum dolor sit amet.",
    imageUrl: Leylandcypress,
  },
  {
    id: 8,
    name: "RoundCactus",
     category:"Hedgeplants",
    price: 14.00,
    description: "A decorative cactus plant.",
    imageUrl: RoundCactus,
  },
];

export default products;