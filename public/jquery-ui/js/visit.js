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
  if (!$.datepicker.initialized) {
	    $(document).mousedown($.datepicker._checkExternalClick)
	        // !!!!!!!!!!
	        // The next code line has to be added again so that the date picker
	        // shows up when the popup is opened more than once without reloading
	        // the "base" page.
	        // !!!!!!!!!!
	        .find(document.body).append($.datepicker.dpDiv);
	    $.datepicker.initialized = true;
	}
}

function submit(){
  $("#location").val("");
  //$("#successMsg").show();
  alert("Details saved successfully");

}

