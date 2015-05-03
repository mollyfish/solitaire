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

  var Card = function(name, color, suit, rank, url, faceUp, position){
    this.name = name;
    this.color = color;
    this.suit = suit;
    this.rank = rank;
    this.url = url;
    this.faceUp = false;
    this.position = position; 
  }

  var HA = new Card ('HA','red','hearts',1,'../public/images/HA.png');
  var H2 = new Card ('H2','red','hearts',2,'../public/images/H2.png');
  var H3 = new Card ('H3','red','hearts',3,'../public/images/H3.png');
  var H4 = new Card ('H4','red','hearts',4,'../public/images/H4.png');
  var H5 = new Card ('H5','red','hearts',5,'../public/images/H5.png');
  var H6 = new Card ('H6','red','hearts',6,'../public/images/H6.png');
  var H7 = new Card ('H7','red','hearts',7,'../public/images/H7.png');
  var H8 = new Card ('H8','red','hearts',8,'../public/images/H8.png');
  var H9 = new Card ('H9','red','hearts',9,'../public/images/H9.png');
  var H1 = new Card ('H1','red','hearts',10,'../public/images/H1.png');
  var HJ = new Card ('HJ','red','hearts',11,'../public/images/HJ.png');
  var HQ = new Card ('HQ','red','hearts',12,'../public/images/HQ.png');
  var HK = new Card ('HK','red','hearts',13,'../public/images/HK.png');
  var DA = new Card ('DA','red','diamonds',1,'../public/images/DA.png');
  var D2 = new Card ('D2','red','diamonds',2,'../public/images/D2.png');
  var D3 = new Card ('D3','red','diamonds',3,'../public/images/D3.png');
  var D4 = new Card ('D4','red','diamonds',4,'../public/images/D4.png');
  var D5 = new Card ('D5','red','diamonds',5,'../public/images/D5.png');
  var D6 = new Card ('D6','red','diamonds',6,'../public/images/D6.png');
  var D7 = new Card ('D7','red','diamonds',7,'../public/images/D7.png');
  var D8 = new Card ('D8','red','diamonds',8,'../public/images/D8.png');
  var D9 = new Card ('D9','red','diamonds',9,'../public/images/D9.png');
  var D1 = new Card ('D1','red','diamonds',10,'../public/images/D1.png');
  var DJ = new Card ('DJ','red','diamonds',11,'../public/images/DJ.png');
  var DQ = new Card ('DQ','red','diamonds',12,'../public/images/DQ.png');
  var DK = new Card ('DK','red','diamonds',13,'../public/images/DK.png');
  var CA = new Card ('CA','black','clubs',1,'../public/images/CA.png');
  var C2 = new Card ('C2','black','clubs',2,'../public/images/C2.png');
  var C3 = new Card ('C3','black','clubs',3,'../public/images/C3.png');
  var C4 = new Card ('C4','black','clubs',4,'../public/images/C4.png');
  var C5 = new Card ('C5','black','clubs',5,'../public/images/C5.png');
  var C6 = new Card ('C6','black','clubs',6,'../public/images/C6.png');
  var C7 = new Card ('C7','black','clubs',7,'../public/images/C7.png');
  var C8 = new Card ('C8','black','clubs',8,'../public/images/C8.png');
  var C9 = new Card ('C9','black','clubs',9,'../public/images/C9.png');
  var C1 = new Card ('C1','black','clubs',10,'../public/images/C1.png');
  var CJ = new Card ('CJ','black','clubs',11,'../public/images/CJ.png');
  var CQ = new Card ('CQ','black','clubs',12,'../public/images/CQ.png');
  var CK = new Card ('CK','black','clubs',13,'../public/images/CK.png');
  var SA = new Card ('SA','black','spades',1,'../public/images/SA.png');
  var S2 = new Card ('S2','black','spades',2,'../public/images/S2.png');
  var S3 = new Card ('S3','black','spades',3,'../public/images/S3.png');
  var S4 = new Card ('S4','black','spades',4,'../public/images/S4.png');
  var S5 = new Card ('S5','black','spades',5,'../public/images/S5.png');
  var S6 = new Card ('S6','black','spades',6,'../public/images/S6.png');
  var S7 = new Card ('S7','black','spades',7,'../public/images/S7.png');
  var S8 = new Card ('S8','black','spades',8,'../public/images/S8.png');
  var S9 = new Card ('S9','black','spades',9,'../public/images/S9.png');
  var S1 = new Card ('S1','black','spades',10,'../public/images/S1.png');
  var SJ = new Card ('SJ','black','spades',11,'../public/images/SJ.png');
  var SQ = new Card ('SQ','black','spades',12,'../public/images/SQ.png');
  var SK = new Card ('SK','black','spades',13,'../public/images/SK.png');
  var back = new Card ('back','none','none',0,'../public/images/backside.png');

  var newShuffle = shuffle([HA,H2,H3,H4,H5,H6,H7,H8,H9,H1,HJ,HQ,HK,DA,D2,D3,D4,D5,D6,D7,D8,D9,D1,DJ,DQ,DK,CA,C2,C3,C4,C5,C6,C7,C8,C9,C1,CJ,CQ,CK,SA,S2,S3,S4,S5,S6,S7,S8,S9,S1,SJ,SQ,SK]);

  function displayDeal(element, index, array) {
    array[index].position = index + 1;
    if (array[index].position === 1) {
      console.log('name: ' + array[index].name);
      array[index].faceUp = true;
      $("#one-1").attr({
        "class": "face-up " + array[index].name + ' ' + array[index].color + array[index].rank,
      }).draggable({revert:true});

      if (array[index].color === 'red') {
        $("#one-1").droppable({
          // accept: ".black" && "." + (array[index].rank - 1),
          accept: ".black" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable(disable);
          }
        });
      }
      if (array[index].color === 'black') {
        $("#one-1").droppable({
          // accept: ".red" && "." + (array[index].rank - 1),
          accept: ".red" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
    }
    if (array[index].position === 2) {
      console.log('name: ' + array[index].name);
      $("#two-1" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 3) {
      console.log('name: ' + array[index].name);
      $("#three-1" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 4) {
      console.log('name: ' + array[index].name);
      $("#four-1" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 5) {
      console.log('name: ' + array[index].name);
      $("#five-1" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 6) {
      console.log('name: ' + array[index].name);
      $("#six-1" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 7) {
      console.log('name: ' + array[index].name);
      $("#two-2").attr({
        "class": "face-up " + array[index].name + ' ' + array[index].color + array[index].rank,
      }).draggable({revert:true});
      if (array[index].color === 'red') {
        $("#two-2").droppable({
          // accept: ".black" && "." + (array[index].rank - 1),
          accept: ".black" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
      if (array[index].color === 'black') {
        $("#two-2").droppable({
          // accept: ".red" && "." + (array[index].rank - 1),
          accept: ".red" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
    }
    if (array[index].position === 8) {
      console.log('name: ' + array[index].name);
      $("#three-2" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 9) {
      console.log('name: ' + array[index].name);
      $("#four-2" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 10) {
      console.log('name: ' + array[index].name);
      $("#five-2" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 11) {
      console.log('name: ' + array[index].name);
      $("#six-2" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 12) {
      console.log('name: ' + array[index].name);
      $("#three-3").attr({
        "class": "face-up " + array[index].name + ' ' + array[index].color + array[index].rank,
      }).draggable({revert:true});
      if (array[index].color === 'red') {
        $("#three-3").droppable({
          // accept: ".black" && "." + (array[index].rank - 1),
          accept: ".black" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
      if (array[index].color === 'black') {
        $("#three-3").droppable({
          // accept: ".red" && "." + (array[index].rank - 1),
          accept: ".red" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
    }
    if (array[index].position === 13) {
      console.log('name: ' + array[index].name);
      $("#four-3" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 14) {
      console.log('name: ' + array[index].name);
      $("#five-3" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 15) {
      console.log('name: ' + array[index].name);
      $("#six-3" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 16) {
      console.log('name: ' + array[index].name);
      $("#four-4").attr({
        "class": "face-up " + array[index].name + ' ' + array[index].color + array[index].rank,
      }).draggable({revert:true});
      if (array[index].color === 'red') {
        $("#four-4").droppable({
          // accept: ".black" && "." + (array[index].rank - 1),
          accept: ".black" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
      if (array[index].color === 'black') {
        $("#four-4").droppable({
          // accept: ".red" && "." + (array[index].rank - 1),
          accept: ".red" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
    }
    if (array[index].position === 17) {
      console.log('name: ' + array[index].name);
      $("#five-4" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 18) {
      console.log('name: ' + array[index].name);
      $("#six-4" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 19) {
      console.log('name: ' + array[index].name);
      $("#five-5").attr({
        "class": "face-up " + array[index].name + ' ' + array[index].color + array[index].rank,
      }).draggable({revert:true});
      if (array[index].color === 'red') {
        $("#five-5").droppable({
          // accept: ".black" && "." + (array[index].rank - 1),
          accept: ".black" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
      if (array[index].color === 'black') {
        $("#five-5").droppable({
          // accept: ".red" && "." + (array[index].rank - 1),
          accept: ".red" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
    }
    if (array[index].position === 20) {
      console.log('name: ' + array[index].name);
      $("#six-5" ).attr({
        "class": "face-down " + array[index].name,
      });
    }
    if (array[index].position === 21) {
      console.log('name: ' + array[index].name);
      $("#six-6").attr({
        "class": "face-up " + array[index].name + ' ' + array[index].color + array[index].rank,
      }).draggable({revert:true});
      if (array[index].color === 'red') {
        $("#six-6").droppable({
          // accept: ".black" && "." + (array[index].rank - 1),
          accept: ".black" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
      if (array[index].color === 'black') {
        $("#six-6").droppable({
          // accept: ".red" && "." + (array[index].rank - 1),
          accept: ".red" + (array[index].rank - 1),
          tolerance: "intersect",
          drop: function(ev, ui) {
            console.log('dropped');
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 30,left: 0}).insertAfter(droppedOn);
            // $(droppedOn).droppable("disable");
          }
        });
      }
    }
    if ((array[index].position > 21) && (array[index].position < 53)) {
      console.log('not in stack! name: ' + array[index].name + ' position: ' + array[index].position);
      $('#reservoir').prepend('<li class="face-down ' + array[index].name + '"></li>');
    }
  }
  newShuffle.forEach(displayDeal);
};

$("#new-game").click(function() {
  shuffleForNewGame();
});

});