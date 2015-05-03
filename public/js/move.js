'use strict';
$(function(){

$('.HA').draggable({revert: true});
$('.H2').draggable({revert: true});
$('.H3').draggable({revert: true});
$('.H4').draggable({revert: true});
$('.H5').draggable({revert: true});
$('.H6').draggable({revert: true});
$('.H7').draggable({revert: true});
$('.H8').draggable({revert: true});
$('.H9').draggable({revert: true});
$('.H1').draggable({revert: true});
$('.HJ').draggable({revert: true});
$('.HQ').draggable({revert: true});
$('.HK').draggable({revert: true});
$('.DA').draggable({revert: true});
$('.D2').draggable({revert: true});
$('.D3').draggable({revert: true});
$('.D4').draggable({revert: true});
$('.D5').draggable({revert: true});
$('.D6').draggable({revert: true});
$('.D7').draggable({revert: true});
$('.D8').draggable({revert: true});
$('.D9').draggable({revert: true});
$('.D1').draggable({revert: true});
$('.DJ').draggable({revert: true});
$('.DQ').draggable({revert: true});
$('.DK').draggable({revert: true});
$('.CA').draggable({revert: true});
$('.C2').draggable({revert: true});
$('.C3').draggable({revert: true});
$('.C4').draggable({revert: true});
$('.C5').draggable({revert: true});
$('.C6').draggable({revert: true});
$('.C7').draggable({revert: true});
$('.C8').draggable({revert: true});
$('.C9').draggable({revert: true});
$('.C1').draggable({revert: true});
$('.CJ').draggable({revert: true});
$('.CQ').draggable({revert: true});
$('.CK').draggable({revert: true});
$('.SA').draggable({revert: true});
$('.S2').draggable({revert: true});
$('.S3').draggable({revert: true});
$('.S4').draggable({revert: true});
$('.S5').draggable({revert: true});
$('.S6').draggable({revert: true});
$('.S7').draggable({revert: true});
$('.S8').draggable({revert: true});
$('.S9').draggable({revert: true});
$('.S1').draggable({revert: true});
$('.SJ').draggable({revert: true});
$('.SQ').draggable({revert: true});
$('.SK').draggable({revert: true});





  $('#moveit1').draggable({revert:true});
  $('#moveit2').draggable({revert:true});
  $('.red').droppable({
    accept: ".black",
    tolerance: "intersect",
    drop: function(ev, ui) {
      console.log('dropped');
      var dropped = ui.draggable;
      var droppedOn = $(this);
      $(dropped).detach();
      $(dropped).css({top: 30,left: 0});
      $(dropped).appendTo(droppedOn);
    }
  });
  $('.black').droppable({
    accept: ".red",
    tolerance: "intersect",
    drop: function(ev, ui) {
      console.log('dropped');
      var dropped = ui.draggable;
      var droppedOn = $(this);
      $(dropped).detach().css({top: 30,left: 0}).appendTo(droppedOn);
    }
  });


  function cardSnap(droppedOn, droppedElement) {
    $('#dropzone1').html('<div id="moveit1" class="red">' + $('#moveit1').html() + '</div>' );
    $('#moveit1').remove();
  }



});