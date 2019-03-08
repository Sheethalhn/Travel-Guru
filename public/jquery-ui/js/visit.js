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
  $("#location option:eq(0)").attr('selected','selected');
  $("#days").val("");
  $("#datep").val("");
  $("#resizable").val("");
  //$("#successMsg").show();
  alert("Details saved successfully");

}
