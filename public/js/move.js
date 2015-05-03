'use strict';
$(function(){
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