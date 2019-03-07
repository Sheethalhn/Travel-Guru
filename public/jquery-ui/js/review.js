

$( function() {
  var handle = $( "#custom-handle" );
  $( "#slider" ).slider({
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    min: 1,
    max: 10,
    step: 0.5,
    slide: function( event, ui ) {
      handle.text( ui.value );
    }
  });
} );

$(init);
function init(){
  $("#slider").slider().bind("slide");
  $("#resize").resizable();
  $("p").addClass("ui-widget")
  .addClass("ui-widget-content")
  .addClaass("ui-corner-all");
}

function submit(){
  $("#resize").val("");
  $("#location").val("");

}

function reportSlider()
{
    var sliderVal = $("#slider").slider("value");
    $("#slideOutput").html(sliderVal);
}

function openDialog()
{
    $("#dialog").dialog("open");
}

function closeDialog()
{
    $("#dialog").dialog("close");
}
