'use strict';
$(function(){
function shuffleForNewGame() {
  function shuffle(deck) {
      var i = deck.length,
          j = 0,
          temp;
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          temp = deck[i];
          deck[i] = deck[j];
          deck[j] = temp;
      }
      return deck;
  };

  var deal = [];
  var Card = function(name, color, suit, rank, source, position){
    this.name = name;
    this.color = color;
    this.suit = suit;
    this.rank = rank;
    this.position = position; 
  }

  var HA = new Card ('HA','red','hearts',1,'../images/AH.png');
  var H2 = new Card ('H2','red','hearts',2);
  var H3 = new Card ('H3','red','hearts',3);
  var H4 = new Card ('H4','red','hearts',4);
  var H5 = new Card ('H5','red','hearts',5);
  var H6 = new Card ('H6','red','hearts',6);
  var H7 = new Card ('H7','red','hearts',7);
  var H8 = new Card ('H8','red','hearts',8);
  var H9 = new Card ('H9','red','hearts',9);
  var H1 = new Card ('H1','red','hearts',10);
  var HJ = new Card ('HJ','red','hearts',11);
  var HQ = new Card ('HQ','red','hearts',12);
  var HK = new Card ('HK','red','hearts',13);
  var DA = new Card ('DA','red','diamonds',1);
  var D2 = new Card ('D2','red','diamonds',2);
  var D3 = new Card ('D3','red','diamonds',3);
  var D4 = new Card ('D4','red','diamonds',4);
  var D5 = new Card ('D5','red','diamonds',5);
  var D6 = new Card ('D6','red','diamonds',6);
  var D7 = new Card ('D7','red','diamonds',7);
  var D8 = new Card ('D8','red','diamonds',8);
  var D9 = new Card ('D9','red','diamonds',9);
  var D1 = new Card ('D1','red','diamonds',10);
  var DJ = new Card ('DJ','red','diamonds',11);
  var DQ = new Card ('DQ','red','diamonds',12);
  var DK = new Card ('DK','red','diamonds',13);
  var CA = new Card ('CA','black','clubs',1);
  var C2 = new Card ('C2','black','clubs',2);
  var C3 = new Card ('C3','black','clubs',3);
  var C4 = new Card ('C4','black','clubs',4);
  var C5 = new Card ('C5','black','clubs',5);
  var C6 = new Card ('C6','black','clubs',6);
  var C7 = new Card ('C7','black','clubs',7);
  var C8 = new Card ('C8','black','clubs',8);
  var C9 = new Card ('C9','black','clubs',9);
  var C1 = new Card ('C1','black','clubs',10);
  var CJ = new Card ('CJ','black','clubs',11);
  var CQ = new Card ('CQ','black','clubs',12);
  var CK = new Card ('CK','black','clubs',13);
  var SA = new Card ('SA','black','spades',1);
  var S2 = new Card ('S2','black','spades',2);
  var S3 = new Card ('S3','black','spades',3);
  var S4 = new Card ('S4','black','spades',4);
  var S5 = new Card ('S5','black','spades',5);
  var S6 = new Card ('S6','black','spades',6);
  var S7 = new Card ('S7','black','spades',7);
  var S8 = new Card ('S8','black','spades',8);
  var S9 = new Card ('S9','black','spades',9);
  var S1 = new Card ('S1','black','spades',10);
  var SJ = new Card ('SJ','black','spades',11);
  var SQ = new Card ('SQ','black','spades',12);
  var SK = new Card ('SK','black','spades',13);

  var newShuffle = shuffle([HA,H2,H3,H4,H5,H6,H7,H8,H9,H1,HJ,HQ,HK,DA,D2,D3,D4,D5,D6,D7,D8,D9,D1,DJ,DQ,DK,CA,C2,C3,C4,C5,C6,C7,C8,C9,C1,CJ,CQ,CK,SA,S2,S3,S4,S5,S6,S7,S8,S9,S1,SJ,SQ,SK]);

  function logArrayElements(element, index, array) {
    array[index].position = index + 1;
    console.log(array[index].name + ' position: ' + (index + 1) + ' ' + array[index].position);
  }

  newShuffle.forEach(logArrayElements);
  console.log(newShuffle);
};

var $newGame = $('#new-game')[0];
$("#new-game").click(function() {
  shuffleForNewGame();
});

});