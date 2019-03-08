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
  $("#location").val("");
  //$("#successMsg").show();
  alert("Details saved successfully");

}

