
$("#successMsg").hide();

$(init);
function init(){
  $("#datePicker").datepicker();
  $("p").addClass("ui-widget")
  .addClass("ui-widget-content")
  .addClaass("ui-corner-all");
}

function submit(){
  $("#location").val("");
  $("#successMsg").show();
}