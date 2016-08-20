var db = require('./models');

//Card Array
var cards_list = [
{
_id: "578414ae4dda540700250522",
question: "What is Superman's guilty pleasure?",
answer: "Ben Affleck",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda540700250523",
question: "I'm sorry I couldn't finish my homework...",
answer: "the dog ate my laptop!",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda540700250524",
question: "I get by with a little help from _________.",
answer: "John Cena!",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda540700250525",
question: "_________ -- It's a trap!",
answer: "Monq's Chat room?",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda540700250526",
question: "The class field trip was completely ruined by _________.",
answer: "the guy in a clown suit",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda540700250527",
question: "What's my secret power?",
answer: "ngAnimate",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda540700250528",
question: "Why are there so many songs about rainbows?",
answer: "Leprachauns",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda540700250529",
question: "Where do babies come from?",
answer: "Netflix and Chill",
answerHidden: true,
__v: 0
},
{
_id: "578414ae4dda54070025052a",
question: "How do we do auth in Angular with Satellizer?",
answer: "I'm glad you asked.",
answerHidden: true,
__v: 0
},
{
_id: "57b642e2eb152903009a2d39",
question: "Pap John's is my alter ego...",
answer: "Payton Maning",
answerHidden: true,
__v: 0
},
{
_id: "57b64473eb152903009a2d3a",
question: "Here comes ____ down ____ lane.",
answer: "Satan, Satan",
answerHidden: true,
__v: 0
},
{
_id: "57b644d6eb152903009a2d3b",
question: "Johnny be ____.",
answer: "lame",
answerHidden: true,
__v: 0
},
{
_id: "57b6534eeb152903009a2d3c",
question: "Fly me to the _____.",
answer: "Moon",
answerHidden: true,
__v: 0
}
];

// remove all records that match {} -- which means remove ALL records
db.Card.remove({}, function(err, cards){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all cards');

    // create new records based on the array books_list
    db.Card.create(cards_list, function(err, cards){
      if (err) { return console.log('err', err); }
      console.log("created", cards.length, "cards");
      process.exit();
    });
  }
});