$("#successMsg").hide();
$(init);
function init(){
  $("#datep").datepicker();
  $("p").addClass("ui-widget")
  .addClass("ui-widget-content")
  .addClass("ui-corner-all");
  $("#location").selectmenu();
  $("#days").spinner();
  $('#resizable').resizable();
}

function submit(){
  $("#loc").val("0"); 
  $("#days").val("");
  $("#datep").val("");
  $("#resizable").val("");
  alert("Details saved successfully");
}
