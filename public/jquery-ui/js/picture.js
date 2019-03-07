$(init);

function init()
{

    $(".dragMe").draggable();
    $(".dragMe1").draggable();
    $(".dragMe2").draggable();
    $(".dragMe3").draggable();
    $(".dragMe4").draggable();
    $(".dragMe5").draggable();
    $("#target").droppable();

    $("#target").bind("drop",    highlightTarget);
    $("#target").bind("dropout", resetTarget);
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