
$(init);
function init(){
  $("#datep").datepicker();
  $("p").addClass("ui-widget")
  .addClass("ui-widget-content")
  .addClass("ui-corner-all");
  $("#loc").selectmenu();
  $("#days").spinner();
  $('#resizable').resizable();
}

function submit(){
  alert("Details saved successfully");
  $("#days").val("");
  $("#datep").val("");
  $("#resizable").val("");
  $("#loc").selectmenu("refresh", true); 
}
