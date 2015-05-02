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
  var Card = function(name, color, suit, rank, url, position){
    this.name = name;
    this.color = color;
    this.suit = suit;
    this.rank = rank;
    this.url = url;
    this.position = position; 
  }

  var HA = new Card ('HA','red','hearts',1,'../images/HA.png');
  var H2 = new Card ('H2','red','hearts',2,'../images/H2.png');
  var H3 = new Card ('H3','red','hearts',3,'../images/H3.png');
  var H4 = new Card ('H4','red','hearts',4,'../images/H4.png');
  var H5 = new Card ('H5','red','hearts',5,'../images/H5.png');
  var H6 = new Card ('H6','red','hearts',6,'../images/H6.png');
  var H7 = new Card ('H7','red','hearts',7,'../images/H7.png');
  var H8 = new Card ('H8','red','hearts',8,'../images/H8.png');
  var H9 = new Card ('H9','red','hearts',9,'../images/H9.png');
  var H1 = new Card ('H1','red','hearts',10,'../images/H1.png');
  var HJ = new Card ('HJ','red','hearts',11,'../images/HJ.png');
  var HQ = new Card ('HQ','red','hearts',12,'../images/HQ.png');
  var HK = new Card ('HK','red','hearts',13,'../images/HK.png');
  var DA = new Card ('DA','red','diamonds',1,'../images/DA.png');
  var D2 = new Card ('D2','red','diamonds',2,'../images/D2.png');
  var D3 = new Card ('D3','red','diamonds',3,'../images/D3.png');
  var D4 = new Card ('D4','red','diamonds',4,'../images/D4.png');
  var D5 = new Card ('D5','red','diamonds',5,'../images/D5.png');
  var D6 = new Card ('D6','red','diamonds',6,'../images/D6.png');
  var D7 = new Card ('D7','red','diamonds',7,'../images/D7.png');
  var D8 = new Card ('D8','red','diamonds',8,'../images/D8.png');
  var D9 = new Card ('D9','red','diamonds',9,'../images/D9.png');
  var D1 = new Card ('D1','red','diamonds',10,'../images/D1.png');
  var DJ = new Card ('DJ','red','diamonds',11,'../images/DJ.png');
  var DQ = new Card ('DQ','red','diamonds',12,'../images/DQ.png');
  var DK = new Card ('DK','red','diamonds',13,'../images/DK.png');
  var CA = new Card ('CA','black','clubs',1,'../images/CA.png');
  var C2 = new Card ('C2','black','clubs',2,'../images/C2.png');
  var C3 = new Card ('C3','black','clubs',3,'../images/C3.png');
  var C4 = new Card ('C4','black','clubs',4,'../images/C4.png');
  var C5 = new Card ('C5','black','clubs',5,'../images/C5.png');
  var C6 = new Card ('C6','black','clubs',6,'../images/C6.png');
  var C7 = new Card ('C7','black','clubs',7,'../images/C7.png');
  var C8 = new Card ('C8','black','clubs',8,'../images/C8.png');
  var C9 = new Card ('C9','black','clubs',9,'../images/C9.png');
  var C1 = new Card ('C1','black','clubs',10,'../images/C1.png');
  var CJ = new Card ('CJ','black','clubs',11,'../images/CJ.png');
  var CQ = new Card ('CQ','black','clubs',12,'../images/CQ.png');
  var CK = new Card ('CK','black','clubs',13,'../images/CK.png');
  var SA = new Card ('SA','black','spades',1,'../images/SA.png');
  var S2 = new Card ('S2','black','spades',2,'../images/S2.png');
  var S3 = new Card ('S3','black','spades',3,'../images/S3.png');
  var S4 = new Card ('S4','black','spades',4,'../images/S4.png');
  var S5 = new Card ('S5','black','spades',5,'../images/S5.png');
  var S6 = new Card ('S6','black','spades',6,'../images/S6.png');
  var S7 = new Card ('S7','black','spades',7,'../images/S7.png');
  var S8 = new Card ('S8','black','spades',8,'../images/S8.png');
  var S9 = new Card ('S9','black','spades',9,'../images/S9.png');
  var S1 = new Card ('S1','black','spades',10,'../images/S1.png');
  var SJ = new Card ('SJ','black','spades',11,'../images/SJ.png');
  var SQ = new Card ('SQ','black','spades',12,'../images/SQ.png');
  var SK = new Card ('SK','black','spades',13,'../images/SK.png');

  var newShuffle = shuffle([HA,H2,H3,H4,H5,H6,H7,H8,H9,H1,HJ,HQ,HK,DA,D2,D3,D4,D5,D6,D7,D8,D9,D1,DJ,DQ,DK,CA,C2,C3,C4,C5,C6,C7,C8,C9,C1,CJ,CQ,CK,SA,S2,S3,S4,S5,S6,S7,S8,S9,S1,SJ,SQ,SK]);

  function logArrayElements(element, index, array) {
    array[index].position = index + 1;
    console.log(array[index].name + ' position: ' + (index + 1) + ' ' + array[index].position) + console.log(array[index].url);
  }

  newShuffle.forEach(logArrayElements);
  console.log(newShuffle);
};

var $newGame = $('#new-game')[0];
$("#new-game").click(function() {
  shuffleForNewGame();
});

});