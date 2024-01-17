/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "local";
const collection = "products";

// The current database to use.
use('local');

// Create a new collection.
db.createCollection('products');

// Insert data in collection
db.products.insertMany([
  {
    title: "King Cobra Taktiskt Quick Release Bälte Nylon",
    img: "https://cdn.starwebserver.se/shops/garderoben-sweden-ab/files/cache/20220419-001_king-cobra-tactical-belt-blk_grande.png?_=1681891291",
    short:
      "Det perfekta skärpet i robust nylon för att hålla uppe dina fritidsbyxor.",
    long: "Toppkvalitet taktiskt bälte med kobra spänne. Bältet kan hanteras även i nödläge med handskar på. Tillverkad av nylon och Zink alloy-spänne som är utvecklad främst för polis och militärbruk. Men kan också användas till friluftsaktiviteter. Hållbar spänne, tillverkad av Zink alloy. Ett perfekt bälte till dina taktiska friluftsbyxor!",
    pris: 299,
  },
  {
    title: "Brandit Bälte Snabbspänne 130x3,5cm",
    img: "https://cdn.starwebserver.se/shops/garderoben-sweden-ab/files/cache/7008-70_grande.png?_=1675691848",
    short: "Quick release spänne.",
    long: "Bälte med ett snabb stängning och quick release spänne – Brandit Belt Fast closure. MILITÄRBÄLTE Måtten är med längden 130 cm och bredden 3,5 cm. Finns i färgerna Woodland / Black / Olivgrön / Marinblå / Dark Camo / Camel.",
    pris: 129,
  },
  {
    title: "Viper Tre Kronor Taktiskt Bälte Nylon",
    img: "https://cdn.starwebserver.se/shops/garderoben-sweden-ab/files/cache/20220417-002_viper-tre-kronor-tactical-belt-od_grande.png?_=1681892311",
    short:
      "Det perfekta skärpet i robust nylon för att hålla uppe dina fritidsbyxor.",
    long: "En favorit med tre kronor tryckt på spännet! Tack vare det enkla quick release spännet på skärpet kan bältet hanteras även i nödläge med handskar på. Du behöver endast trycka på mitt knappen på spännet för att låsa upp bältet. Tillverkad av nylon och Zink alloy-spänne som är utvecklad främst för polis och militärbruk.",
    pris: 199,
  },
]);
