$("#success").hide();

$(init);
function init(){
  
  $("p").addClass("ui-widget")
  .addClass("ui-widget-content")
  .addClass("ui-corner-all");
  
  $(".dragMe").draggable();
  $(".dragMe1").draggable();
  $(".dragMe2").draggable();
  $(".dragMe3").draggable();
  $(".dragMe4").draggable();
  $(".dragMe5").draggable();
  $("#target").droppable();

  $("#target").bind("drop",    highlightTarget);
  $("#target").bind("dropout", resetTarget);
  $("input[type='radio']").checkboxradio();
  
}

function submit(){
  
  //$("#success").show();
	//alert("Details saved successfully");
	alert('Details saved successfully !') ? "" : $(document).load();
}

function highlightTarget(event, ui)
{
    $("#target").addClass("ui-state-highlight")
                .html("Picture uploaded ")
} 

function resetTarget(event, ui)
{
    $("#target").removeClass("ui-state-highlight")
                .html("Upload picture");
}